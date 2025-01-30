import * as trpc from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { createClient } from "@/lib/supabase/server";
import type { SupabaseClient } from "@supabase/supabase-js";

export async function createContext(opts: FetchCreateContextFnOptions) {
  const supabase: SupabaseClient = await createClient();

  return {
    supabase,
    headers: opts.req.headers,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
