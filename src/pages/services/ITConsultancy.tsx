import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const ITConsultancy = () => {
  const services = [
    {
      title: "Strategic IT Planning",
      description:
        "Develop comprehensive IT roadmaps aligned with your business goals.",
      IconComponent: ChartBarIcon,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Technology Assessment",
      description:
        "Evaluate your current technology stack and identify optimization opportunities.",
      IconComponent: LightBulbIcon,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Digital Transformation",
      description:
        "Guide your business through successful digital transformation initiatives.",
      IconComponent: RocketLaunchIcon,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cloud Migration Strategy",
      description:
        "Plan and execute seamless cloud migration with minimal disruption.",
      IconComponent: ArrowTrendingUpIcon,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Security Planning",
      description:
        "Develop comprehensive cybersecurity strategies to protect your business.",
      IconComponent: ShieldCheckIcon,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cost Optimization",
      description:
        "Identify opportunities to reduce IT costs while improving efficiency.",
      IconComponent: CurrencyDollarIcon,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2026&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: ChartBarIcon,
      title: "Strategic Alignment",
      description: "Technology aligned with business goals",
    },
    {
      IconComponent: CurrencyDollarIcon,
      title: "Cost Savings",
      description: "Reduce IT spending by 30%",
    },
    {
      IconComponent: ClockIcon,
      title: "Faster Decisions",
      description: "Expert guidance for quick decisions",
    },
    {
      IconComponent: RocketLaunchIcon,
      title: "Innovation",
      description: "Stay ahead of technology trends",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We analyze your current IT infrastructure, business processes, and goals.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Create a comprehensive IT roadmap tailored to your business needs.",
    },
    {
      step: "03",
      title: "Implementation Planning",
      description:
        "Develop detailed action plans with timelines and resource allocation.",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description:
        "Continuous guidance and optimization as your business evolves.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 to-primary-700/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              IT Consultancy Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Expert IT consulting to help your business grow and succeed with
              the right technology strategies. Transform your IT infrastructure
              into a competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Schedule Consultation
              </Button>
              <Button to="/services" variant="outline">
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <benefit.IconComponent className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Consulting Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive IT consulting services to drive your business
              forward with strategic technology planning and expert guidance.
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
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary-600/90 p-3 rounded-lg backdrop-blur-sm">
                    <service.IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Consulting Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A proven methodology to deliver results and drive your business
              forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-l-4 border-primary-600 h-full">
                  <div className="text-5xl font-bold text-primary-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Businesses Transformed" },
              { number: "30%", label: "Average Cost Reduction" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2 text-primary-200">
                  {stat.number}
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ITConsultancy;
