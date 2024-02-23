import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="container mx-auto">
      <Card className="w-full max-w-screen-md mt-8">
        <CardHeader className="bg-gray-100 flex justify-between items-center">
          <h1 className="text-2xl font-semibold py-4 px-6">Sobre mí</h1>
          <div className="relative">
            <Image src="/yo.jpg" width={120} height={120} alt="Jossyr Pinto" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center p-4 mb-4">
            <div className="flex flex-col">
              <p className="text-gray-600 mb-4">Aunque no cuento con experiencia laboral formal, me he dedicado a realizar proyectos independientes para clientes, lo que me ha permitido desarrollar habilidades sólidas en el área de desarrollo front-end y gestión de proyectos.</p>
              <p className="text-gray-600 mb-4">Actualmente, me encuentro enfocado en mejorar mis habilidades en desarrollo front-end, mientras continúo explorando la gestión de proyectos. En mi tiempo libre, disfruto creando aplicaciones y proyectos personales para seguir aprendiendo y desafiándome a mí mismo.</p>
              <p className="text-gray-600">Fuera del ámbito profesional, me gusta dedicar tiempo al ejercicio, estar con mi familia, leer e informarme sobre diversas noticias para seguir enriqueciendo mi conocimiento y crecimiento personal.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;
