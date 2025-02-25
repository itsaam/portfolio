"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function HSPJavaFXProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au Portfolio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HSPJAVAFX
        </motion.h1>

        <motion.p
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Une expérience utilisateur native et performante pour les services de
          santé
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Caractéristiques Principales
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Interface utilisateur native JavaFX</li>
              <li>• Messagerie en temps réel</li>
              <li>• Gestion des dossiers patients</li>
              <li>• Tableau de bord personnalisable</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Stack Technologique
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• JavaFX pour l'interface utilisateur</li>
              <li>• Java pour la logique métier</li>
              <li>• Base de données SQL</li>
              <li>• WebSocket pour la communication temps réel</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Performance et Sécurité
          </h2>
          <p className="text-gray-600">
            Notre application est optimisée pour gérer de grandes quantités de
            données en temps réel, avec un système de mise en cache efficace et
            des requêtes de base de données optimisées. La sécurité est au cœur
            de notre conception, assurant la protection des informations
            sensibles des patients.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="https://github.com/Hdidogs/HSPJAVAFX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explorez le projet
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
