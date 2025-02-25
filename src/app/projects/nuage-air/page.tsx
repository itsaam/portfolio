"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function NuageAirProject() {
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
          Nuage Air
        </motion.h1>

        <motion.p
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Simplifiez vos voyages avec notre plateforme aéroportuaire innovante
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Fonctionnalités Clés
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Réservation de vols avec recherche avancée</li>
              <li>• Gestion des réservations existantes</li>
              <li>• Consultation des horaires en temps réel</li>
              <li>• Panel administrateur complet</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Technologies Utilisées
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• React.js avec Next.js (Frontend)</li>
              <li>• Node.js avec Express.js (Backend)</li>
              <li>• MongoDB (Base de données)</li>
              <li>• JWT (Authentification)</li>
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
            Défis Techniques Résolus
          </h2>
          <p className="text-gray-600">
            Nous avons implémenté un système de verrouillage temporaire des
            sièges pendant la réservation et optimisé les requêtes de base de
            données pour assurer la scalabilité du site. Ces solutions
            garantissent une expérience utilisateur fluide même en période de
            forte affluence.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="https://github.com/Hdidogs/ProjetAeroport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explorez Nuage Air
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
