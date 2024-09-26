import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="relative bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 h-[75dvh]">
          <img
            src="/heroImage.jpg"
            alt="Solar Panels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-4 h-[75dvh] max-w-[1300px] mx-auto">
          <h1 className="text-3xl md:text-4xl w-full font-bold mb-4">
            Our Passion is Education and Academic Excellence
          </h1>
          <p className="text-sm md:text-base mb-8 max-w-3xl">
            Empowering students to pursue their dreams through diverse,
            high-quality courses that meet the demands of today’s evolving
            world.
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 w-full text-center">
          <svg
            className="w-6 h-6 mx-auto text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-8 py-24 space-y-10 text-justify">
        <h2>Zweck und Ziele von inside e.V.</h2>

        <h3 className="font-bold">1. Förderung der Bildung und Wissenschaft</h3>

        <p>
          Mit unseren Bildungsveranstaltungen und –maßnahmen wollen wir zur Gestaltung einer zukunftsfähigen Gesellschaft beitragen. Hierbei arbeiten wir eng mit Kooperationspartnern im In- und Ausland zusammen. Schwerpunkte unserer Tätigkeit bilden die inside Events - Bildungsveranstaltungen zu Kultur, Wirtschaft und zur Politik - sowie Praxisprojekte vor allem für Studierende zu aktuellen Themen wie beispielsweise den Erneuerbaren Energien. Wir unterstützen den Aufbau innovativer Studienkonzepte und initiieren Partnerschaften zwischen Hochschul- und Forschungseinrichtungen des In- und Auslands.
        </p>

        <h3 className="font-bold">2. Unterstützung für Studierende und Wissenschaftler</h3>

        <p>
          Unser Verein bietet für Studierende und Wissenschaftler in Berlin ausgewählte Betreuung und Informationen in folgenden Segmenten an:

          Studienstart: Informationen und Unterstützung bei alltäglichen Fragen wie Wohnen, Versicherungen und Behörden

          Studienbegleitung: Stipendieninformationen und –beratung, inside Events mit Exkursionen zu kulturellen und historischen Stätten, in Unternehmen sowie wissenschaftliche Einrichtungen

          Berufsvorbereitung: Bewerbungstraining sowie Durchführung von Praktika und Praxisprojekten.
        </p>

        <h3 className="font-bold">Struktur des Vereins</h3>

        <p>
          Inside e.V. ist ein gemeinnütziger Förderverein mit Sitz in Berlin. Die Vereinsarbeit wird durch ein Vorstandsteam, das gegenwärtig aus fünf Mitgliedern besteht, organisiert und geleitet. Das Kuratorium unterstützt den Verein und besteht aus Persönlichkeiten aus Politik, Wirtschaft und Wissenschaft. Mitglied im Verein kann auf Antrag jede natürliche oder juristische Person im In- und Ausland werden. Über die Aufnahme als ordentliches, förderndes oder studentisches Mitglied entscheidet der Vorstand.
        </p>
        <p>
          Stand: 4. Juni 2007
        </p>
      </div>
    </>
  );
};

export default AboutUs;