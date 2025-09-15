import clientAvatar from '@/assets/client-avatar.jpg';
import videoThumbnails from '@/assets/video-thumbnails.jpg';
import { Star, Users, UserPlus, Eye, TrendingUp } from 'lucide-react';

const ClientTestimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Client </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped our clients achieve remarkable growth and engagement 
            through our creative solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Client Testimonial Card */}
          <div className="bg-card rounded-xl shadow-card p-8 hover:shadow-elegant transition-all duration-300">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
              "NexAura Studios completely transformed our digital presence. Their creative approach 
              and attention to detail resulted in a 300% increase in engagement and helped us 
              reach over 50K new followers in just 3 months. Simply outstanding work!"
            </blockquote>
            
            {/* Client Info */}
            <div className="flex items-center gap-4">
              <img
                src={clientAvatar}
                alt="Sarah Johnson"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-bold text-foreground text-lg">Sarah Johnson</h4>
                <p className="text-primary font-medium">@sarahjcreative</p>
                <p className="text-muted-foreground text-sm">Creative Director</p>
              </div>
            </div>
          </div>

          {/* Client Stats Panel */}
          <div className="space-y-6">
            
            {/* Social Stats Bar */}
            <div className="bg-card rounded-xl shadow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={clientAvatar}
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-foreground">@sarahjcreative</h4>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      <strong className="text-foreground">52.3K</strong> followers
                    </span>
                    <span className="flex items-center gap-1">
                      <UserPlus size={14} />
                      <strong className="text-foreground">2.1K</strong> following
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Performance Grid */}
            <div className="bg-card rounded-xl shadow-card p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye size={18} />
                Recent Performance
              </h4>
              
              <div className="mb-6">
                <img
                  src={videoThumbnails}
                  alt="Video thumbnails grid"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                    28K+
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Views</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                    +185%
                  </div>
                  <div className="text-sm text-muted-foreground">Growth</div>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-card rounded-xl shadow-card p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp size={18} />
                Last 7 Videos Performance
              </h4>
              
              {/* Simple CSS Chart */}
              <div className="flex items-end gap-2 h-24">
                {[65, 45, 80, 35, 90, 55, 75].map((height, index) => (
                  <div
                    key={index}
                    className="bg-gradient-primary rounded-t flex-1 transition-all duration-300 hover:opacity-80"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>28K</span>
                <span>19K</span>
                <span>34K</span>
                <span>15K</span>
                <span>42K</span>
                <span>23K</span>
                <span>31K</span>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card rounded-xl shadow-card p-6 hover:shadow-elegant transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground mb-4">
              "Professional, creative, and results-driven. NexAura Studios exceeded our expectations!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <p className="font-medium text-foreground">Mike Chen</p>
                <p className="text-sm text-muted-foreground">@mikechenmarketing</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-card p-6 hover:shadow-elegant transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground mb-4">
              "The team's creativity and strategic thinking transformed our brand completely."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="font-medium text-foreground">Alex Rivera</p>
                <p className="text-sm text-muted-foreground">@alexdesigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;