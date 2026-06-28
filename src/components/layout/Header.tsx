import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/data/constants";
import companyLogo from "@/assets/NSL ICON.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const scrollToPageTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNavLinkClick = (targetPath: string) => {
    if (location.pathname === targetPath) {
      scrollToPageTop();
    }

    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className="fixed w-full top-0 z-50 h-20 bg-white shadow-lg">
      <div className="container-custom">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-xl px-2 py-1 transition-all duration-200 hover:bg-white/70"
          >
            <div className="h-12 w-12 rounded-xl bg-white p-1.5 shadow-md ring-2 ring-primary-100 transition-all duration-200 group-hover:ring-primary-300">
              <img
                src={companyLogo}
                alt="NSLogix IT Solutions logo"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
            <div className="leading-tight">
              <p className="text-lg md:text-xl font-bold text-gradient">
                NSLogix IT Solutions
              </p>
              <p className="hidden md:block text-xs font-medium text-secondary-600">
                Trusted Digital Transformation Partner
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button className="text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 flex items-center space-x-1 py-2 px-3 rounded-md">
                      <span>{item.label}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          transform:
                            activeDropdown === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full w-64 pt-2 z-50"
                        >
                          <div className="bg-white shadow-2xl rounded-lg py-2 border border-secondary-100 overflow-hidden">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.path}
                                className="block px-4 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 border-b border-secondary-50 last:border-b-0"
                                onClick={() => handleNavLinkClick(subItem.path)}
                              >
                                <div className="flex items-center space-x-2">
                                  <span className="text-primary-600">›</span>
                                  <span>{subItem.label}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => handleNavLinkClick(item.path)}
                    className={`text-secondary-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 py-2 px-3 rounded-md ${
                      location.pathname === item.path ? "text-primary-600" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/971507364139"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="h-12 w-12 rounded-xl bg-primary-50 text-primary-600 border border-primary-200 flex items-center justify-center transition-all duration-200 hover:bg-primary-100 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.85 11.85 0 0012.06 0C5.56 0 .25 5.3.25 11.82c0 2.08.54 4.11 1.57 5.9L0 24l6.44-1.69a11.8 11.8 0 005.62 1.43h.01c6.5 0 11.82-5.3 11.82-11.82a11.74 11.74 0 00-3.37-8.44zm-8.46 18.27h-.01a9.76 9.76 0 01-4.98-1.37l-.36-.21-3.82 1 1.02-3.73-.23-.38a9.78 9.78 0 01-1.5-5.2c0-5.42 4.42-9.83 9.86-9.83a9.8 9.8 0 016.98 2.89 9.76 9.76 0 012.88 6.95c0 5.42-4.42 9.84-9.84 9.84zm5.39-7.35c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.33.44-.49.15-.16.2-.28.3-.47.1-.2.05-.37-.02-.52-.08-.15-.69-1.66-.95-2.27-.25-.6-.5-.5-.69-.51h-.59c-.2 0-.52.08-.8.37-.28.3-1.05 1.03-1.05 2.5s1.08 2.88 1.23 3.08c.15.2 2.12 3.25 5.14 4.56.72.31 1.29.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z" />
              </svg>
            </a>
            <Link to="/contact" className="btn-primary">
              Get Quotation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/971507364139"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.85 11.85 0 0012.06 0C5.56 0 .25 5.3.25 11.82c0 2.08.54 4.11 1.57 5.9L0 24l6.44-1.69a11.8 11.8 0 005.62 1.43h.01c6.5 0 11.82-5.3 11.82-11.82a11.74 11.74 0 00-3.37-8.44zm-8.46 18.27h-.01a9.76 9.76 0 01-4.98-1.37l-.36-.21-3.82 1 1.02-3.73-.23-.38a9.78 9.78 0 01-1.5-5.2c0-5.42 4.42-9.83 9.86-9.83a9.8 9.8 0 016.98 2.89 9.76 9.76 0 012.88 6.95c0 5.42-4.42 9.84-9.84 9.84zm5.39-7.35c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.33.44-.49.15-.16.2-.28.3-.47.1-.2.05-.37-.02-.52-.08-.15-.69-1.66-.95-2.27-.25-.6-.5-.5-.69-.51h-.59c-.2 0-.52.08-.8.37-.28.3-1.05 1.03-1.05 2.5s1.08 2.88 1.23 3.08c.15.2 2.12 3.25 5.14 4.56.72.31 1.29.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z" />
              </svg>
            </a>
            <button
              className="p-2 rounded-md text-secondary-900 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-secondary-200 shadow-xl"
            >
              <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label,
                            )
                          }
                          className="w-full flex items-center justify-between text-left text-secondary-700 hover:text-primary-700 hover:bg-primary-50 font-medium py-3 px-3 rounded-lg transition-all duration-200"
                        >
                          <span>{item.label}</span>
                          <svg
                            className="w-4 h-4 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{
                              transform:
                                activeDropdown === item.label
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-3 mt-2 pl-3 border-l-2 border-primary-100 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.path}
                                className="block text-secondary-600 hover:text-primary-700 hover:bg-primary-50 py-2 px-3 rounded-md transition-all duration-200"
                                onClick={() => handleNavLinkClick(subItem.path)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block text-secondary-700 hover:text-primary-700 hover:bg-primary-50 font-medium py-3 px-3 rounded-lg transition-all duration-200"
                        onClick={() => handleNavLinkClick(item.path)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-3 mt-2 border-t border-secondary-200 bg-white sticky bottom-0">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center hover:scale-[1.01] active:scale-[0.99]"
                    onClick={() => handleNavLinkClick("/contact")}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
