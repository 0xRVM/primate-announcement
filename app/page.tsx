import Image from 'next/image'

export default function PrimateClosureAnnouncement() {
  return (
    <div className="min-h-screen bg-[#041c12] text-white flex flex-col justify-center items-center p-4 sm:p-8">
      <main className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <Image 
              src="/primate-logo" 
              alt="Primate Logo" 
              width={160}
              height={160}
              priority
/>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Primate: Fin de una Era</h1>
          <p className="text-xl text-gray-400 italic">El Fin de nuestro viaje en los Esports</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">Nuestro Camino</h2>
            <p className="text-gray-300 leading-relaxed">
              A lo largo de los años, Primate ha sido un lider en la escena de los Esports en Argentina, 
              con una posición dominante en League of Legends. Desde el principio, 
              nuestro compromiso con la excelencia y la mentalidad ganadora nos han 
              llevado a lograr hitos notables y crear momentos imborrables para nuestra comunidad. 
              No se trataba solo de competir, sino de redefinir los estándares dentro de la industria, 
              apostando por la innovación y el profesionalismo donde otros veían barreras.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">La Decisión</h2>
            <p className="text-gray-300 leading-relaxed">
              Hoy cerramos el capítulo de Primate en Esports, una decisión difícil pero necesaria.
              A lo largo de nuestra trayectoria, enfrentamos la creciente falta de previsibilidad en la industria, lo que nos llevó a reevaluar nuestro camino.
              Nos enorgullece todo lo que logramos y el impacto que dejamos en la comunidad, tanto en Argentina como a nivel internacional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-center">Nuestros Aprendizajes</h2>
            <ul className="space-y-6">
              {[
                { title: "Adaptabilidad", content: "La supervivencia en los primeros años depende de victorias consistentes. El éxito está directamente ligado a la competitividad y el rendimiento constante. Los Esports están en constante cambio, y aquellos que triunfan son los que logran adaptarse a las nuevas realidades. Primate se mantuvo flexible, lo que nos permitió sobrevivir y competir durante tanto tiempo." },
                { title: "Exigencia en el Talento", content: "La calidad del personal es crucial. Personal no capacitado genera enormes pérdidas de tiempo, experiencia y recursos, impactando directamente en los resultados. Tener personas altamente capacitadas desde el principio es clave para el éxito de un proyecto." },
                { title: "Falta de Profesionalismo y sus Consecuencias", content: "La industria carece de profesionalismo y hábitos saludables para rendir al máximo. El desgaste psicológico y físico es extremadamente elevado. Además es una industria que naturalmente exige una carga horaria alta, en la que pocos logran equilibrar una rutina adecuada con la exigente carga tecnológica y competitiva." },
                { title: "El poder de la comunidad", content: "La comunidad es el corazón de los Esports. El feedback, apoyo y compromiso de nuestros fans moldearon la trayectoria de nuestra marca y nos brindaron insights clave sobre lo que funcionaba y lo que no. Probar productos y adaptarse rápidamente a sus necesidades es clave para identificar oportunidades comerciales." },
                { title: "La dificultad de Monetizar los Esports", content: "La dependencia de modelos B2B limita el crecimiento de los Esports. Encontrar fuentes de ingresos genuinos y sostenibles es un desafío constante que afecta la longevidad de los equipos y las empresas. La mayoría de los modelos de negocio en Esports están basados en B2B, lo que significa que los equipos dependen de las decisiones de los desarrolladores y de la popularidad del sector para atraer marcas y patrocinadores." },
                { title: "Los datos en la toma de decisiones", content: "Acceder a datos fiables en los Esports es uno de los mayores desafíos. Los desarrolladores controlan la mayoría de la información, lo que dificulta el análisis profundo y la toma de decisiones basada en datos. Esta falta de transparencia es una barrera para la innovación y la optimización dentro del sector." }
              ].map((item, index) => (
                <li key={index} className="bg-green-900 bg-opacity-20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.content}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">Gracias</h2>
            <p className="text-gray-300 leading-relaxed">
              A nuestros jugadores, staff, patrocinadores y, lo más importante, a nuestros fans: gracias por su inquebrantable apoyo
              a lo largo de este increíble viaje. Ustedes fueron desde el primer momento la fuerza impulsora detrás de nuestro éxito, y estamos eternamente agradecidos.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">El Legado Continúa</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Aunque Primate cierre sus puertas, su espíritu seguirá latiendo en las vidas que tocamos y en la marca imborrable que dejamos en los Esports.
              Nuestro legado persiste, esperando su momento para despertar nuevamente en un futuro aún por escribir. 
            </p>
            <p className="text-3xl font-bold animate-rainbow-text">#NuncaTeRindas</p>
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
