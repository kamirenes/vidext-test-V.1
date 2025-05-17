import { router } from './trpc'
import { shapeRouter } from './shapeRouter'

export const appRouter = router({
  shape: shapeRouter,
})

export type AppRouter = typeof appRouter
