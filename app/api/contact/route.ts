import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    await resend.emails.send({
      from: 'Lizard Kingz Inquiry <contact@lizardkingz.com>',
      // to: 'mikal@lizardkingz.com',
      to: 'lindseykartvedt@gmail.com',
      subject: subject || `New message from ${name}`,
      reply_to: email,
      text: `
        Name: ${name}
        Email: ${email}

        ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
