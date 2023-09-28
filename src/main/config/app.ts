import express from 'express'
import setupRoutes from '@/main/config/routes'
import setupMiddlewares from '@/main/config/middlewares'
import setupSwagger from '@/main/config/config-swagger'
import { Express } from 'express'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
