import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase, User } from 'lucide-react';

const About = () => {
  const skills = [
    "JavaScript", "React", "HTML & CSS", "Node.js", 
    "Sass", "Responsive Design", "Tailwind CSS", "Git", "GitHub", "QA Testing"
  ];

  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="container-custom">
        <h2 
          className="text-3xl font-montserrat font-bold mb-16 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Sobre mí
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div 
            className="md:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="space-y-6 text-muted-foreground">
              <p data-aos="fade-up" data-aos-delay="200">
                Soy un desarrollador apasionado por crear soluciones web elegantes y funcionales. 
                Me especializo en construir aplicaciones con React y JavaScript, poniendo siempre el 
                foco en la experiencia del usuario.
              </p>
              
              <p data-aos="fade-up" data-aos-delay="300">
                Mi enfoque combina código limpio con un diseño atractivo para crear productos 
                que no solo funcionan bien, sino que también lucen geniales.
              </p>
            </div>
            
            <div 
              className="mt-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-montserrat font-semibold mb-6">Habilidades</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full"
                    data-aos="zoom-in"
                    data-aos-delay={500 + (index * 100)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="md:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="grid gap-8">
              <Card 
                className="card-hover overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardContent className="p-8 flex items-start">
                  <div className="mr-6 p-3 bg-primary/10 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">Desarrollo Frontend</h3>
                    <p className="text-muted-foreground">
                      Construyo interfaces de usuario modernas y responsivas utilizando React y JavaScript.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="card-hover overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CardContent className="p-8 flex items-start">
                  <div className="mr-6 p-3 bg-primary/10 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">Diseño UI/UX</h3>
                    <p className="text-muted-foreground">
                      Aprendienzaje actual y constante en herramientas de diseño como Figma y Framer.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card 
                className="card-hover overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <CardContent className="p-8 flex items-start">
                  <div className="mr-6 p-3 bg-primary/10 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">Desarrollo de Proyectos</h3>
                    <p className="text-muted-foreground">
                      Gestiono proyectos de principio a fin, desde la concepción hasta la implementación.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
