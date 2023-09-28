import 'dotenv/config'
import { ExitStatus } from '@/main/enums/exit-status-enum'
import { setupApp } from '@/main/config/app'

const port = process.env.PORT || 3000

async function gracefulShutdown(server: any) {
  try {
    server.close(() => {
      console.info('Server exited with success')
      process.exit(ExitStatus.Success)
    })
  } catch (error) {
    console.error('Server exited with error:', error)
    process.exit(ExitStatus.Failure)
  }
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  process.exit(ExitStatus.Failure)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error(`Unhandled Rejection promise: ${promise} and reason ${reason}`)
  throw reason
})

async function startServer() {
  try {
    const app = await setupApp()
    const server = app.listen(port, () => {
      console.info(`Server initialized on port: ${port}`)
    })
    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']
    exitSignals.forEach((sig) => {
      process.on(sig, async () => {
        try {
          await gracefulShutdown(server)
        } catch (error) {
          console.error('Error during graceful shutdown:', error)
          process.exit(ExitStatus.Failure)
        }
      })
    })
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(ExitStatus.Failure);
  }
}

startServer()