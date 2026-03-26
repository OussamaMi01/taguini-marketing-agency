"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/5 to-red-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-gray-500/5 to-gray-700/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6">
              <Icon icon="mdi:message-text" className="text-red-500 dark:text-red-400" />
              <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                Contact Rapide
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white block">
                Prêt à transformer
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                votre présence digitale ?
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis gratuit.
            </p>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <Icon icon="mdi:check-circle" className="text-3xl text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Message envoyé avec succès !
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Nous vous contacterons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 dark:focus:border-red-500 transition-colors resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-5 h-5 text-red-500 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <label htmlFor="privacy" className="text-gray-600 dark:text-gray-400 text-sm">
                    J&apos;accepte la{' '}
                    <Link href="/privacy-policy" className="text-red-500 dark:text-red-400 hover:underline">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white hover:shadow-xl hover:shadow-red-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Icon icon="mdi:loading" className="animate-spin text-xl" />
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-4">
                <Icon icon="mdi:phone" className="text-xl text-red-500 dark:text-red-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Téléphone</h4>
              <Link href="tel:+21654650272" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                +216 54 650 272
              </Link>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-4">
                <Icon icon="mdi:email" className="text-xl text-red-500 dark:text-red-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Email</h4>
              <Link href="mailto:contact@taguini.com" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                contact@taguini.com
              </Link>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center mx-auto mb-4">
                <Icon icon="mdi:clock-outline" className="text-xl text-red-500 dark:text-red-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Horaires</h4>
              <p className="text-gray-600 dark:text-gray-300">Lun-Ven: 8h-18h</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Sam: 9h-13h</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;