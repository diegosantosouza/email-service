export const Env = {
  emailStrategy: process.env['EMAIL_STRATEGY'],
  emailSource: process.env['EMAIL_SOURCE']!,
  smtpHost: process.env['SMTP_HOST']!,
  smtpPort: +process.env['SMTP_PORT']!,
  smtpSecure: Boolean(process.env['SMTP_SECURE']!),
  smtpUser: process.env['SMTP_USER']!,
  smtpPass: process.env['SMTP_PASSWORD']!
}