import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const { fullName, company, email, phone, subject, message } = body;

		if (!fullName || !email || !subject || !message) {
			return NextResponse.json(
				{ message: "Missing required fields." },
				{ status: 400 },
			);
		}

		if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
			return NextResponse.json(
				{ message: "Server configuration error." },
				{ status: 500 },
			);
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		const emailHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: sans-serif; background-color: #ffffff; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 20px 10px; background-color: #ffffff; padding: 30px; border-radius: 8px; }
                .content { color: #333; line-height: 1.6; }
                .section-title { font-size: 15px; font-weight: bold; margin-top: 20px; color: #333; }
                .data-list { list-style: none; padding: 0; margin: -30px 0 40px 0; }
                .data-list li { margin-left: 20px; list-style: disc; font-size: 14px; }
                .message-box { font-size: 14px; padding: 15px; white-space: pre-wrap; }
                .footer { margin-left: 40px; margin-top: 20px; font-size: 12px; color: #888; }
            </style>
        </head>
        <body>
            <div class="container">
                <p class="section-title">Sender Details</p>
                <ul class="data-list">
                    <li><strong>Full Name:</strong> ${fullName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    ${company ? `<li><strong>Company:</strong> ${company}</li>` : ""}
                    ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ""}
                </ul>
                
                <p style="margin-top: 30px; font-weight: bold; font-size: 16px;">Re. ${subject}</p>
                <p class="content">${message}</p>
            </div>
            
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Echelon Landworks. All rights reserved.</p>
            </div>
        </body>
        </html>
        `;

		const mailOptions = {
			from: process.env.GMAIL_ALIAS,
			to: process.env.GMAIL_ALIAS,
			subject: `Contact Form Message from ${fullName}${company ? ` (${company})` : ""}`,
			html: emailHtml,
		};

		const replyToOptions = {
			from: process.env.GMAIL_ALIAS,
			to: email,
			subject: `Thank you for your message`,
			html: `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<style>
						body { font-family: sans-serif; background-color: #ffffff; margin: 0; padding: 0; }
						.container { max-width: 600px; margin: 20px 10px; background-color: #ffffff; padding: 30px; border-radius: 8px; }
						.content { color: #333; line-height: 1.6; }
						.footer { margin-left: 40px; margin-top: 20px; font-size: 12px; color: #888; }
					</style>
				</head>
				<body>
					<div class="container">
						<p class="content">Thank you for your message. We'll get back to you soon.</p>
					</div>
					<div class="footer">
						<p>&copy; ${new Date().getFullYear()} Echelon Landworks. All rights reserved.</p>
					</div>
				</body>
				</html>
			`,
		};

		try {
			await Promise.all([
				transporter.sendMail(mailOptions),
				transporter.sendMail(replyToOptions),
			]);
		} catch (error) {
			console.error("Error sending email:", error);
			return NextResponse.json(
				{ message: "Failed to send email." },
				{ status: 500 },
			);
		}

		return NextResponse.json(
			{ message: "Form submission successful." },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error processing request:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
