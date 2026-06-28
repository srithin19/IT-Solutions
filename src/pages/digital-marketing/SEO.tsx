import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  BoltIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const SEO = () => {
  const benefits = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Higher Rankings",
      description: "Get to the top of search results",
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "More Traffic",
      description: "Increase organic website visitors",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Better Visibility",
      description: "Be found by your target audience",
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      title: "Quality Leads",
      description: "Attract customers ready to buy",
    },
  ];

  const services = [
    {
      title: "Technical SEO",
      description:
        "Optimize your website's technical foundation for better crawling, indexing, and performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      features: ["Site Speed", "Mobile Optimization", "Schema Markup"],
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize your content, meta tags, and internal linking structure for maximum relevance.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
      features: ["Keyword Research", "Content Optimization", "Meta Tags"],
    },
    {
      title: "Off-Page SEO",
      description:
        "Build high-quality backlinks and establish your domain authority across the web.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      features: ["Link Building", "Guest Posting", "Digital PR"],
    },
    {
      title: "Local SEO",
      description:
        "Dominate local search results and Google Maps to attract nearby customers.",
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
      features: ["Google My Business", "Local Citations", "Review Management"],
    },
    {
      title: "Content Strategy",
      description:
        "Create SEO-optimized content that engages users and ranks well in search engines.",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop",
      features: ["Blog Posts", "Landing Pages", "Content Calendar"],
    },
    {
      title: "SEO Audits",
      description:
        "Comprehensive analysis of your website's SEO performance with actionable recommendations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      features: ["Site Analysis", "Competitor Research", "Action Plan"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Audit",
      description: "Analyze current SEO performance",
    },
    { step: "2", title: "Strategy", description: "Develop custom SEO roadmap" },
    {
      step: "3",
      title: "Optimize",
      description: "Implement on-page and technical fixes",
    },
    {
      step: "4",
      title: "Monitor",
      description: "Track rankings and refine approach",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-primary-600/86"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              SEO Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Dominate search rankings and drive organic traffic to your website
            </p>
            <Button to="/contact" variant="secondary">
              Get SEO Analysis
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our SEO Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive search engine optimization solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-900">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-secondary-700"
                    >
                      <MagnifyingGlassIcon className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our SEO Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A data-driven approach to improving your search rankings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">
                  {item.title}
                </h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-bold mb-2">300%</div>
              <div className="text-primary-100">Average Traffic Increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">Top 3</div>
              <div className="text-primary-100">Average Ranking Position</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">90 Days</div>
              <div className="text-primary-100">To See Results</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card text-center max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">
              Ready to Rank Higher?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Let's boost your search engine rankings and drive more organic
              traffic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">
                Get Free SEO Audit
              </Button>
              <Button to="/digital-marketing" variant="outline-dark">
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default SEO;
