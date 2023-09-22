export interface EmailService {
  send(payload: EmailService.Payload): Promise<void>
}

export namespace EmailService {
  export type Payload = {
    to: string[],
    subject: string,
    body: string
  }
}