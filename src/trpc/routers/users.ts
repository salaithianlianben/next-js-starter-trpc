import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../server";

export const usersRouter = router({
  getUser: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const { data: user, error } = await ctx.supabase
        .from("users")
        .select("*")
        .eq("id", input)
        .single();

      if (error) throw error;
      return user;
    }),

  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { data, error } = await ctx.supabase
        .from("users")
        .insert([input])
        .select()
        .single();

      if (error) throw error;
      return data;
    }),
});
