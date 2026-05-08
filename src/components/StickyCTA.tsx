export default function StickyCTA() {
  return (
    <div
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', zIndex: 200 }}
      className="sticky-cta-mobile"
    >
      <a
        href="tel:7132014005"
        className="btn-gold"
        style={{ flex: 1, justifyContent: 'center', borderRadius: 0 }}
      >
        CALL (713) 201-4005
      </a>
      <a
        href="/contact"
        className="btn-outline"
        style={{ flex: 1, justifyContent: 'center', borderRadius: 0, borderTop: 'none', borderBottom: 'none' }}
      >
        FREE ESTIMATE
      </a>
    </div>
  )
}
