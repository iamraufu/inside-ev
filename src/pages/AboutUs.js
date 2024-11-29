import React, { useState } from "react";
const trainers = [
    {
        id: "trainer1",
        name: "Saiful Islam",
        image: "/trainers/trainer1.png", // Placeholder for image URL
        details: [
            {
                year: 2023,
                description:
                    "Post Graduate Program in Data Engineering (Purdue University)",
            },
            {
                year: "2022 - Present",
                description:
                    "PhD student at Otto-von-Guericke-University Magdeburg and TU Berlin (cooperation with SRH University of Applied Sciences)",
            },
            {
                year: 2022,
                description:
                    "KNX Grundkurs und KNX Aufbaukurs (certified by KNX Association)",
            },
            {
                year: 2021,
                description:
                    "Certified Trainer of Siemens Mechatronic Systems Certification Program (SMSCP L1/L2/L3)",
            },
            {
                year: "2020 - Present",
                description:
                    "Research Associate/Lecturer at SRH Hochschulen GmbH",
            },
            {
                year: 2019,
                description:
                    "Intern at Deutschen Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH",
            },
        ],
        education: [
            {
                year: "2018 - 2019",
                description: "Work Student in research for Engineering program",
            },
            {
                year: "2017 - 2019",
                description:
                    "Master of Engineer in Renewable Energy at SRH Berlin University of Applied Sciences",
            },
            {
                year: "2014 - 2017",
                description:
                    "Assistant Engineer (Electrical) in Dhaka, Bangladesh",
            },
            {
                year: "2010 - 2014",
                description:
                    "Bachelor’s in EEE from Ahsanullah University of Science and Technology",
            },
        ],
        research: [
            {
                title: "Master Thesis in AI in Renewable Energy Systems based on Smart Energy House (Smart Monitoring and IoT), 2019, with supervision of Lukasz Rojek and Michael Hartmann.",
            },
            {
                title: "Simulation of hybrid renewable systems in rural areas, January 2022, Electronic Imaging 34(3):397-1-397-8, DOI: 10.2352/EI.2022.34.3.MOBMU-397, 2022.",
            },
            {
                title: "Technical Design and Operational Control of a Decentralized Microgrid in Rural Area, June 2021, Electronic Imaging 2021(3):97-1-97-7, Conference: Electronic Imaging.",
            },
            {
                title: "IoT-Based Real-Time Monitoring System for a Smart Energy House, June 2021, Electronic Imaging 2021(3):38-1-38-10, DOI: 10.2352/ISSN.2470-1173.2021.3.MOBMU-038.",
            },
            {
                title: "Artificial Intelligence in Renewable Energy Systems based on Smart Energy House, November 2020, Conference: InfoTech conference.",
            },
            {
                title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner University of Reunion, Saint Pierre, Reunion, France in a staff mobility in the framework of the ERASMUS+ training program, 2022.",
            },
            {
                title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, France in a staff mobility in the framework of the ERASMUS+ training program, 2023.",
            },
            {
                title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, Laboratoire Sciences Pour l'Environnement, France in a staff mobility in the framework of the ERASMUS+ training program, 2024.",
            },
            {
                title: "Attended IEEE WCCI 2024, the world's largest technical event on computational intelligence, which features the three flagship conferences of the IEEE Computational Intelligence Society (CIS). Special Session: Computational Intelligence for Control and Optimization of Complex Energy Systems.",
            },
            {
                title: "Saiful Islam, Amin Suaad, Michael Hartmann, Goran Rafajlovski. Analysing the electricity load and production by means of different machine learning methods: A case study of a MG system. International Journal on Information Technologies and Security, vol.16, no.3, 2024, pp. 101-110. https://doi.org/10.59035/LANO6489.",
            },
            {
                title: "Tarun Shakthi Sreedhar, Saiful Islam, Meron Atmosa, Elaheh Yazdan doust, Mohamed Suliman Elnaim, Shomesh Mishra, Venkata Naresh, Rupali Bajpai. Applications of BIG DATA in renewable energy systems based on cloud computing. International Journal on Information Technologies and Security, vol.16, no.3, 2024, pp. 121-128. https://doi.org/10.59035/NALD6541.",
            },
            {
                title: "S. Islam, S. Mostaghim and M. Hartmann, 'A Survey on Multi-Objective Optimization in Microgrid Systems,' 2024 IEEE Congress on Evolutionary Computation (CEC), Yokohama, Japan, 2024, pp. 1-8, doi: 10.1109/CEC60901.2024.10611915.",
            },
        ],
        thesisSupervision: [
            {
                title: "Master Thesis in AI in Renewable Energy Systems based on Smart Energy House (Smart Monitoring and IoT), 2019, with supervision of Lukasz Rojek and Michael Hartmann.",
            },
            {
                title: "Simulation of hybrid renewable systems in rural areas, January 2022, Electronic Imaging 34(3):397-1-397-8, DOI: 10.2352/EI.2022.34.3.MOBMU-397, 2022.",
            },
            {
                title: "Technical Design and Operational Control of a Decentralized Microgrid in Rural Area, June 2021, Electronic Imaging 2021(3):97-1-97-7, Conference: Electronic Imaging.",
            },
            {
                title: "IoT-Based Real-Time Monitoring System for a Smart Energy House, June 2021, Electronic Imaging 2021(3):38-1-38-10, DOI: 10.2352/ISSN.2470-1173.2021.3.MOBMU-038.",
            },
            {
                title: "Artificial Intelligence in Renewable Energy Systems based on Smart Energy House, November 2020, Conference: InfoTech conference.",
            },
            {
                title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner University of Reunion, Saint Pierre, Reunion, France in a staff mobility in the framework of the ERASMUS+ training program, 2022.",
            },
            {
                title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, France in a staff mobility in the framework of the ERASMUS+ training program, 2023.",
            },
            {
                title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, Laboratoire Sciences Pour l'Environnement, France in a staff mobility in the framework of the ERASMUS+ training program, 2024.",
            },
            {
                title: "Attended IEEE WCCI 2024, the world's largest technical event on computational intelligence, which features the three flagship conferences of the IEEE Computational Intelligence Society (CIS). Special Session: Computational Intelligence for Control and Optimization of Complex Energy Systems.",
            },
            {
                title: "Saiful Islam, Amin Suaad, Michael Hartmann, Goran Rafajlovski. Analysing the electricity load and production by means of different machine learning methods: A case study of a MG system. International Journal on Information Technologies and Security, vol.16, no.3, 2024, pp. 101-110. https://doi.org/10.59035/LANO6489.",
            },
            {
                title: "Tarun Shakthi Sreedhar, Saiful Islam, Meron Atmosa, Elaheh Yazdan doust, Mohamed Suliman Elnaim, Shomesh Mishra, Venkata Naresh, Rupali Bajpai. Applications of BIG DATA in renewable energy systems based on cloud computing. International Journal on Information Technologies and Security, vol.16, no.3, 2024, pp. 121-128. https://doi.org/10.59035/NALD6541.",
            },
            {
                title: "S. Islam, S. Mostaghim and M. Hartmann, 'A Survey on Multi-Objective Optimization in Microgrid Systems,' 2024 IEEE Congress on Evolutionary Computation (CEC), Yokohama, Japan, 2024, pp. 1-8, doi: 10.1109/CEC60901.2024.10611915.",
            },
            {
                title: "A feasibility test of a portable battery energy container in comparison with stationary energy storage system, Saurabh Mahesh Chaudhari, conjunction with RWE Battery Solutions GmbH Dresden, Germany.",
            },
            {
                title: "Performance Analysis of Probability Thresholding Techniques for AI-Based Predictive Maintenance of Freight Road Transport, Sanket Patil.",
            },
            {
                title: "Methodology for Analyzing Zero Energy Building potential in Pune, India, Tanishq Patole.",
            },
            {
                title: "Power To X Analysis of Rural Region in Germany, conjunction with Fraunhofer-Institut für Fabrikbetrieb und Automatisierung, Magdeburg, Germany, Kumar Nimse.",
            },
            {
                title: "Comparing Air Conditioner Systems Operating on Renewable Energy in Dubai, Kareem Abdelwahab.",
            },
            {
                title: "Smart Vertical indoor Farming, Het Mehta.",
            },
            {
                title: "Optimal Sizing of Prosumer Microgrid using optimization technique, Vivek Rajkumar Nikam.",
            },
            {
                title: "A tool-based approach to analyse the techno-commercial viability of a free field PV plant up to 50 MVA in Germany, Nachiketha Vishwanatha Shastry, associated with Vattenfall GmbH.",
            },
            {
                title: "Charge Detail Record- Cpo Invoice Quality Enhancement Focus on B2B Journey, Abhishek Shetye, associated with Digital Charging Solutions GmbH.",
            },
            {
                title: "Optimization of the microgrid to increase the Self-Consumption of the Terre Sainte campus, La reunion using Solar PV based solutions, Dipendrasinh Narendrasinh Gohil, conjunction with University of La Reunion.",
            },
            {
                title: "Hybrid Solution in Renewable Energy with Advance Microgrid Control System, Nivedita Augustine Mathew.",
            },
            {
                title: "Prefeasibility analysis of on-grid solar farm located in Bahrain with a focus on carbon emission forecasting, Mahesh Krishnan.",
            },
            {
                title: "Enhancing efficiency of retrofit project by using Building Information Modelling, Khan, Muhammad Hasnain.",
            },
            {
                title: "Implementing a Simulation Tool for Analysing Technical and Financial Parameters of Grid Connected PV System, Battal, Oguzcan.",
            },
        ],
    },
    // {
    //     id: "trainer2",
    //     name: "Dr. Jane Doe",
    //     image: "/trainers/trainer2.png", // Placeholder for image URL
    //     details: [
    //         {
    //             year: 2023,
    //             description:
    //                 "Post Graduate Program in Data Engineering (Purdue University)",
    //         },
    //         {
    //             year: "2022 - Present",
    //             description:
    //                 "PhD student at Otto-von-Guericke-University Magdeburg and TU Berlin (cooperation with SRH University of Applied Sciences)",
    //         },
    //         {
    //             year: 2022,
    //             description:
    //                 "KNX Grundkurs und KNX Aufbaukurs (certified by KNX Association)",
    //         },
    //         {
    //             year: 2021,
    //             description:
    //                 "Certified Trainer of Siemens Mechatronic Systems Certification Program (SMSCP L1/L2/L3)",
    //         },
    //         {
    //             year: "2020 - Present",
    //             description:
    //                 "Research Associate/Lecturer at SRH Hochschulen GmbH",
    //         },
    //         {
    //             year: 2019,
    //             description:
    //                 "Intern at Deutschen Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH",
    //         },
    //         {
    //             year: "2018 - 2019",
    //             description: "Work Student in research for Engineering program",
    //         },
    //         {
    //             year: "2017 - 2019",
    //             description:
    //                 "Master of Engineer in Renewable Energy at SRH Berlin University of Applied Sciences",
    //         },
    //         {
    //             year: "2014 - 2017",
    //             description:
    //                 "Assistant Engineer (Electrical) in Dhaka, Bangladesh",
    //         },
    //         {
    //             year: "2010 - 2014",
    //             description:
    //                 "Bachelor’s in EEE from Ahsanullah University of Science and Technology",
    //         },
    //     ],
    //     education: [],
    //     research: [
    //         {
    //             title: "Master Thesis in AI in Renewable Energy Systems based on Smart Energy House (Smart Monitoring and IoT), 2019, with supervision of Lukasz Rojek and Michael Hartmann.",
    //         },
    //         {
    //             title: "Simulation of hybrid renewable systems in rural areas, January 2022, Electronic Imaging 34(3):397-1-397-8, DOI: 10.2352/EI.2022.34.3.MOBMU-397, 2022.",
    //         },
    //         {
    //             title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner University of Reunion, Saint Pierre, Reunion, France in a staff mobility in the framework of the ERASMUS+ training program, 2022.",
    //         },
    //         {
    //             title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, France in a staff mobility in the framework of the ERASMUS+ training program, 2023.",
    //         },
    //         {
    //             title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, Laboratoire Sciences Pour l'Environnement, France in a staff mobility in the framework of the ERASMUS+ training program, 2024.",
    //         },
    //         {
    //             title: "Attended IEEE WCCI 2024, the world's largest technical event on computational intelligence, which features the three flagship conferences of the IEEE Computational Intelligence Society (CIS). Special Session: Computational Intelligence for Control and Optimization of Complex Energy Systems.",
    //         },
    //         {
    //             title: "Saiful Islam, Amin Suaad, Michael Hartmann, Goran Rafajlovski. Analysing the electricity load and production by means of different machine learning methods: A case study of a MG system. International Journal on Information Technologies and Security, vol.16, no.3, 2024, pp. 101-110. https://doi.org/10.59035/LANO6489.",
    //         },
    //         {
    //             title: "Tarun Shakthi Sreedhar, Saiful Islam, Meron Atmosa, Elaheh Yazdan doust, Mohamed Suliman Elnaim, Shomesh Mishra, Venkata Naresh, Rupali Bajpai. Applications of BIG DATA in renewable energy systems based on cloud computing. International Journal on Information Technologies and Security, vol.16, no.3, 2024, pp. 121-128. https://doi.org/10.59035/NALD6541.",
    //         },
    //         {
    //             title: "S. Islam, S. Mostaghim and M. Hartmann, 'A Survey on Multi-Objective Optimization in Microgrid Systems,' 2024 IEEE Congress on Evolutionary Computation (CEC), Yokohama, Japan, 2024, pp. 1-8, doi: 10.1109/CEC60901.2024.10611915.",
    //         },
    //     ],
    //     thesisSupervision: [
    //         {
    //             title: "Master Thesis in AI in Renewable Energy Systems based on Smart Energy House (Smart Monitoring and IoT), 2019, with supervision of Lukasz Rojek and Michael Hartmann.",
    //         },
    //         {
    //             title: "Simulation of hybrid renewable systems in rural areas, January 2022, Electronic Imaging 34(3):397-1-397-8, DOI: 10.2352/EI.2022.34.3.MOBMU-397, 2022.",
    //         },
    //         {
    //             title: "Technical Design and Operational Control of a Decentralized Microgrid in Rural Area, June 2021, Electronic Imaging 2021(3):97-1-97-7, Conference: Electronic Imaging.",
    //         },
    //         {
    //             title: "IoT-Based Real-Time Monitoring System for a Smart Energy House, June 2021, Electronic Imaging 2021(3):38-1-38-10, DOI: 10.2352/ISSN.2470-1173.2021.3.MOBMU-038.",
    //         },
    //         {
    //             title: "Artificial Intelligence in Renewable Energy Systems based on Smart Energy House, November 2020, Conference: InfoTech conference.",
    //         },
    //         {
    //             title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner University of Reunion, Saint Pierre, Reunion, France in a staff mobility in the framework of the ERASMUS+ training program, 2022.",
    //         },
    //         {
    //             title: "Mobility research report, From SRH Berlin University of Applied Sciences participated with partner Pascal Paoli University of Corsica, France in a staff mobility in the framework of the ERASMUS+ training program, 2023.",
    //         },
    //         {
    //             title: "S. Islam, S. Mostaghim and M. Hartmann, 'A Survey on Multi-Objective Optimization in Microgrid Systems,' 2024 IEEE Congress on Evolutionary Computation (CEC), Yokohama, Japan, 2024, pp. 1-8, doi: 10.1109/CEC60901.2024.10611915.",
    //         },
    //         {
    //             title: "A feasibility test of a portable battery energy container in comparison with stationary energy storage system, Saurabh Mahesh Chaudhari, conjunction with RWE Battery Solutions GmbH Dresden, Germany.",
    //         },
    //         {
    //             title: "Performance Analysis of Probability Thresholding Techniques for AI-Based Predictive Maintenance of Freight Road Transport, Sanket Patil.",
    //         },
    //         {
    //             title: "Methodology for Analyzing Zero Energy Building potential in Pune, India, Tanishq Patole.",
    //         },
    //         {
    //             title: "Power To X Analysis of Rural Region in Germany, conjunction with Fraunhofer-Institut für Fabrikbetrieb und Automatisierung, Magdeburg, Germany, Kumar Nimse.",
    //         },
    //         {
    //             title: "Comparing Air Conditioner Systems Operating on Renewable Energy in Dubai, Kareem Abdelwahab.",
    //         },
    //         {
    //             title: "Smart Vertical indoor Farming, Het Mehta.",
    //         },
    //         {
    //             title: "Optimal Sizing of Prosumer Microgrid using optimization technique, Vivek Rajkumar Nikam.",
    //         },
    //         {
    //             title: "A tool-based approach to analyse the techno-commercial viability of a free field PV plant up to 50 MVA in Germany, Nachiketha Vishwanatha Shastry, associated with Vattenfall GmbH.",
    //         },
    //         {
    //             title: "Charge Detail Record- Cpo Invoice Quality Enhancement Focus on B2B Journey, Abhishek Shetye, associated with Digital Charging Solutions GmbH.",
    //         },
    //         {
    //             title: "Optimization of the microgrid to increase the Self-Consumption of the Terre Sainte campus, La reunion using Solar PV based solutions, Dipendrasinh Narendrasinh Gohil, conjunction with University of La Reunion.",
    //         },
    //         {
    //             title: "Hybrid Solution in Renewable Energy with Advance Microgrid Control System, Nivedita Augustine Mathew.",
    //         },
    //         {
    //             title: "Prefeasibility analysis of on-grid solar farm located in Bahrain with a focus on carbon emission forecasting, Mahesh Krishnan.",
    //         },
    //         {
    //             title: "Enhancing efficiency of retrofit project by using Building Information Modelling, Khan, Muhammad Hasnain.",
    //         },
    //         {
    //             title: "Implementing a Simulation Tool for Analysing Technical and Financial Parameters of Grid Connected PV System, Battal, Oguzcan.",
    //         },
    //     ],
    // },

    {
        id: "trainer2",
        name: "Talha Ahmad",
        image: "/trainers/trainer2.png", // Placeholder for image URL
        details: [
            {
                year: "2023 – To-Date",
                description:
                    "Lecturer – Masters Course in Renewable Energies (SRH Hochschule)",
            },
            {
                year: "2018 – To-Date",
                description: "Lead Electrical Engineer – PREI (Vattenfall)",
            },
            {
                year: "2016-2017",
                description:
                    "Electrical Product Engineer (Solibro Hi-Tech GmbH)",
            },
            {
                year: "2012-2013",
                description: "Electrical Engineer (Lahore)",
            },
        ],
        education: [
            {
                year: "2013-2016",
                description:
                    "M.Sc Electrical Systems Engineering (Universität Paderborn)",
            },
            {
                year: "2008-2012",
                description:
                    "B.Sc Electrical Engineering (University of Engineering & Technology Lahore)",
            },
        ],
        research: [
            {
                title: "Conception of a Ballista PV Module with nocturnal operation and field illumination, 2017.",
            },
            {
                title: "Effect of Shading on CIGS Modules and Systems, 2017.",
            },
            {
                title: "Measurement data examination of PV modules equipped with phase change materials focusing on the short-term thermal and electrical behaviour, 2015.",
            },
        ],
        thesisSupervision: [
            {
                title: "Comparison of MPPT algorithms in PV inverters via MATLAB Modelling and benchmarking against actual product data, 2024.",
            },
            {
                title: "Ascertainment of power transformers LoL (Loss of Lifetime) according to IEC 60076-7 based on actual system loading conditions, 2023.",
            },
            {
                title: "Creation of a GUI tool to optimize a PV Plant based on techno-commercial parameters – extended, 2023.",
            },
            {
                title: "Creation of a GUI tool to optimize a PV Plant based on techno-commercial parameters – Beta, 2022.",
            },
            {
                title: "Methods and Improvements to match PVSYST parameters to actual system OC (operating conditions) to minimize yield deviations, 2020.",
            },
            {
                title: "Creation of a GUI tool for price-breakdown of the PV system in terms of procurement and process chain, 2019.",
            },
        ],
        certifications: [
            {
                title: "Certified for Working under Voltage (Arbeiten unter Spannung - AuS), TÜV Rheinland, 2023.",
            },
            {
                title: "Person Responsible for Electrical Installations (PREI/VEFK), TÜV Nord, 2022.",
            },
            {
                title: "Switching Authorized (Schaltberechtigt) till 36kV, TÜV Rheinland, 2022.",
            },
            {
                title: "SCC (Safety Certificate Contractors), TÜV Rheinland, 2018.",
            },
        ],
    },
];

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState([
        {
            title: "trainer1",
            state: false,
        },
        {
            title: "trainer2",
            state: false,
        },
    ]);
    const handleViewMore = (val) => {
        console.log(val);
        setIsExpanded((prev) =>
            prev.map((item) =>
                item.title === val ? { ...item, state: !item.state } : item
            )
        );
    };

    console.log({ isExpanded });

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
                    <div className="w-24 mb-4 bg-amber-500 h-1.5 rounded-full"></div>
                    <p className="text-sm md:text-base mb-8 max-w-3xl">
                        Empowering students to pursue their dreams through
                        diverse, high-quality courses that meet the demands of
                        today’s evolving world.
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

            {/* <div className="mx-auto max-w-[1300px] px-8 py-24 space-y-10 text-justify">
        <h2>Zweck und Ziele von inside e.V.</h2>

        <h3 className="font-bold">1. Förderung der Bildung und Wissenschaft</h3>

        <p>
          Mit unseren Bildungsveranstaltungen und –maßnahmen wollen wir zur
          Gestaltung einer zukunftsfähigen Gesellschaft beitragen. Hierbei
          arbeiten wir eng mit Kooperationspartnern im In- und Ausland zusammen.
          Schwerpunkte unserer Tätigkeit bilden die inside Events -
          Bildungsveranstaltungen zu Kultur, Wirtschaft und zur Politik - sowie
          Praxisprojekte vor allem für Studierende zu aktuellen Themen wie
          beispielsweise den Erneuerbaren Energien. Wir unterstützen den Aufbau
          innovativer Studienkonzepte und initiieren Partnerschaften zwischen
          Hochschul- und Forschungseinrichtungen des In- und Auslands.
        </p>

        <h3 className="font-bold">
          2. Unterstützung für Studierende und Wissenschaftler
        </h3>

        <p>
          Unser Verein bietet für Studierende und Wissenschaftler in Berlin
          ausgewählte Betreuung und Informationen in folgenden Segmenten an:
          Studienstart: Informationen und Unterstützung bei alltäglichen Fragen
          wie Wohnen, Versicherungen und Behörden Studienbegleitung:
          Stipendieninformationen und –beratung, inside Events mit Exkursionen
          zu kulturellen und historischen Stätten, in Unternehmen sowie
          wissenschaftliche Einrichtungen Berufsvorbereitung: Bewerbungstraining
          sowie Durchführung von Praktika und Praxisprojekten.
        </p>

        <h3 className="font-bold">Struktur des Vereins</h3>

        <p>
          Inside e.V. ist ein gemeinnütziger Förderverein mit Sitz in Berlin.
          Die Vereinsarbeit wird durch ein Vorstandsteam, das gegenwärtig aus
          fünf Mitgliedern besteht, organisiert und geleitet. Das Kuratorium
          unterstützt den Verein und besteht aus Persönlichkeiten aus Politik,
          Wirtschaft und Wissenschaft. Mitglied im Verein kann auf Antrag jede
          natürliche oder juristische Person im In- und Ausland werden. Über die
          Aufnahme als ordentliches, förderndes oder studentisches Mitglied
          entscheidet der Vorstand.
        </p>
        <p>Stand: 4. Juni 2007</p>
      </div> */}

            <div className="max-w-[1300px] mx-auto p-9">
                {/* Title */}
                <h1 className="text-2xl font-bold mb-3  text-center">
                    Zweck und Ziele von inside e.V.
                </h1>
                <div className="w-28 mb-8 bg-amber-500 h-1 rounded-full mx-auto"></div>

                {/* Section 1 */}
                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        1. Förderung der Bildung und Wissenschaft
                    </h2>
                    <p className="text-sm text-justify mb-4">
                        Mit unseren Bildungsveranstaltungen und –maßnahmen
                        wollen wir zur Gestaltung einer zukunftsfähigen
                        Gesellschaft beitragen. Hierbei arbeiten wir eng mit
                        Kooperationspartnern im In- und Ausland zusammen.
                        Schwerpunkte unserer Tätigkeit bilden die inside Events
                        - Bildungsveranstaltungen zu Kultur, Wirtschaft und zur
                        Politik - sowie Praxisprojekte vor allem für Studierende
                        zu aktuellen Themen wie beispielsweise den Erneuerbaren
                        Energien.
                    </p>
                    <p className="text-sm text-justify">
                        Wir unterstützen den Aufbau innovativer Studienkonzepte
                        und initiieren Partnerschaften zwischen Hochschul- und
                        Forschungseinrichtungen des In- und Auslands.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        2. Unterstützung für Studierende und Wissenschaftler
                    </h2>
                    <p className="text-base text-justify mb-4">
                        Unser Verein bietet für Studierende und Wissenschaftler
                        in Berlin ausgewählte Betreuung und Informationen in
                        folgenden Segmenten an:
                    </p>
                    <div className="ml-7">
                        <ul className="list-disc list-outside marker:text-orange-500  mb-4 space-y-2">
                            <li className="text-sm text-justify">
                                Studienstart: Informationen und Unterstützung
                                bei alltäglichen Fragen wie Wohnen,
                                Versicherungen und Behörden
                            </li>
                            <li className="text-sm text-justify">
                                Studienbegleitung: Stipendieninformationen und
                                –beratung, inside Events mit Exkursionen zu
                                kulturellen und historischen Stätten, in
                                Unternehmen sowie wissenschaftliche
                                Einrichtungen
                            </li>
                            <li className="text-sm text-justify">
                                Berufsvorbereitung: Bewerbungstraining sowie
                                Durchführung von Praktika und Praxisprojekten.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Structure Section */}
                <section>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        Struktur des Vereins
                    </h2>
                    <p className="text-sm text-justify mb-4">
                        Inside e.V. ist ein gemeinnütziger Förderverein mit Sitz
                        in Berlin. Die Vereinsarbeit wird durch ein
                        Vorstandsteam, das gegenwärtig aus fünf Mitgliedern
                        besteht, organisiert und geleitet. Das Kuratorium
                        unterstützt den Verein und besteht aus Persönlichkeiten
                        aus Politik, Wirtschaft und Wissenschaft.
                    </p>
                    <p className="text-sm text-justify mb-4">
                        Mitglied im Verein kann auf Antrag jede natürliche oder
                        juristische Person im In- und Ausland werden. Über die
                        Aufnahme als ordentliches, förderndes oder studentisches
                        Mitglied entscheidet der Vorstand.
                    </p>
                    <p className="text-sm mt-10  text-right italic">
                        Stand: 4. Juni 2007
                    </p>
                </section>
            </div>

            <div className="bg-gray-800 text-white min-h-screen p-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-center text-white  mx-auto tracking-tight">
                    Trainers
                </h1>
                <div className="w-16 mb-8 mt-4 bg-amber-500 h-1.5 rounded-full mx-auto"></div>
                <div className="flex justify-between items-start gap-10 w-full max-w-7xl mx-auto max-md:flex-wrap">
                    {trainers?.map((trainer, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 flex-1 px-6 py-8 rounded-lg shadow-lg hover:shadow-2xl transform  group"
                        >
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img
                                    src={trainer.image}
                                    alt={`${trainer.name}`}
                                    className=" w-1/2 lg:w-1/3 rounded-full object-cover mx-auto border-4 border-amber-500"
                                />
                            </div>

                            <h2 className="text-2xl text-center font-semibold text-white mb-8 transition-all">
                                {trainer.name}
                            </h2>

                            <div
                                className={`transition-max-height ease-in-out duration-500 overflow-hidden ${
                                    isExpanded.filter(
                                        (item) => item.title === trainer.id
                                    )[0].state
                                        ? "max-h-full"
                                        : "max-h-96"
                                }`}
                            >
                                <section className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Work Experience
                                    </h3>
                                    <div className="w-12 mb-3  bg-amber-500 h-[2px] rounded-full"></div>
                                    <ul className=" list-inside text-gray-200 space-y-2">
                                        {trainer.details.map((edu, idx) => (
                                            <li className="mb-4" key={idx}>
                                                <p className="font-semibold text-white mb-2">
                                                    {edu.year}
                                                </p>
                                                <p className="font-light text-sm text-gray-300">
                                                    {edu.description}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Education
                                    </h3>
                                    <div className="w-12 mb-3  bg-amber-500 h-[2px] rounded-full"></div>
                                    <ul className=" list-inside text-gray-200 space-y-2">
                                        {trainer?.education.map((edu, idx) => (
                                            <li className="mb-4" key={idx}>
                                                <p className="font-semibold text-white mb-2">
                                                    {edu?.year}
                                                </p>
                                                <p className="font-light text-sm text-gray-300">
                                                    {edu?.description}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Research
                                    </h3>
                                    <div className="w-12 mb-3  bg-amber-500 h-[2px] rounded-full"></div>
                                    <ul className=" text-gray-700 space-y-4">
                                        {trainer.research.map((exp, idx) => (
                                            <li
                                                className="italic font-light text-white"
                                                key={idx}
                                            >
                                                {exp.title}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        Thesis Supervision
                                    </h3>

                                    <ul className=" text-white space-y-2">
                                        {trainer.thesisSupervision.map(
                                            (item, idx) => (
                                                <li
                                                    className="text-sm"
                                                    key={idx}
                                                >
                                                    <div className="flex justify-center items-start gap-3">
                                                        <div className="h-[2px] bg-amber-600 w-4 mt-2"></div>
                                                        <p className="flex-1">
                                                            {item.title}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </section>
                            </div>
                            {!isExpanded.filter(
                                (item) => item.title === trainer.id
                            )[0].state && (
                                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-900 to-transparent flex items-end justify-end m-4">
                                    <button
                                        className="font-medium text-amber-500 px-4 py-2 rounded-md mt-2"
                                        onClick={() =>
                                            handleViewMore(trainer.id)
                                        }
                                    >
                                        View More
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutUs;
