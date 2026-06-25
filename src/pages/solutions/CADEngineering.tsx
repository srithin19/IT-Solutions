import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  CubeIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  BoltIcon,
  CogIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const CADEngineering = () => {
  const cadSolutions = [
    {
      title: "AutoCAD Solutions",
      description:
        "Professional AutoCAD software, training, and support for architecture and engineering firms.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop",
    },
    {
      title: "3D Modeling & Design",
      description:
        "Advanced 3D modeling tools including SolidWorks, CATIA, and Fusion 360.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "BIM Solutions",
      description:
        "Building Information Modeling (BIM) software and implementation services.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop",
    },
    {
      title: "Engineering Software",
      description:
        "Specialized engineering software for civil, mechanical, and electrical engineering.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "CAD Workstations",
      description:
        "High-performance workstations optimized for CAD and engineering applications.",
      image:
        "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=2042&auto=format&fit=crop",
    },
    {
      title: "Training & Support",
      description:
        "Comprehensive CAD training programs and ongoing technical support.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    },
  ];

  const industries = [
    { name: "Architecture", IconComponent: BuildingOffice2Icon },
    { name: "Civil Engineering", IconComponent: WrenchScrewdriverIcon },
    { name: "Mechanical Engineering", IconComponent: CogIcon },
    { name: "Electrical Engineering", IconComponent: BoltIcon },
    { name: "Manufacturing", IconComponent: PuzzlePieceIcon },
    { name: "Construction", IconComponent: CubeIcon },
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
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop')",
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
              CAD & Engineering Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Professional CAD software, engineering tools, and technical
              solutions for design professionals. From concept to completion, we
              power your innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Specialized CAD and engineering solutions for diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <industry.IconComponent className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CAD Solutions Grid */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our CAD & Engineering Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive CAD and engineering software solutions with expert
              implementation, training, and support to maximize your team's
              productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cadSolutions.map((solution, index) => (
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
              Your Trusted CAD Solutions Partner in Dubai
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-primary-200">Design Firms Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-primary-200">Users Trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <p className="text-primary-200">Years of Expertise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete CAD Lifecycle Support
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "✓", text: "Software licensing and procurement" },
                  {
                    icon: "✓",
                    text: "Custom implementation and configuration",
                  },
                  { icon: "✓", text: "Comprehensive training programs" },
                  { icon: "✓", text: "24/7 technical support" },
                  { icon: "✓", text: "Regular updates and maintenance" },
                  { icon: "✓", text: "Performance optimization" },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-2xl text-green-600">{item.icon}</span>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                alt="CAD Engineering"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CADEngineering;
