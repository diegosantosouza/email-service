import { Router } from 'express'
import { makeSendMailController } from '../factories/controllers/healthcheck/send-mail-controller-factory';
import adaptRoute from '../adapters/express-route-adapter';

const sendEmailRouter = Router()

sendEmailRouter.post('/send-mail', adaptRoute(makeSendMailController()))

export default sendEmailRouter