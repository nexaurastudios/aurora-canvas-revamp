import { Play, Eye } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      views: "45K",
      description: "Complete brand transformation for tech startup",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "Marketing",
      views: "78K",
      description: "Viral marketing campaign for lifestyle brand",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Product Photography",
      category: "Photography",
      views: "32K",
      description: "Premium product shots for e-commerce",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Video Production",
      category: "Video",
      views: "156K",
      description: "Corporate video for Fortune 500 company",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Website Design",
      category: "Web Design",
      views: "89K",
      description: "Modern website for creative agency",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Mobile App UI",
      category: "UI/UX",
      views: "67K",
      description: "Intuitive mobile app interface design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects and creative solutions that have helped brands 
            achieve remarkable success and engagement.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play size={48} className="mx-auto mb-2" />
                    <span className="text-lg font-semibold">View Project</span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-card/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                {/* Views Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Eye size={14} />
                    {item.views}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 inline-block transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;