"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  return (
    <SidebarProvider>
      {!isAuthPage && <AppSidebar />}
      <main className="min-h-screen w-full">
        {!isAuthPage && <SidebarTrigger />}
        {children}
      </main>
    </SidebarProvider>
  );
}
