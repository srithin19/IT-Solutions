import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const marketingServices = [
    {
      title: "Web Development",
      description:
        "Custom websites that drive results and convert visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      link: "/digital-marketing/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
      link: "/digital-marketing/app-development",
    },
    {
      title: "SEO Services",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
      link: "/digital-marketing/seo",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build your brand presence and engage with your audience on social platforms.",
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop",
      link: "/digital-marketing/social-media",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image - Dubai Downtown */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-700/95"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Digital Marketing
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive digital marketing solutions to grow your online
              presence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Digital Marketing Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Data-driven marketing strategies that deliver measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.link} className="block">
                  <div className="card group cursor-pointer hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A proven approach to digital marketing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We analyze your business, audience, and competition",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Develop a custom marketing plan aligned with your goals",
              },
              {
                step: "03",
                title: "Execute",
                description: "Implement campaigns across multiple channels",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "Monitor, measure, and continuously improve results",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">
                  {item.title}
                </h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Online Presence?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Let's discuss how our digital marketing services can help you
              achieve your business goals.
            </p>
            <Button to="/contact" variant="secondary">
              Get a Free Consultation
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default DigitalMarketing;
