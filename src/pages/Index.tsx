import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Apple, Smartphone, Star, Users, Shield } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";

const Index = () => {
  const screenshots = [screenshot1, screenshot2, screenshot3];

  const features = [
    {
      icon: Smartphone,
      title: "Intuitive Design",
      description: "Clean and modern interface designed for the best user experience"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of users who love our platform"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Apple className="w-8 h-8 text-foreground" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AppShowcase
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Experience the future of mobile apps. Beautiful, intuitive, and powerful - 
              everything you need in one stunning application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Download className="w-5 h-5" />
                Download Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:border-primary">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 rating</span>
              </div>
              <div className="text-sm text-muted-foreground">
                10K+ downloads
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img 
                src={heroPhone} 
                alt="App preview on iPhone" 
                className="w-80 lg:w-96 rounded-3xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Our App?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make our app stand out from the competition
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 border-primary/20 hover:shadow-card transition-all duration-300 hover:scale-105">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            App Screenshots
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at our beautiful and intuitive interface
          </p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <img 
                src={screenshot} 
                alt={`App screenshot ${index + 1}`}
                className="w-64 h-auto rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-secondary border-primary/20 text-center p-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users and download our app today. 
            Available for iOS and Android devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Apple className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/30 hover:border-primary">
              <Download className="w-5 h-5" />
              Download for Android
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-primary/20">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 AppShowcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;