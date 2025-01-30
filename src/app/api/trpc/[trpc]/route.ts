import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/trpc/routers/_app';
import { createContext } from '@/trpc/context';

const handler = async (req: Request) => {
  try {
    const response = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      createContext,
      onError: 
        process.env.NODE_ENV === 'development'
          ? ({ path, error }) => {
              console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`);
            }
          : undefined,
    });
    
    return response;
  } catch (error) {
    console.error('tRPC request handler error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export { handler as GET, handler as POST };