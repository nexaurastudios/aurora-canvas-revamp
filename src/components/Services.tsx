import { Palette, Camera, Video, Globe, Megaphone, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Complete brand identity design including logos, color schemes, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography services for products, portraits, and commercial projects.",
      features: ["Product Photography", "Portrait Sessions", "Commercial Shoots", "Event Coverage"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "High-quality video content creation from concept to final delivery.",
      features: ["Promotional Videos", "Social Media Content", "Corporate Videos", "Animation"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design",
      description: "Modern, responsive websites that provide exceptional user experiences.",
      features: ["Responsive Design", "UI/UX Design", "E-commerce", "CMS Integration"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that drive engagement and conversions.",
      features: ["Social Media Marketing", "Content Strategy", "SEO Optimization", "PPC Campaigns"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Consulting",
      description: "Data-driven insights and strategic consulting to optimize your digital presence.",
      features: ["Performance Analytics", "Strategy Consulting", "Growth Planning", "ROI Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of creative and digital services to help your 
            business grow and succeed in today's competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg text-white mb-6 group-hover:shadow-glow transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life and achieve your business goals.
          </p>
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 inline-block transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;