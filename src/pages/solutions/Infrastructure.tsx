import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  ServerIcon,
  CircleStackIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  LockClosedIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Infrastructure = () => {
  const infrastructureSolutions = [
    {
      title: "Server Room Setup",
      description:
        "Professional data center design and implementation with optimal cooling, power management, and security.",
      IconComponent: ServerIcon,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Structured Cabling",
      description:
        "High-performance Cat6/Cat7 cabling infrastructure for reliable network connectivity.",
      IconComponent: ServerIcon,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Network Infrastructure",
      description:
        "Enterprise-grade routers, switches, and network equipment for seamless connectivity.",
      IconComponent: ServerIcon,
      image:
        "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Storage Solutions",
      description:
        "NAS, SAN, and enterprise storage systems for secure data management.",
      IconComponent: CircleStackIcon,
      image:
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Virtualization",
      description:
        "VMware, Hyper-V, and virtual infrastructure for maximum resource utilization.",
      IconComponent: CloudIcon,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Disaster Recovery",
      description:
        "Comprehensive backup and disaster recovery solutions to ensure business continuity.",
      IconComponent: ShieldCheckIcon,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: BoltIcon,
      title: "99.9% Uptime Guarantee",
      description:
        "Reliable infrastructure designed for uninterrupted operations.",
    },
    {
      IconComponent: LockClosedIcon,
      title: "Enterprise Security",
      description: "Layered protection with best-practice security controls.",
    },
    {
      IconComponent: ChartBarIcon,
      title: "Scalable Solutions",
      description:
        "Grow capacity on demand without disrupting business services.",
    },
    {
      IconComponent: WrenchScrewdriverIcon,
      title: "24/7 Monitoring",
      description:
        "Continuous health checks and rapid incident response coverage.",
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
                "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/92 to-primary-500/88"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Infrastructure Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Build a robust IT foundation with our enterprise-grade
              infrastructure solutions. From server rooms to network cabling, we
              deliver excellence at every layer.
            </p>
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

      {/* Solutions Grid */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Infrastructure Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed to support your
              business operations with maximum reliability, security, and
              performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary-600/90 p-3 rounded-lg backdrop-blur-sm">
                    <solution.IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Us for Your IT Infrastructure?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">250+</div>
                <p className="text-secondary-600">Successful Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <p className="text-secondary-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-secondary-600">Client Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Infrastructure;
