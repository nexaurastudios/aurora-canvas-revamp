import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning",
      description: "Recognized for excellence in creative design and digital marketing solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Talented professionals with years of experience in their respective fields."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable results that drive your business forward."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative",
      description: "Always staying ahead of trends with cutting-edge creative solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">NexAura Studios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a creative agency passionate about bringing your vision to life through 
            innovative design, strategic thinking, and exceptional execution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* About Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Crafting Digital Excellence Since 2019
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At NexAura Studios, we believe that great design goes beyond aesthetics. 
              It's about creating meaningful connections between brands and their audiences, 
              telling compelling stories, and driving real business results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of creative professionals specializes in brand identity, digital marketing, 
              content creation, and strategic consulting. We work closely with our clients to 
              understand their unique challenges and deliver solutions that exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 text-center"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-xl p-8 text-white text-center">
              <div className="mb-6">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl opacity-90">Successful Projects</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-sm opacity-80">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">50M+</div>
                  <div className="text-sm opacity-80">Views Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 group hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg text-white mb-4 group-hover:shadow-glow transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;