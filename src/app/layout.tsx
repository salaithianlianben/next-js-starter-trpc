import { Providers } from "./providers";
import "./globals.css";
import { AuthGuard } from "@/components/auth-guard";
import { ClientLayout } from "@/components/layout/client-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthGuard>
            <ClientLayout>{children}</ClientLayout>
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
