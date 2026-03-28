import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/theme-provider";
import "@repo/ui/globals.css";
import { LoginForm } from "@/shared/ui/components/login-form";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
	<StrictMode>
		<ThemeProvider>
			<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
				<div className="flex w-full max-w-sm flex-col gap-6">
					<a
						href="#"
						className="flex items-center gap-2 self-center font-medium"
					>
						Acme Inc.
					</a>
					<LoginForm />
				</div>
			</div>
		</ThemeProvider>
	</StrictMode>,
);
