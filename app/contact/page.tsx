export default function ContactPage() {
  return (
    <section className="container py-10">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <h1>Contact</h1>
        <p className="text-white/80">Get in touch with the Lizard Kingz team.</p>

        {/* FormSubmit contact form */}
        <form
          // action="https://formsubmit.co/mikal@lizardkingz.com"
          action="https://formsubmit.co/lindseykartvedt@gmail.com"
          method="POST"
          className="card space-y-4 text-left"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full"
            />
          </div>

          <input name="subject" placeholder="Subject" className="w-full" />
          <textarea
            required
            name="message"
            placeholder="Message"
            className="w-full min-h-[140px]"
          />

          {/* You can customize these hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://lizardkingz.vercel.app/thank-you"
          />

          <button type="submit" className="btn btn-primary w-full">
            Send Email
          </button>
        </form>

        <p className="text-xs text-white/50">
          This form securely sends your message to <b>mikal@lizardkingz.com</b> via FormSubmit.
        </p>
      </div>
    </section>
  )
}
