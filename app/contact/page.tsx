'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setLoading(false)
    if (res.ok) setSent(true)
  }

  if (sent) {
    return (
      <section className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="text-white/80">Your message has been sent.</p>
      </section>
    )
  }

  return (
    <section className="container py-10">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <h1>Contact</h1>
        <p className="text-white/80">Get in touch with the Lizard Kingz team.</p>

        <form onSubmit={handleSubmit} className="card space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="w-full" />
            <input required type="email" name="email" placeholder="Your email" className="w-full" />
          </div>

          <input name="subject" placeholder="Subject" className="w-full" />

          <textarea
            required
            name="message"
            placeholder="Message"
            className="w-full h-40 md:h-48 resize-y"
          />

          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Email'}
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}
