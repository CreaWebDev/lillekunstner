import { createTransport } from 'nodemailer'
import { H3Event } from 'h3'

const config = useRuntimeConfig()

const transporter = createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const { name, email, photoData, productType, instructions } = body

    // Create email content with HTML formatting
    const htmlContent = `
      <h2>New Order from Lillekunstner</h2>
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Order Details:</h3>
      <p><strong>Product Type:</strong> ${productType}</p>
      <p><strong>Special Instructions:</strong> ${instructions || 'None'}</p>
      <h3>Attached Photo:</h3>
      <img src="${photoData}" style="max-width: 500px; height: auto;" />
    `

    // Send email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@lillekunstner.no',
      to: process.env.ORDER_EMAIL || 'orders@lillekunstner.no',
      subject: `New Order from ${name}`,
      html: htmlContent,
    })

    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error('Error sending email:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send email',
    })
  }
})