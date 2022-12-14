import * as trpc from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson';
export const infoRouter = trpc
  .router()
  .transformer(superjson)
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish()
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`
      };
    }
  });
