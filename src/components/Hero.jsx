import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="block text-6xl font-bold text-gray-900 dark:text-white mb-4">Hola, soy</span>
            <span 
              className="text-gradient block mt-2 bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text 
              text-transparent 
              transition-transform 
              duration-700 ease-in-out hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Leonardo
              
            </span>
          </h1>
          
          <p 
            className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Apasionado por la tecnología y el desarrollo web. 
            En busca de nuevas oportunidades para crear e innovar.
          </p>
          
          <div 
            className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button 
              size="lg" 
              className="group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              asChild
            >
              <a href="#projects">
                Ver proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              asChild
            >
              <a href="#contact">Contacto</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
