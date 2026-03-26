// pages/contact.jsx or app/contact/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    services: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const serviceOptions = [
    { id: "social", label: "Gestion des réseaux sociaux", icon: "mdi:instagram" },
    { id: "content", label: "Création de contenu", icon: "mdi:content-copy" },
    { id: "visual", label: "Création visuelle", icon: "mdi:palette" },
    { id: "sponsoring", label: "Sponsoring", icon: "mdi:bullhorn" },
  ];


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Nouvelle demande de contact - Portfolio",
          message: `Projet: ${formData.project}\n\nServices demandés: ${formData.services.map(s =>
            serviceOptions.find(opt => opt.id === s)?.label
          ).join(", ")}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", project: "", services: [] });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "mdi:map-marker",
      title: "Notre Adresse",
      content: "Imm Lafran centre, Mezzanine Bureau N°3, Route de Lafran Km 0.5 Sfax",
      link: "https://maps.google.com/?q=Imm+Lafran+centre+Sfax",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "mdi:phone",
      title: "Numéro de téléphone",
      content: "+216 54 650 272 / +216 51 650 277",
      link: "tel:+21654650272",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "mdi:email",
      title: "Email",
      content: "contact@taguini.com",
      link: "mailto:contact@taguini.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "mdi:whatsapp",
      title: "Whatsapp",
      content: "+216 54 650 272",
      link: "https://wa.me/+21654650272",
      color: "from-green-600 to-green-500"
    }
  ];

  const socialLinks = [
    { icon: "mdi:facebook", label: "Facebook", href: "#", color: "hover:text-blue-600" },
    { icon: "mdi:instagram", label: "Instagram", href: "#", color: "hover:text-pink-600" },
    { icon: "mdi:linkedin", label: "LinkedIn", href: "#", color: "hover:text-blue-700" },
    { icon: "mdi:twitter", label: "Twitter", href: "#", color: "hover:text-sky-500" },
    { icon: "mdi:youtube", label: "YouTube", href: "#", color: "hover:text-red-600" }

  ];

  return (
    <>
      <div className="pt-16 lg:pt-20" />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >


              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                CONTACTEZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">-NOUS</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Pour toute question ou demande spécifique, remplissez ce formulaire,
                un de nos experts vous répondra dans les plus brefs délais.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700"
                >
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Envoyez-nous un message
                  </h2>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-600 dark:text-green-400 flex items-center gap-3"
                    >
                      <Icon icon="mdi:check-circle" className="text-xl" />
                      <span>Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</span>
                    </motion.div>
                  )}

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 flex items-center gap-3"
                    >
                      <Icon icon="mdi:alert-circle" className="text-xl" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nom/Société */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Nom/Société <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Icon icon="mdi:account" className="text-gray-400 text-xl" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="Votre nom ou votre société"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Icon icon="mdi:email" className="text-gray-400 text-xl" />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="exemple@exemple.com"
                        />
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Icon icon="mdi:phone" className="text-gray-400 text-xl" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                          placeholder="Votre numéro de téléphone"
                        />
                      </div>
                    </div>

                    {/* Votre besoin */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Votre besoin <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                          <Icon icon="mdi:file-document" className="text-gray-400 text-xl" />
                        </div>
                        <textarea
                          required
                          rows={4}
                          value={formData.project}
                          onChange={(e) => setFormData(prev => ({ ...prev, project: e.target.value }))}
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                          placeholder="Merci de taper votre besoin"
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Services <span className="text-red-500">*</span>
                      </label>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Choisissez le ou les services que vous avez besoin
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {serviceOptions.map((service) => (
                          <label
                            key={service.id}
                            className={`
          relative flex items-center p-4 rounded-lg border-2 cursor-pointer
          transition-all duration-200
          ${formData.services.includes(service.id)
                                ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700'
                              }
        `}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={formData.services.includes(service.id)}
                              onChange={() => {
                                if (formData.services.includes(service.id)) {
                                  setFormData({
                                    ...formData,
                                    services: formData.services.filter((s) => s !== service.id)
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    services: [...formData.services, service.id]
                                  });
                                }
                              }}
                            />

                            <div className={`
          flex items-center justify-center w-10 h-10 rounded-lg mr-4
          ${formData.services.includes(service.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                              }
        `}>
                              <Icon icon={service.icon} className="text-xl" />
                            </div>

                            <div className="flex-1">
                              <p className={`
            font-medium
            ${formData.services.includes(service.id)
                                  ? 'text-red-600 dark:text-red-400'
                                  : 'text-gray-700 dark:text-gray-300'
                                }
          `}>
                                {service.label}
                              </p>
                            </div>

                            <div className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${formData.services.includes(service.id)
                                ? 'border-red-500 bg-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                              }
        `}>
                              {formData.services.includes(service.id) && (
                                <Icon icon="mdi:check" className="text-white text-xs" />
                              )}
                            </div>
                          </label>
                        ))}
                      </div>

                      {/* Error message for services if needed */}
                      {error && !formData.services.length && (
                        <p className="mt-2 text-sm text-red-500">
                          Veuillez sélectionner au moins un service
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading || formData.services.length === 0}
                      className="w-full py-5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <>
                          <Icon icon="mdi:loading" className="text-xl animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Icon icon="mdi:send" className="text-xl" />
                          Envoyer
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8"
                >
                  {/* Contact Info Cards */}
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                      Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">Taguini Marketing</span>
                    </h2>

                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.a
                          key={index}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                        >
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon icon={info.icon} className="text-2xl text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {info.content}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Social Section */}
                  <div className="bg-gradient-to-br from-red-500/5 to-blue-500/5 dark:from-red-500/10 dark:to-blue-500/10 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        soyons sociaux !
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Rejoignez-nous sur nos réseaux sociaux
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                          whileHover={{ y: -5, scale: 1.1 }}
                          className={`w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 border border-gray-200 dark:border-gray-700`}
                        >
                          <Icon icon={social.icon} className="text-2xl" />
                        </motion.a>
                      ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Icon icon="mdi:map" className="text-red-500 text-xl" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">Notre emplacement</span>
                        </div>
                        <Link
                          href="https://maps.google.com/?q=Imm+Lafran+centre+Sfax"
                          target="_blank"
                          className="text-sm text-red-500 hover:text-red-600 font-medium"
                        >
                          Voir sur Google Maps
                        </Link>
                      </div>
                      <div className="relative h-40 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                        {/* Map placeholder - you can embed Google Maps iframe here */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <Icon icon="mdi:map-marker" className="text-4xl text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Imm Lafran centre, Mezzanine Bureau N°3
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Full Width (Optional) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Vous préférez nous rendre visite ?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Notre équipe vous accueille du lundi au vendredi, de 9h à 18h
                    </p>
                  </div>
                  <Link
                    href="https://maps.google.com/?q=Imm+Lafran+centre+Sfax"
                    target="_blank"
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white  font-semibold rounded-xl  flex items-center gap-3 whitespace-nowrap"
                  >
                    <Icon icon="mdi:map-marker" className="text-xl" />
                    Obtenir l'itinéraire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;