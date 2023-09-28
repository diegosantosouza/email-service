import { Express, Router } from 'express'
import healthcheckRouter from '../routes/healthcheck-route'
import sendEmailRouter from '../routes/send-email-route'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)
  router.use(healthcheckRouter)
  router.use(sendEmailRouter)
}
