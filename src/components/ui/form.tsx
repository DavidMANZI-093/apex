"use client";

import React, { useState } from "react";
import Button from "./button";
import { z } from "zod";

type Props = {};

const Form = (props: Props) => {
	const [loading, setLoading] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const [formState, setFormState] = useState({
		fullName: "",
		company: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [formError, setFormError] = useState({
		fullName: "",
		company: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const fieldName = e.target.id as keyof typeof formState;

		setFormState({
			...formState,
			[fieldName]: e.target.value,
		});

		// Clear error for this field when user starts typing
		if (formError[fieldName]) {
			setFormError({
				...formError,
				[fieldName]: "",
			});
		}

		// Clear success message when user modifies form
		if (submitSuccess) {
			setSubmitSuccess(false);
		}
	};

	const handleSubmit = async () => {
		if (loading) {
			return;
		}

		setLoading(true);
		setSubmitSuccess(false);

		const schema = z.object({
			fullName: z
				.string()
				.trim()
				.min(3, "Full name must be at least 3 characters long")
				.max(100, "Full name must be at most 100 characters long"),
			company: z
				.string()
				.trim()
				.max(100, "Company name must be at most 100 characters long")
				.optional()
				.or(z.literal("")), // Allow empty string
			email: z.string().trim().email("Invalid email address"),
			phone: z
				.string()
				.trim()
				.refine((val) => val === "" || /^\+2507[2389]\d{7}$/.test(val), {
					message: "Invalid phone number format. Use +2507XXXXXXX",
				}),
			subject: z
				.string()
				.trim()
				.min(3, "Subject must be at least 3 characters long")
				.max(100, "Subject must be at most 100 characters long"),
			message: z
				.string()
				.trim()
				.min(10, "Message must be at least 10 characters long")
				.max(1000, "Message must be at most 1000 characters long"),
		});

		const result = schema.safeParse(formState);

		if (!result.success) {
			// Clear previous errors
			const newErrors = {
				fullName: "",
				company: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			};

			// Map validation errors to form fields using Zod's issues array
			result.error.issues.forEach((issue) => {
				const fieldName = issue.path[0] as keyof typeof newErrors;
				if (fieldName && !newErrors[fieldName]) {
					newErrors[fieldName] = issue.message;
				}
			});

			setFormError(newErrors);
			setLoading(false);
			return;
		}

		// Clear all errors on successful validation
		setFormError({
			fullName: "",
			company: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(result.data),
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			console.log("Message sent successfully");

			// Reset form and show success message
			setFormState({
				fullName: "",
				company: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
			});

			setSubmitSuccess(true);
		} catch (error) {
			console.error("Error sending message:", error);
			// You might want to show a user-friendly error message here
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col gap-6 !p-8 !rounded-lg !bg-white !shadow-md shadow-slate-gray/20">
			<div className="flex flex-col">
				<h4 className="!text-lg !font-medium !text-indigo-dye/85 mb-6">
					Send us a message
				</h4>
				<p className="!text-sm !text-slate-gray leading-relaxed">
					{"Fill out the form below and we'll get back " +
						"to you within 24 hours."}
				</p>
			</div>

			{submitSuccess && (
				<div className="!p-4 !rounded-lg !bg-green-50 !border !border-green-200">
					<p className="!text-sm !text-green-800">
						Thank you! Your message has been sent successfully. We'll get back
						to you soon.
					</p>
				</div>
			)}

			<div className="flex flex-col gap-4">
				<div className="grid sm:grid-cols-2 gap-6">
					<div className="flex flex-col w-full gap-2">
						<label
							className="!text-sm !font-medium !text-indigo-dye/85"
							htmlFor="fullName"
						>
							Full Name *
						</label>
						<input
							className="flex !text-sm !p-2 !rounded-lg !border !border-slate-gray/30"
							id="fullName"
							type="text"
							placeholder="Your full name"
							value={formState.fullName}
							onChange={handleChange}
						/>
						{formError.fullName && (
							<span className="!text-xs !pl-2 !text-red-500">
								{formError.fullName}
							</span>
						)}
					</div>
					<div className="flex flex-col w-full gap-2">
						<label
							className="!text-sm !font-medium !text-indigo-dye/85"
							htmlFor="company"
						>
							Company/Organization
						</label>
						<input
							className="flex !text-sm !p-2 !rounded-lg !border !border-slate-gray/30"
							id="company"
							type="text"
							placeholder="Your company"
							value={formState.company}
							onChange={handleChange}
						/>
						{formError.company && (
							<span className="!text-xs !pl-2 !text-red-500">
								{formError.company}
							</span>
						)}
					</div>
				</div>

				<div className="grid sm:grid-cols-2 gap-6">
					<div className="flex flex-col w-full gap-2">
						<label
							className="!text-sm !font-medium !text-indigo-dye/85"
							htmlFor="email"
						>
							Email *
						</label>
						<input
							className="flex !text-sm !p-2 !rounded-lg !border !border-slate-gray/30"
							id="email"
							type="email"
							placeholder="your@email.com"
							value={formState.email}
							onChange={handleChange}
						/>
						{formError.email && (
							<span className="!text-xs !pl-2 !text-red-500">
								{formError.email}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label
							className="!text-sm !font-medium !text-indigo-dye/85"
							htmlFor="phone"
						>
							Phone Number
						</label>
						<input
							className="flex !text-sm !p-2 !rounded-lg !border !border-slate-gray/30"
							id="phone"
							placeholder="+250 7XX XXX XXX"
							value={formState.phone}
							onChange={handleChange}
						/>
						{formError.phone && (
							<span className="!text-xs !pl-2 !text-red-500">
								{formError.phone}
							</span>
						)}
					</div>
				</div>

				<hr className="!my-6 !border-slate-gray/30" />

				<div className="flex flex-col gap-2">
					<label
						className="!text-sm !font-medium !text-indigo-dye/85"
						htmlFor="subject"
					>
						Subject *
					</label>
					<input
						className="flex !text-sm !p-2 !rounded-lg !border !border-slate-gray/30"
						id="subject"
						type="text"
						placeholder="Subject"
						value={formState.subject}
						onChange={handleChange}
					/>
					{formError.subject && (
						<span className="!text-xs !pl-2 !text-red-500">
							{formError.subject}
						</span>
					)}

					<label
						className="!text-sm !font-medium !text-indigo-dye/85 !mt-4"
						htmlFor="message"
					>
						Message *
					</label>
					<textarea
						className="flex w-full !h-24 !text-sm !p-2 !rounded-lg !border !border-slate-gray/30"
						id="message"
						placeholder="Tell us about your project or inquiry..."
						rows={5}
						value={formState.message}
						onChange={handleChange}
					/>
					{formError.message && (
						<span className="!text-xs !pl-2 !text-red-500">
							{formError.message}
						</span>
					)}
				</div>
			</div>
			<Button onClick={handleSubmit} loading={loading}>
				Send Message
			</Button>
			<span className="!text-xs !text-slate-gray !mx-auto !-my-3">
				Fields marked with * are required
			</span>
		</div>
	);
};

export default Form;
