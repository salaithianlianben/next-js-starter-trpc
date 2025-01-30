// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "@/hooks/useSession";

// export function AuthGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter();
//   const { session, loading } = useSession();
//   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     if (!loading) {
//       if (!session) {
//         router.push("/auth");
//       } else {
//         setIsAuth(true);
//       }
//     }
//   }, [session, loading, router]);

//   if (loading || !isAuth) return <p>Loading...</p>;

//   return <>{children}</>;
// }

"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "@/hooks/useSession";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { session, loading } = useSession();

  useEffect(() => {
    if (!loading) {
      if (session) {
        if (pathname.startsWith("/auth")) {
          router.push("/");
        }
      } else {
        if (!pathname.startsWith("/auth")) {
          router.push("/auth");
        }
      }
    }
  }, [session, loading, pathname, router]);

  if (loading || (!session && !pathname.startsWith("/auth"))) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
}
