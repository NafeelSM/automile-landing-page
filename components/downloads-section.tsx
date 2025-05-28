import { Download, FileText } from "lucide-react";

export default function DownloadsSection() {
  const downloads = [
    {
      title: "Project Proposal Presentation",
      description:
        "Initial proposal outlining project scope, objectives, and methodology.",
      icon: FileText,
      fileSize: "912 KB",
      format: "PPTX",
      downloadUrl: "/downloads/proposal-presentation.pptx",
    },
    {
      title: "Progress Presentation 1",
      description:
        "Detailed update on research progress, model development, and UI planning.",
      icon: FileText,
      fileSize: "8.79 MB",
      format: "PPTX",
      downloadUrl: "/downloads/progress-presentation-1.pptx",
    },
    {
      title: "Progress Presentation 2",
      description:
        "Final updates before completion, showcasing integrations and visual outputs.",
      icon: FileText,
      fileSize: "15.29 MB",
      format: "PPTX",
      downloadUrl: "/downloads/progress-presentation-2.pptx",
    },
    {
      title: "Research Paper",
      description:
        "Published research paper describing the full system architecture and results.",
      icon: FileText,
      fileSize: "313 KB",
      format: "PDF",
      downloadUrl: "/downloads/research-paper.pdf",
    },
    {
      title: "Final Report",
      description:
        "Comprehensive report detailing the entire project lifecycle, methodologies, and outcomes.",
      icon: FileText,
      fileSize: "449 KB",
      format: "PDF",
      downloadUrl: "/downloads/final-report.pdf",
    },
    {
      title: "Final Presentation",
      description:
        "Final presentation summarizing the project, methodologies, and results.",
      icon: FileText,
      fileSize: "15.29 MB",
      format: "PPTX",
      downloadUrl: "/downloads/progress-presentation-2.pptx",
    },
  ];

  return (
    <section
      id="downloads"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#D0E8FF]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Downloads</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access research materials, documentation, and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-[#90CAF9] to-[#64B5F6] rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{item.fileSize}</span>
                        <span>•</span>
                        <span>{item.format}</span>
                      </div>

                      <a
                        href={item.downloadUrl}
                        download
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] rounded-lg hover:from-[#42A5F5] hover:to-[#2196F3] transition-all duration-300 hover:shadow-md"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
