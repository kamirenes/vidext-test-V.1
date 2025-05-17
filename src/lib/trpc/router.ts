import { router } from './trpc'
import { shapeRouter } from './shapeRouter'
import { aiRouter } from './aiRouter'

export const appRouter = router({
  shape: shapeRouter,
  ai: aiRouter,
})

export type AppRouter = typeof appRouter
