export default function PrimateClosureAnnouncement() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 sm:p-8">
      <main className="max-w-3xl w-full">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Primate: Fin de una Era</h1>
          <p className="text-xl text-gray-400 italic">El fin de nuestro viaje en los Esports</p>
        </header>

        <article className="space-y-24">
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-center">Nuestro Camino</h2>
            <p className="text-gray-300 leading-normal">
              A lo largo de los años, Primate ha sido un lider en la escena de los Esports en Argentina, 
              con una posición dominante en League of Legends. Desde el principio, 
              nuestro compromiso con la excelencia y la mentalidad ganadora nos han 
              llevado a lograr hitos notables y crear momentos imborrables para nuestra comunidad. 
              No se trataba solo de competir, sino de redefinir los estándares,
              apostando por la innovación y el profesionalismo. Donde otros veían barreras, nosotros vimos oportunidades para crecer y transformar la industria.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-center">La Decisión</h2>
            <p className="text-gray-300 leading-normal">
              Hoy cerramos el capítulo de Primate en Esports, una decisión difícil pero necesaria.
              A lo largo de nuestra trayectoria, enfrentamos la creciente falta de previsibilidad en la industria, lo que nos llevó a reevaluar nuestro camino.
              Nos enorgullece todo lo que logramos y el impacto que dejamos en la comunidad, tanto en Argentina como a nivel internacional.
            </p>
          </section>

<section>
          <h2 className="text-3xl font-semibold mb-10 text-center">Aprendizajes</h2>
          <ul className="space-y-8">
            {[
              { title: "Adaptabilidad", content: "La supervivencia en los primeros años depende de victorias consistentes. El éxito está directamente ligado a la competitividad y el rendimiento constante. Los Esports están en constante cambio, y aquellos que triunfan son los que logran adaptarse a las nuevas realidades. Primate se mantuvo flexible, lo que nos permitió sobrevivir y competir durante tanto tiempo." },
              { title: "Exigencia en el Talento", content: "La calidad del personal es crucial. Personal no capacitado genera enormes pérdidas de tiempo, experiencia y recursos, impactando directamente en los resultados. Tener personas altamente capacitadas desde el principio es clave para el éxito de un proyecto." },
              { title: "Falencias Exógenas", content: "La industria en general carece de profesionalismo y hábitos saludables para rendir al nivel esperado. El desgaste psicológico y físico es extremadamente elevado. La naturaleza de la industria demanda una carga extenuante de exposición digital, a la cual pocos pueden adaptarse de manera saludable y sostenible. Actualmente, no existen en la región los recursos suficientes para resolver esto de manera efectiva en un entorno tan demandante." },
              { title: "El Poder de la Comunidad", content: "La comunidad es el corazón de los Esports. El feedback, apoyo y compromiso de nuestros fans moldearon la trayectoria de nuestra marca y nos brindaron insights clave sobre lo que funcionaba y lo que no. Probar productos y adaptarse rápidamente a sus necesidades es clave para identificar oportunidades comerciales." },
              { title: "Monetización en los Esports", content: <>La dependencia exclusiva de modelos B2B limita el crecimiento de los Esports. Encontrar fuentes de ingresos genuinos y sostenibles es un desafío constante que afecta la longevidad de los equipos y las empresas. La mayoría de los modelos de negocios en Esports están basados en B2B, lo que somete a los equipos a las decisiones de los desarrolladores, limitando su previsibilidad y dejándolos con escaso margen de maniobra.<i> Los equipos de Esports deben enfocar de manera inmediata todos sus esfuerzos en generar ingresos directos de sus audiencias, alejándose de la dependencia exclusiva de acuerdos comerciales con marcas y desarrolladores.</i></> },
              { title: "Datos y Decisiones", content: "Acceder a datos fiables en los Esports es uno de los mayores desafíos. Los desarrolladores controlan la mayoría de la información, lo que dificulta el análisis profundo y la toma de decisiones basada en datos. Esta falta de transparencia es una barrera para la innovación y la optimización dentro del sector." }
            ].map((item, index) => (
                <li key={index} className="border-b border-green-800 pb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-100">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{typeof item.content === 'string' ? item.content : <>{item.content}</>}</p>
                </li>
              ))}
            </ul>
        </section>
          
<section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-center">Gracias</h2>
          <p className="text-gray-300 leading-normal">
    A nuestros jugadores, staff, patrocinadores y, lo más importante, a nuestros fans: gracias por su inquebrantable apoyo
    a lo largo de este increíble viaje. Ustedes fueron desde el primer momento la fuerza impulsora detrás de nuestro camino y estamos eternamente agradecidos.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-center">El Legado Continúa</h2>
          <p className="text-gray-300 leading-normal">
    Aunque Primate cierre las puertas en Esports, el espíritu del Mono seguirá latiendo en los corazones que atravesamos y en la marca imborrable que creamos.
    Nuestro legado persiste, esperando su momento para despertar en un futuro aún por escribirse.
          </p>
        </section>

<section className="text-center my-24 py-12 border-t border-b border-green-800">
          <h2 className="text-4xl font-bold text-white">#NuncaTeRindas</h2>
        </section>
          
</article>
        
<footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.tiktok.com/@primateclan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brand-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              <span className="sr-only">TikTok</span>
            </a>
            <a href="https://twitter.com/primateclan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a href="https://www.instagram.com/primateclan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Primate Clan. Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  )
}
