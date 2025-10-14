
export default function ShopPage() {
  return (
    <section className="space-y-6">
      <h1>Shop (Coming Soon)</h1>
      <p className="text-white/80">Merch drops will announce here. For now, join the list.</p>

      {/* Keep this a Server Component by avoiding event handlers */}
      <form className="card space-y-3" action="#">
        <input type="email" required placeholder="Email for merch updates" />
        {/* Non-submitting button so nothing posts or navigates */}
        <button className="btn btn-orange" type="button">Notify Me</button>
      </form>

      <div className="card">
        <p className="text-white/70">
          Later, embed Shopify Buy Buttons or integrate the Storefront API.
        </p>
      </div>
    </section>
  )
}
