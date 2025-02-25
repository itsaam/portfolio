"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import {
  ChevronDown,
  Briefcase,
  Calendar,
  MapPin,
  Globe,
  Code,
  Database,
  Server,
  Zap,
  Hospital,
  Plane,
  Cog,
} from "lucide-react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

// Ajouter au début du fichier, après les imports
// Composant principal de la page d'accueil du portfolio

// Composant pour créer des chemins flottants animés en arrière-plan
function FloatingPaths({
  position,
  colorBase = "154,48,248", // violet
}: {
  position: number;
  colorBase?: string; // Couleur personnalisable en RGB
}) {
  const paths = Array.from({ length: 27 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(${colorBase}, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color} // Appliquer la couleur  ici
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Composant principal de la page d'accueil
// Avant export default function Home()
export default function Home() {
  // État pour suivre la section active
  // Avant const [activeSection, setActiveSection] = useState("home");
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    cv: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
  };

  // Effet pour observer les sections visibles et mettre à jour la section active
  // Avant useEffect(() => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []); // Removed sectionRefs from the dependency array

  // Fonction pour faire défiler jusqu'à une section spécifique
  // Avant const scrollToSection = (sectionId: string) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Données des expériences professionnelles
  // Avant const experiences = [
  const experiences = [
    {
      company: "Mutuelle des Architectes Français | MAF",
      location: "Paris, 17ème",
      period: "2024 - Maintenant",
      role: "Alternance Technicien Informatique",
      responsibilities: [
        "Configuration et maintenance des postes sous Intune",
        "Automatisation de tâches avec Python.",
        "Implementing secure backend systems with Node.js and Express",
        "Gestion de l’enrôlement et du support pour des appareils iPhone.",
        "Maintenance des postes informatiques et assistance utilisateurs.",
      ],
    },
    {
      company: "Engie",
      location: "Paris La Défense",
      period: "Mai - Juin 2022",
      role: "Stage Développeur & Sécurité",
      responsibilities: [
        "Développement de scripts d’analyse de vulnérabilités sous Linux (Bash, Python).",
        "Contribution à l’évaluation des configurations systèmes et à leur renforcement.",
        "Participation à des initiatives de Pentesting et audits de sécurité applicative.",
      ],
    },
    {
      company: "St Joseph La Salle",
      location: "Pantin",
      period: "Juin - Juillet 2021",
      role: "Technicien Informatique",
      responsibilities: [
        "Installation et configuration de serveurs Linux dédiés pour l’hébergement.",
        "Mise en place d’environnements de test et intégration continue (Vagrant, VirtualBox).",
      ],
    },
    {
      company: "Pharmacie Bastille",
      location: "Paris 11ème",
      period: "Novembre - Novembre 2019",
      role: "Stage Développeur Web",
      responsibilities: [
        "Maintenance et amélioration du site web de l’entreprise en HTML5, CSS3, JavaScript, PHP.",
      ],
    },
  ];

  // Rendu du composant principal
  // Avant return (
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* En-tête fixe avec navigation */}
      {/* Avant <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50"> */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            onClick={() => scrollToSection("home")}
            style={{ color: "rgba(209,165,188)" }}
            className="text-2xl font-bold hover:text-blue-600 transition-colors cursor-pointer flex-shrink-0"
          >
            AS
          </a>

          <div className="flex items-center space-x-4">
            <div className="space-x-6">
              <a
                onClick={() => scrollToSection("about")}
                className={`cursor-pointer ${
                  activeSection === "about"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                À propos
              </a>
              <a
                onClick={() => scrollToSection("experience")}
                className={`cursor-pointer ${
                  activeSection === "experience"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                Expérience
              </a>
              <a
                onClick={() => scrollToSection("projects")}
                className={`cursor-pointer ${
                  activeSection === "projects"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                Projets
              </a>
              <a
                onClick={() => scrollToSection("cv")}
                className={`cursor-pointer ${
                  activeSection === "cv"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                Cv
              </a>
            </div>
            <div className="flex space-x-3"></div>
          </div>
        </nav>
      </header>

      {/* Contenu principal de la page */}
      {/* Avant <main> */}
      <main>
        {/* Section d'accueil avec animation de texte et liens sociaux */}
        {/* Avant <section id="home" */}
        <section
          id="home"
          ref={sectionRefs.home}
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
        >
          <div className="absolute inset-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="max-w-4xl mx-auto"
            >
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
               font-extrabold tracking-wide p-4 py-10 leading-[1.3] 
               overflow-visible font-sans text-center"
              >
                <div className="flex justify-center items-center whitespace-nowrap">
                  {"Abdelmalek Samy".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-[rgb(209,165,188)]"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-gray-600"
              >
                Développeur en herbe | Étudiant BTS SIO SLAM
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex justify-center space-x-6 mb-8"
              >
                <a
                  href="https://github.com/itsaam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/samy-abdelmalek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://bento.me/itsaam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F6335b33630f88833a92915fc%2F63e501246a370e0d4462f2ed_herologo.png&f=1&nofb=1&ipt=b19425d511435f62b32ada2252f13cf6194f991d25315966aad2381b80f854ee&ipo=images"
                    alt="Bento.me"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </motion.div>
              <div
                className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                            p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="ghost"
                  className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-white/95 hover:bg-white/100 text-black transition-all duration-300 
                                group-hover:-translate-y-0.5 border border-black/10
                                hover:shadow-md"
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    Découvrir mes projets
                  </span>
                  <span
                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300"
                  >
                    →
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <ChevronDown className="w-8 h-8 text-gray-600" />
          </motion.div>
        </section>

        {/* Section "À propos" avec description et compétences */}
        {/* Avant <section id="about" */}
        <section
          id="about"
          ref={sectionRefs.about}
          className="py-20 bg-white overflow-hidden relative"
        >
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              À propos de moi
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 px-4 md:px-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-gray-800 leading-relaxed mb-6 text-justify">
                  Passionné par le développement et en constante évolution, je suis un
                  développeur junior déterminé à perfectionner mes compétences.
                  Actuellement, je me spécialise en React et HTML pour le
                  frontend, ainsi qu’en Python et PHP pour le backend.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed text-justify">
                  J’ai également de l’expérience avec les bases de données
                  MongoDB et MySQL, ce qui me permet de concevoir des
                  applications complètes et optimisées. Mon objectif ? Devenir
                  un développeur polyvalent et performant, prêt à relever de
                  nouveaux défis.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2 grid grid-cols-2 gap-6 px-4 md:px-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {[
                  {
                    icon: <Code className="w-8 h-8 text-blue-500" />,
                    title: "Frontend",
                    description: "React, HTML/CSS",
                  },
                  {
                    icon: <Server className="w-8 h-8 text-green-500" />,
                    title: "Backend",
                    description: "Python, PHP, Java",
                  },
                  {
                    icon: <Database className="w-8 h-8 text-purple-500" />,
                    title: "Database",
                    description: "MongoDB, MySQL, MariaDB ",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-yellow-500" />,
                    title: "Tools",
                    description: "Github, Git, Vagrant, Unity",
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-md"
                  >
                    {skill.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section "Expérience professionnelle" */}
        {/* Avant <section id="experience" */}
        <section
          id="experience"
          ref={sectionRefs.experience}
          className="py-20 bg-white overflow-hidden relative"
        >
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSectionHeader title="Expériences professionnelles" />
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full z-0 opacity-50 
                    transition-transform duration-300 group-hover:scale-110"
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 flex items-center">
                      {exp.company ===
                      "Mutuelle des Architectes Français | MAF" ? (
                        <Globe className="w-6 h-6 mr-2 text-blue-500" />
                      ) : null}
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </p>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-xl font-medium mb-4 text-gray-700 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />
                      {exp.role}
                    </p>
                    <ul className="list-none space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section "Projets phares" */}
        {/* Avant <section id="projects" */}
        <section
          id="projects"
          ref={sectionRefs.projects}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <AnimatedSectionHeader title="Projets Phares" />
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title="HSP - Plateforme de Services de Santé"
                description="Une plateforme innovante connectant hôpitaux et professionnels de santé avec des fonctionnalités en temps réel."
                link="/projects/hsp"
                icon={<Hospital className="w-12 h-12 text-blue-500" />}
              />
              <ProjectCard
                title="Convertisseur GIF"
                description="Un outil basé sur Python pour convertir des fichiers GIF en formats PNG ou JPEG avec une interface conviviale."
                link="/projects/gif-converter"
                icon={<Cog className="w-12 h-12 text-green-500" />}
              />
              <ProjectCard
                title="Nuage Air"
                description="Site web d'aéroport permettant aux utilisateurs de réserver des vols, consulter les horaires et gérer leurs réservations."
                link="/projects/nuage-air"
                icon={<Plane className="w-12 h-12 text-yellow-500" />}
              />
              <ProjectCard
                title="HSPJAVAFX"
                description="Version JavaFX de la Plateforme de Services de Santé, offrant une expérience utilisateur native et performante."
                link="/projects/hspjavafx"
                icon={<Database className="w-12 h-12 text-purple-500" />}
              />
            </motion.div>
          </div>
        </section>
        {/* Section CV avec bouton de téléchargement */}
        {/* Avant <section id="cv" */}
        <section id="cv" className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Mon CV</h2>
            <p className="text-lg mb-8 text-gray-600">
              Téléchargez mon CV pour en savoir plus sur mon parcours et mes
              compétences.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Télécharger CV
            </Button>
          </div>
        </section>
      </main>

      {/* Pied de page */}
      {/* Avant <footer className="bg-white py-8 border-t border-gray-200"> */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Abdelmalek Samy. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
