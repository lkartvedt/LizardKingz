export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1>Contact</h1>
      <p className="text-white/80">Get in touch with the Lizard Kingz team.</p>
      <form className="card space-y-4" action="mailto:mikal@lizardkingz.com" method="POST" encType="text/plain">
        <div className="grid md:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" />
          <input required type="email" name="email" placeholder="Your email" />
        </div>
        <input name="subject" placeholder="Subject" />
        <textarea required name="message" placeholder="Message" className="min-h-[120px]" />
        <button className="btn btn-primary" type="submit">Send Email</button>
      </form>
      <p className="text-xs text-white/50">This uses a <code>mailto:</code> action which opens the user’s email client. For server-side sending, wire a provider via a Vercel Route Handler.</p>
    </section>
  )
}
