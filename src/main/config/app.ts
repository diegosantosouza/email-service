import Fastify, { FastifyInstance } from 'fastify'
import setupRoutes from '@/main/config/routes'
export const setupApp = async (): Promise<FastifyInstance> => {
  const app = Fastify({
    logger: true
  })
  // setupSwagger(app)
  // setupMiddlewares(app)
  setupRoutes(app)
  return app
}
