export const awsConfig = {
  secretKey: process.env['AWS_SECRET_ACCESS_KEY']!,
  accessKeyId: process.env['AWS_ACCESS_KEY_ID']!,
  mediaBucket: process.env['S3_BUCKET']!,
  region: process.env['AWS_REGION']!,
  emailSource: process.env['EMAIL_SOURCE']!,
  awsEndpoint: process.env['AWS_ENDPOINT']!
}