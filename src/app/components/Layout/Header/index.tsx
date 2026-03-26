"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";

import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import { signOut, useSession } from 'next-auth/react'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggler from "../../Layout/Header/ThemeToggler";

const Header: React.FC = () => {
  const { data: session } = useSession();
  const pathUrl = usePathname();
  const { theme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Helper function to check if a link is active
  const isLinkActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === href;
    }
    // Check if current path starts with the href (for nested routes)
    return pathname.startsWith(href);
  };

  // Helper function to check if submenu item is active
  const isSubmenuItemActive = (href: string): boolean => {
    return pathname === href;
  };

  // Enhanced scroll handling with blur effect
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setSticky(scrollY >= 80);
    setIsScrolled(scrollY > 20);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    signOut();
    setUser(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${sticky
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800"
        : "bg-transparent"
        } ${isScrolled && !sticky
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
          : ""
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src="/images/logo/logo.png"
                  alt="Taguini Marketing Logo"
                  width={160}
                  height={48}
                  className="h-10 w-auto lg:h-12 dark:brightness-100 dark:contrast-100"
                  priority
                  quality={100}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {headerData.map((item, index) => {
              const isActive = isLinkActive(item.href);
              
              return (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-1 ${
                      isActive
                        ? "text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } ${item.featured
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
                        : ""
                      }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <Icon
                        icon="mdi:chevron-down"
                        className={`text-xs ml-1 transition-transform group-hover:rotate-180 ${
                          isActive ? "text-red-500 dark:text-red-400" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Submenu Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 min-w-[280px] overflow-hidden backdrop-blur-xl">
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                            {item.label}
                          </h4>
                          <div className="space-y-1">
                            {item.submenu.map((subItem, subIndex) => {
                              const isSubActive = isSubmenuItemActive(subItem.href);
                              
                              return (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className={`flex items-start gap-3 p-3 rounded-lg transition-colors group/submenu ${
                                    isSubActive
                                      ? "bg-red-50 dark:bg-red-900/20"
                                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                                  }`}
                                >
                                  {subItem.icon && (
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                      isSubActive
                                        ? "bg-red-100 dark:bg-red-900/40"
                                        : "bg-red-50 dark:bg-red-900/20"
                                    }`}>
                                      <Icon
                                        icon={subItem.icon}
                                        className={`text-lg ${
                                          isSubActive
                                            ? "text-red-600 dark:text-red-400"
                                            : "text-red-500 dark:text-red-400"
                                        }`}
                                      />
                                    </div>
                                  )}
                                  <div>
                                    <div className={`font-medium ${
                                      isSubActive
                                        ? "text-red-600 dark:text-red-400"
                                        : "text-gray-900 dark:text-white group-hover/submenu:text-red-500 dark:group-hover/submenu:text-red-400"
                                    }`}>
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </div>
                                  {isSubActive && (
                                    <Icon icon="mdi:check-circle" className="text-red-500 dark:text-red-400 text-sm ml-auto" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggler */}
            <div className="hidden sm:block">
              <ThemeToggler />
            </div>

            {/* Phone Number - Marketing Focused */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+216 54 650 272"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 group"
            >
              <Icon icon="mdi:phone" className="text-lg" />
              <div className="text-sm font-medium">
                <div className="text-xs text-gray-500 dark:text-gray-400">Contactez-nous</div>
                <div className="font-bold">+216 54 650 272</div>
              </div>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${navbarOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setNavbarOpen(false)}
            />
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="relative w-32">
                      <Image
                        src="/images/logo/logo.png"
                        alt="Taguini Marketing Logo"
                        width={120}
                        height={36}
                        className="h-8 w-auto"
                      />
                    </div>
                    <button
                      onClick={() => setNavbarOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Icon icon="mdi:close" className="text-2xl text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {headerData.map((item, index) => {
                      const isActive = isLinkActive(item.href);
                      
                      return (
                        <div key={index} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                          <Link
                            href={item.href}
                            onClick={() => setNavbarOpen(false)}
                            className={`flex items-center justify-between py-4 px-2 rounded-lg transition-colors ${
                              isActive
                                ? "text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {isActive && (
                                <Icon icon="mdi:circle" className="text-red-500 text-xs" />
                              )}
                              <span className={`font-medium ${isActive ? "font-semibold" : ""}`}>
                                {item.label}
                              </span>
                            </div>
                            {item.submenu && (
                              <Icon 
                                icon="mdi:chevron-right" 
                                className={`text-lg transition-transform ${
                                  isActive ? "text-red-500" : "text-gray-400"
                                }`} 
                              />
                            )}
                          </Link>

                          {/* Mobile Submenu */}
                          {item.submenu && (
                            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-800">
                              {item.submenu.map((subItem, subIndex) => {
                                const isSubActive = isSubmenuItemActive(subItem.href);
                                
                                return (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    onClick={() => setNavbarOpen(false)}
                                    className={`flex items-center gap-3 py-3 px-2 rounded-lg transition-colors ${
                                      isSubActive
                                        ? "bg-red-50 dark:bg-red-900/20"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                                  >
                                    {subItem.icon && (
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                        isSubActive
                                          ? "bg-red-100 dark:bg-red-900/40"
                                          : "bg-gray-100 dark:bg-gray-800"
                                      }`}>
                                        <Icon 
                                          icon={subItem.icon} 
                                          className={`text-base ${
                                            isSubActive
                                              ? "text-red-600 dark:text-red-400"
                                              : "text-gray-500 dark:text-gray-400"
                                          }`} 
                                        />
                                      </div>
                                    )}
                                    <div className="flex-1">
                                      <div className={`font-medium ${
                                        isSubActive
                                          ? "text-red-600 dark:text-red-400"
                                          : "text-gray-700 dark:text-gray-300"
                                      }`}>
                                        {subItem.label}
                                      </div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                    {isSubActive && (
                                      <Icon icon="mdi:check-circle" className="text-red-500 text-sm" />
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Mobile CTA Section */}
                  <div className="mt-8 space-y-4">
                    <a
                      href="tel:+212600000000"
                      className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold"
                    >
                      <Icon icon="mdi:phone" className="text-xl" />
                      <div className="text-left">
                        <div className="text-sm">Contactez-nous</div>
                        <div className="text-lg font-bold">+216 54 650 272</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      © {new Date().getFullYear()} Taguini Marketing
                    </span>
                    <ThemeToggler />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;