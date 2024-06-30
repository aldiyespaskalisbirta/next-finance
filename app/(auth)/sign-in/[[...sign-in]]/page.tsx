import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
	return (
		<div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
			<div className="h-full flex-col items-center justify-center px-4 lg:flex">
				<div className="space-y-4 pt-16 text-center">
					<h1 className="text-3xl font-bold text-[#2E2A47]">Welcome Back</h1>
					<p className="text-base text-[#7EACA0]">
						Log in or Create account to get back to your dashboard
					</p>
				</div>
				<div className="mt-8 flex items-center justify-center">
					<ClerkLoaded>
						<SignIn path="/sign-in" />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader className="animate-spin text-muted-foreground" />
					</ClerkLoading>
				</div>
			</div>
			<div className="hidden h-full items-center justify-center bg-blue-600 lg:flex">
				<Image
					src="/logo.svg"
					alt="logo"
					height={200}
					width={200}
					className="h-auto w-48"
					priority
				/>
			</div>
		</div>
	);
}