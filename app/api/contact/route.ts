import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ success: false, error: 'Server misconfigured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Lizard Kingz <contact@lizardkingz.com>', // use a domain you've verified in Resend
      to: 'mikal@lizardkingz.com',
      subject: subject || `New message from ${name || 'Website'}`,
      replyTo: email || undefined,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false, error: 'Email failed' }, { status: 500 })
  }
}

