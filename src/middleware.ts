import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Tools } from "./utils/dev-tools";

export function middleware(request: NextRequest) {
	Tools.log("Middleware called", request.nextUrl.toString());
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_nextstatic|static|images|fonts|favicon).*|$)"],
};
