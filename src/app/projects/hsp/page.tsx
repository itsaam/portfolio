"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function HSPProject() {
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
          HSP - Plateforme de Services de Santé
        </motion.h1>

        <motion.p
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connecter les professionnels de santé pour des soins optimaux
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
              <li>• Messagerie en temps réel</li>
              <li>• Système d&apos;actualités et d&apos;annonces</li>
              <li>• Gestion des offres d&apos;emploi</li>
              <li>• Authentification sécurisée avec 2FA</li>
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
              <li>• Laravel (Backend PHP)</li>
              <li>• JetStream (Authentification)</li>
              <li>• Livewire (Interactions temps réel)</li>
              <li>• Tailwind CSS (Design responsive)</li>
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
            Sécurité et Performance
          </h2>
          <p className="text-gray-600">
            Notre plateforme intègre un système de messagerie en temps réel
            optimisé et sécurisé, avec un focus particulier sur la protection
            des données médicales sensibles. Nous utilisons des technologies de
            pointe pour garantir la confidentialité et l&apos;intégrité des
            informations.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="https://github.com/Hdidogs/HSP"
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
