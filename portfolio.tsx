export function Portfolio() {
  const portfolioItems = [
    {
      category: "SEO Projects for small businesses",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seo1.jpg-zAtbWZbePCpmzyy35uJI1tkE8BDc9G.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seo2.jpg-BsU8mV5qe7ltPjdZQo5LOo7XrQuRII.jpeg",
      ],
    },
    {
      category: "Lead generation campaigns",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leadgen.PNG-GEdqoXUJLwsDI6HfrqsUpB1CgUlFKu.png",
      ],
    },
    {
      category: "Portfolio And Other Website Designs",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webdesign.PNG-EOrY2uEkej6qoIdctQH6Uzyln67zoh.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web%20design2.PNG-PMQTksC6aSQGb0KlSsudXYqY3xxcqD.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/healthweb.PNG-MpF8QzXieq2qbTFJ6zdAoI3mrdxygP.png",
      ],
    },
  ]

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Portfolio</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-lg text-gray-700 mb-8 text-center">Here are a few samples of my work:</p>

          <div className="space-y-12">
            {portfolioItems.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {item.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${item.category} example ${imgIndex + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
