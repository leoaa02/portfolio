import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const projects = [
    {
      id: 1,
      title: 'Astro Buy Ecommerce',
      description: 'Proyecto Final de React JS en coderhouse, un ecommerce de productos de tecnologia.',
      image: 'assets/preview-astro buy.png',
      tags: ['React', 'Tailwind CSS', 'Web'],
      liveUrl: 'https://astro-buy-eight.vercel.app/',
      repoUrl: 'https://github.com/leoaa02/ProyectoFinalEcommerce-Alcala'
    },
    {
      id: 2,
      title: 'Sonic Flow',
      description: 'Single Page de Musica, con una interfaz de usuario moderna y reactiva desarrollada con React, brindando una experiencia fluida e intuitiva. ',
      image: '/assets/sonic-flow-image.png',
      tags: ['React', 'JavaScript', 'Web'],
      liveUrl: 'https://sonic-flow-lake.vercel.app/',
      repoUrl: 'https://github.com/leoaa02/Proyecto-SonicFlow'
    },
    {
      id: 3,
      title: 'Pocket Plan',
      description: 'Simulador de gastos personales que te ayuda a organizar tu presupuesto de forma visual e intuitiva. Ideal para planificar tus finanzas semanales o mensuales JavaScript, HTML, CSS',
      image: '/assets/pocket-plan-cover.png',
      tags: ['CSS', 'JavaScript', 'Web'],
      liveUrl: 'https://leoaa02.github.io/ProyectoFinal--Alcala/',
      repoUrl: 'https://github.com/leoaa02/ProyectoFinal--Alcala'
    },
    {
      id: 4,
      title: 'Cafe del Sol',
      description: 'Sitio web de prueba para una cafetería diseñado con HTML, CSS y JavaScript. Presenta un diseño atractivo y funcional para mostrar productos, promociones y captar la atención de los clientes de forma clara e intuitiva. Ideal como prototipo de presencia online para negocios.',
      image: '/assets/preview-sampleProject.png',
      tags: ['CSS', 'JavaScript', 'Web'],
      liveUrl: 'https://leoaa02.github.io/Cafe-del-Sol--Sample-Project/',
      repoUrl: 'https://github.com/leoaa02/Cafe-del-Sol--Sample-Project'
    },
    {
      id: 5,
      title: 'Planify',
      description: 'Simulador de gastos personales que te ayuda a organizar tu presupuesto de forma visual e intuitiva. Ideal para planificar tus finanzas semanales o mensuales',
      image: '/public/assets/planify-preview.png',
      tags: ['CSS', 'JavaScript', 'Web'],
      liveUrl: 'https://planify-proyect-knrd9qz8g-leoaa02s-projects.vercel.app/',
      repoUrl: 'https://github.com/leoaa02/planify-proyect'
    }
    
  ];

  const filters = ['Todos', 'Web', 'React', 'JavaScript', 'CSS'];
  
  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-32">
      <div className="container-custom">
        <h2 
          className="text-3xl font-montserrat font-bold mb-16 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Mis Proyectos
        </h2>
        
        <div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="rounded-full px-6"
              data-aos="zoom-in"
              data-aos-delay={300 + (index * 100)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <a href="https://github.com/leoaa02" target="_blank" rel="noopener noreferrer">
              Ver más proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={200 + (index * 100)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <CardContent className="p-8">
        <h3 className="text-xl font-montserrat font-semibold mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
              data-aos="zoom-in"
              data-aos-delay={300 + (tagIndex * 100)}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-8 pt-0 flex items-center justify-between gap-4">
        <Button 
          size="sm" 
          variant="outline" 
          asChild
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="h-4 w-4 mr-2" />
            Código
          </a>
        </Button>
        <Button 
          size="sm" 
          asChild
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;


