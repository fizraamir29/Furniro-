import Image from "next/image"

export function SocialProof() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600">Share your setup with</p>
          <h2 className="text-3xl font-bold">HijabStyleCollection</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eCommerce_Website__7C_Web_Page_Design__7C_UI_KIT__7C_Interior_Landing_Page__Community_-c8kKsruUuKICsAIxjmOiVfhYonzroB.png"
                alt="User shared furniture setup"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

