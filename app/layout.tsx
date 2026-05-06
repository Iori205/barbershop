import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AdminLayout } from "./_components/AdminLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./_components/ThemeProvider";

export const metadata: Metadata = {
  title: "Luxe Hair Salon",
  description: "Luxe Hair Salon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="">
        <body className="antialiased">
          <AdminLayout>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster position="top-right" reverseOrder={false} />
            </ThemeProvider>
          </AdminLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
