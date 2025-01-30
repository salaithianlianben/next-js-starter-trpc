/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { api } from "@/trpc/client";

export function useSession() {
  const { data, isLoading, error } = api.auth.getSession.useQuery();

  if (error) {
    console.error("Error fetching session:", error);
  }

  return {
    session: data?.session || null,
    loading: isLoading,
  };
}
