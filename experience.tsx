export function Experience() {
  const experiences = [
    {
      title: "Telesales Representative - Vertis North",
      period: "2021-2025",
      description:
        "Handled customer outreach, upselling, and CRM tools to maintain client relationships and meet sales goals.",
    },
    {
      title: "Data Entry/Processor/PSA (Philippine Statistics Authority)",
      period: "2019-2020",
      description: "Processed and encoded data accurately for national records and statistical reports.",
    },
    {
      title: "Freelancer - Virtual Assistant / SEO / Web Design",
      period: "2024-Present",
      description: "Provided freelance services in SEO, lead generation, and web design for international clients.",
    },
  ]

  return (
    <section id="experience" className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Work Experience</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
