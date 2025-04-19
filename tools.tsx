export function Tools() {
  const tools = [
    {
      name: "Microsoft Excel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    },
    {
      name: "Google Sheets",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    },
    {
      name: "Google Docs",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg",
    },
    {
      name: "HTML",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "Canva",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    },
    {
      name: "ChatGPT",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Microsoft Office",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
    },
    {
      name: "Sublime Text",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
    },
    {
      name: "Clockify",
      image: "https://clockify.me/assets/images/clockify-logo.svg",
    },
  ]

  return (
    <section id="tools" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Tools I Use</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-3 flex items-center justify-center h-24 w-24">
                  <img
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.name}
                    className="max-h-16 max-w-16 object-contain"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-800 text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
