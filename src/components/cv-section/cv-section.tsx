import Image from "next/image";

export default function CVSection() {
  return (
    <section id="cv" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Mon CV
            </h2>
            <p className="text-center text-lg mt-2 text-gray-600">
              Découvrez mon parcours professionnel et mes compétences
            </p>

            <div className="text-center mt-6">
              <p className="text-gray-600 mb-6">
                En téléchargeant mon CV, vous aurez accès à un résumé détaillé
                de mon expérience, mes compétences techniques, et mes
                réalisations professionnelles.
              </p>

              <div className="w-32 h-40 mx-auto mb-6 relative overflow-hidden rounded-lg">
                <Image
                  src="/1image.png"
                  alt="Aperçu du CV"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className="px-8 pb-8 flex justify-center">
            <a
              href="/images/Cv_Abdelmalek_Samy.pdf"
              download="Cv_Abdelmalek_Samy.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                            text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
