import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/data/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed w-full top-0 z-50 h-20 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">
              NSLogix IT Solutions
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
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get Quotation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-secondary-900 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200"
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
