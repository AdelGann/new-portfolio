import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import { FooterComponent } from "@/components/custom/footer";
import { NavBarComponent } from "@/components/custom/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	title: "Adel Gannem - Developer",
	description: "Hi everyone 👋! My name is Adel Gannem. FullStack Developer React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NavBarComponent />
					{children}
					<FooterComponent />
				</ThemeProvider>
			</body>
		</html>
	);
}
