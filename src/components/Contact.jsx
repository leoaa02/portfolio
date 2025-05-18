import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, User } from 'lucide-react';
import { push } from 'firebase/database';
import { messagesRef } from '../../firebase';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    
      push(messagesRef, formData)  
        .then(() => {
            toast({
                title: "Mensaje enviado",
                description: "Gracias por contactarme. Te responderé pronto.",
            });
            setFormData({ name: '', email: '', message: '' });  
        })
        .catch((error) => {
            toast({
                title: "Error al enviar el mensaje",
                description: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
                variant: "destructive",
            });
            console.error("Error al enviar el mensaje a Firebase:", error);
        })
        .finally(() => {
            setLoading(false);
        });
};

  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="container-custom">
        <h2 
          className="text-3xl font-montserrat font-bold mb-16 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Contáctame
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 
              className="text-2xl font-montserrat font-semibold mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              ¿Tienes un proyecto en mente?
            </h3>
            <p 
              className="text-muted-foreground mb-8 text-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Estoy disponible para trabajar en proyectos freelance y colaboraciones. 
              A su vez me interesa en ser parte de un equipo de desarrollo.
              Contáctame y hablemos sobre cómo puedo ayudarte.
            </p>
            
            <div className="space-y-6">
              <div 
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <a href="mailto:leonardoalcalaavi@gmail.com" className="text-muted-foreground hover:text-foreground text-lg">
                  leonardoalcalaavi@gmail.com
                </a>
              </div>
              
              <div 
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <a 
                  href="https://github.com/leoaa02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-lg"
                >
                  github.com/leoaa02
                </a>
              </div>
              
              <div 
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/leonardo-alcala-192042233/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-lg"
                >
                  linkedin.com/in/leonardo-alcala
                </a>
              </div>
            </div>
          </div>
          
          <Card
            data-aos="fade-left"
            data-aos-duration="1000"
            className="p-2"
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
                
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg" 
                  disabled={loading}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
