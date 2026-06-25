import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  BoltIcon,
  CurrencyDollarIcon,
  StarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Hospitality = () => {
  const hospitalitySolutions = [
    {
      title: "Hotel Management Systems",
      description:
        "Complete PMS (Property Management System) solutions for hotels and resorts.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Restaurant POS Systems",
      description:
        "Modern point-of-sale systems for restaurants, cafes, and food service businesses.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Guest WiFi Solutions",
      description:
        "High-speed, secure WiFi networks with guest authentication and analytics.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    },
    {
      title: "Digital Signage",
      description:
        "Interactive displays and digital signage for hotels and restaurants.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    },
    {
      title: "Reservation Systems",
      description: "Online booking and reservation management platforms.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Guest Room Technology",
      description:
        "Smart room controls, in-room entertainment, and guest convenience systems.",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      title: "Faster Service",
      description: "Streamline operations and reduce wait times",
      IconComponent: BoltIcon,
    },
    {
      title: "Increased Revenue",
      description: "Boost sales with modern technology",
      IconComponent: CurrencyDollarIcon,
    },
    {
      title: "Better Guest Experience",
      description: "Enhance satisfaction with smart solutions",
      IconComponent: StarIcon,
    },
    {
      title: "Real-time Analytics",
      description: "Make data-driven decisions instantly",
      IconComponent: ChartBarIcon,
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
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 to-primary-800/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Hospitality Technology Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Transform your hotel, restaurant, or hospitality business with
              cutting-edge technology solutions designed to enhance guest
              experiences and streamline operations.
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
            <h2 className="section-title">Our Hospitality Solutions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive technology solutions tailored for hotels,
              restaurants, resorts, and hospitality businesses to deliver
              exceptional guest experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalitySolutions.map((solution, index) => (
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
      <Section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dubai's Leading Hospitality Technology Provider
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <p className="text-primary-200">Hotels & Resorts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">250+</div>
                <p className="text-primary-200">Restaurants Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <p className="text-primary-200">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Hospitality;
