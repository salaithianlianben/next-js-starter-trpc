import { TABLE_ROLES } from "@/constants/tables.constant";
import { protectedProcedure, router } from "../server";
import { z } from "zod";
import { Role } from "@/@types/role";

export const rolesRouter = router({
  getRoles: protectedProcedure.query(async ({ ctx }) => {
    const { data: roles, error } = await ctx.supabase
      .from(TABLE_ROLES)
      .select("*");

    if (error) throw error;
    return roles as Role[];
  }),
  getRoleById: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const { data: role, error } = await ctx.supabase
        .from(TABLE_ROLES)
        .select("*")
        .eq("id", input)
        .single();

      if (error) throw error;
      return role as Role;
    }),

  getRoleByName: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const { data: role, error } = await ctx.supabase
        .from(TABLE_ROLES)
        .select("*")
        .eq("name", input)
        .single();

      if (error) throw error;
      return role as Role;
    }),
  getAdminRoles: protectedProcedure.query(async ({ ctx }) => {
    const { data, error } = await ctx.supabase
      .from(TABLE_ROLES)
      .select("*")
      .neq("name", "audience");

    if (error) throw error;
    return data as Role[];
  }),
});
