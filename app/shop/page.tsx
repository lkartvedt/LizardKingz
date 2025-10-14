export default function ShopPage() {
  return (
    <section className="space-y-6">
      <h1>Shop (Coming Soon)</h1>
      <p className="text-white/80">Merch drops will announce here. For now, join the list.</p>
      <form className="card space-y-3" action="#" onSubmit={(e)=>e.preventDefault()}>
        <input type="email" required placeholder="Email for merch updates" />
        <button className="btn btn-primary" type="submit">Notify Me</button>
      </form>
      <div className="card">
        <p className="text-white/70">Later, embed Shopify Buy Buttons or integrate the Storefront API.</p>
      </div>
    </section>
  )
}
