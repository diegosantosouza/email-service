import { bodyParser, apiVersion, errorHandler, xPoweredBy, cors, morganFormat, contentType } from '@/main/middlewares'
import { Express } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(apiVersion)
  app.use(contentType)
  app.use(xPoweredBy)
  app.use(cors)
  app.use(morgan(morganFormat))
  app.use(helmet())
  app.use(errorHandler)
}
