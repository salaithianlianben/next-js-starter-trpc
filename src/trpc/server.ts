import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import { type Context } from './context';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

const isAuthed = t.middleware(async ({ ctx, next }) => {
  const { data: { session } } = await ctx.supabase.auth.getSession();
  
  if (!session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  
  return next({
    ctx: {
      user: session.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);