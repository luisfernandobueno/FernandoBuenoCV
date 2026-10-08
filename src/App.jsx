import './App.css'/* 
import profileImage from './img/IMG_20250430_155138.jpg' */

function App() {
  /*
    =========================================================
    CONFIGURACIÓN
    =========================================================

    La imagen está dentro de:

    public/IMG_20250430_155138.jpg

    Al usar "./IMG_..." hacemos que funcione también cuando
    el sitio está publicado dentro de un repositorio de
    GitHub Pages.
  */

  const profileImage = './IMG_20250430_155138.jpg'

  /*
    =========================================================
    DOCUMENTOS PDF
    =========================================================

    Reemplazá cada texto PEGAR_LINK... por el enlace DIRECTO
    correspondiente al PDF de Google Drive.

    Ejemplo:

    'https://drive.google.com/file/d/XXXXXXXX/view'

    No uses solamente el enlace de la carpeta.
  */

  const documents = {
    service:
      'https://drive.google.com/file/d/19BClb1rwDxb49Ywbv93pL8uyp1yygBEN/view?usp=sharing',

    packages:
      'https://drive.google.com/file/d/1x_pYGTs7jpo-SesPRyytMjXDd5uoA0g5/view?usp=sharing',

    privacy:
      'https://drive.google.com/file/d/1Wa3M6aa0mzRJZCFikFyoHtjnYvx86CKy/view?usp=sharing',

    process:
      'https://drive.google.com/file/d/16Spb4Xi-pfAcIEmi_wGFxbK3ZLmdD5B1/view?usp=sharing',

    faq:
      'https://drive.google.com/file/d/1dbcuKxgei_gNAGgol9Bgnae5UJxwn3aR/view?usp=sharing',
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-lg backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4">

          {/* LOGO / BRAND */}

          <a
            href="#inicio"
            className="shrink-0 text-lg font-extrabold tracking-tight text-white"
          >
            CV <span className="text-lime-400">Profesional</span>
          </a>


          {/* NAVIGATION */}

          <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto pb-1 text-sm">

            <NavLink href="#servicio">
              Servicio
            </NavLink>

            <NavLink href="#soluciones">
              Soluciones
            </NavLink>

            <NavLink href="#adicionales">
              Adicionales
            </NavLink>

            <NavLink href="#privacidad">
              Privacidad
            </NavLink>

            <NavLink href="#publico">
              ¿Para quiénes?
            </NavLink>

            <NavLink href="#proceso">
              Proceso
            </NavLink>

            <NavLink href="#documentos">
              Documentos
            </NavLink>

          </div>


          {/* NAV CTA */}

          <a
            href="#contacto"
            className="hidden shrink-0 rounded-lg bg-lime-400 px-4 py-2 text-sm font-extrabold text-slate-950 shadow-lg shadow-lime-400/20 transition hover:-translate-y-0.5 hover:bg-lime-300 sm:inline-block"
          >
            Consultar
          </a>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="inicio"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-20 text-white sm:py-28"
      >

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-14 md:grid-cols-[1fr_320px]">


            {/* HERO TEXT */}

            <div>

              <span className="mb-5 inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
                Servicio profesional de creación y rediseño de CV
              </span>


              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
                Un CV que realmente{' '}
                <span className="text-lime-400">
                  te represente.
                </span>
              </h1>


              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Creamos y rediseñamos CV profesionales, claros y
                estratégicos, adaptados al perfil de cada persona y
                al tipo de oportunidad laboral que busca.
              </p>


              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Combinamos diseño, redacción y organización de la
                información para ayudarte a presentar tu experiencia
                de una manera más clara, profesional y efectiva.
              </p>


              {/* HERO CTA */}

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#contacto"
                  className="rounded-xl bg-lime-400 px-7 py-3.5 font-extrabold text-slate-950 shadow-xl shadow-lime-400/20 transition hover:-translate-y-1 hover:bg-lime-300"
                >
                  Consultar por el servicio
                </a>


                <a
                  href="#documentos"
                  className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Ver información
                </a>

              </div>

            </div>


            {/* PROFILE CARD */}

            <div className="mx-auto w-full max-w-xs">

              <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">

                <div className="overflow-hidden rounded-2xl bg-slate-800">

                  <img
                    src={profileImage}
                    alt="Fernando Bueno"
                    className="aspect-square w-full object-cover"
                  />

                </div>


                <div className="p-4 text-center">

                  <p className="font-bold text-white">
                    Fernando Bueno
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Diseño · Redacción · Estrategia
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICIO
      ====================================================== */}

      <section
        id="servicio"
        className="scroll-mt-24 bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-12 max-w-3xl">

            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Nuestro servicio
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              Mucho más que hacer que un CV se vea bonito.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nuestro objetivo no es simplemente que el CV se vea
              bien, sino que comunique de forma rápida y efectiva
              quién sos, qué podés aportar y por qué deberían
              considerarte.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              number="01"
              title="Diseño profesional"
              text="Creamos una estructura visual limpia, moderna y fácil de leer."
            />

            <FeatureCard
              number="02"
              title="Redacción y organización"
              text="Mejoramos la forma en que se presentan experiencias, estudios, habilidades y otros datos relevantes."
            />

            <FeatureCard
              number="03"
              title="Adaptación al perfil"
              text="Organizamos el contenido teniendo en cuenta la experiencia, objetivos y tipo de trabajo buscado."
            />

            <FeatureCard
              number="04"
              title="Optimización para selección"
              text="Utilizamos palabras clave y estructuras pensadas para facilitar la lectura de reclutadores y sistemas ATS."
            />

            <FeatureCard
              number="05"
              title="Jerarquización"
              text="Priorizamos la información más importante para destacar rápidamente los puntos fuertes del perfil."
            />

            <FeatureCard
              number="06"
              title="Corrección"
              text="Revisamos ortografía, redacción, coherencia y presentación general."
            />

          </div>


          {/* DELIVERY */}

          <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white">
                ✓
              </div>

              <div>

                <h3 className="font-bold text-slate-900">
                  Entrega digital
                </h3>

                <p className="mt-1 leading-7 text-slate-600">
                  Entregamos el CV final en formato PDF, listo para
                  enviar por correo, WhatsApp, plataformas de empleo
                  o presentar personalmente.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUCIONES
      ====================================================== */}

      <section
        id="soluciones"
        className="scroll-mt-24 bg-slate-50 px-6 py-20"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-12">

            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Soluciones
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Podemos ayudarte con...
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Contamos con diferentes opciones según el punto en el
              que se encuentre cada persona y lo que necesite mejorar
              en su búsqueda laboral.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2">

            <ServiceCard
              title="CV desde cero"
              text="Ideal para quienes todavía no tienen un CV profesional o quieren comenzar nuevamente."
            />

            <ServiceCard
              title="Rediseño de CV"
              text="Transformamos un CV existente para mejorar tanto su presentación como su contenido."
            />

            <ServiceCard
              title="Perfil profesional"
              text="Desarrollamos o mejoramos el perfil inicial para presentar mejor las principales fortalezas."
            />

            <ServiceCard
              title="Descripción de experiencias"
              text="Reformulamos tareas y responsabilidades para mostrar mejor el valor de cada experiencia."
            />

            <ServiceCard
              title="Habilidades"
              text="Seleccionamos y describimos competencias relevantes para cada perfil."
            />

            <ServiceCard
              title="Preparación para entrevistas"
              text="Preparamos material con preguntas frecuentes, qué busca evaluar cada pregunta y ejemplos de respuestas."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ADICIONALES
      ====================================================== */}

      <section
        id="adicionales"
        className="scroll-mt-24 bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Opcionales
              </span>

              <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
                Servicios adicionales
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                También podemos complementar el servicio principal
                con herramientas adicionales para acompañar diferentes
                etapas de la búsqueda laboral.
              </p>

            </div>


            <div className="space-y-3">

              <AdditionalItem text="Archivo editable del CV en Word." />

              <AdditionalItem text="PDF con preguntas y respuestas para entrevistas laborales." />

              <AdditionalItem text="Guía para preparar una entrevista desde cero." />

              <AdditionalItem text="Optimización de perfil de LinkedIn." />

              <AdditionalItem text="Adaptación del CV a una oferta laboral específica." />

              <AdditionalItem text="Creación de una carta de presentación." />

              <AdditionalItem text="Revisión y mejora de un CV ya existente." />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRIVACIDAD
      ====================================================== */}

      <section
        id="privacidad"
        className="scroll-mt-24 bg-slate-900 px-6 py-20 text-white"
      >

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            🔒
          </div>

          <span className="text-sm font-bold uppercase tracking-widest text-lime-400">
            Privacidad
          </span>

          <h2 className="mt-3 text-3xl font-extrabold">
            Tu información, con privacidad.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Para realizar nuestro servicio no es necesario proporcionar
            información extremadamente sensible. Solicitamos únicamente
            los datos necesarios para elaborar correctamente el CV,
            como información de contacto, experiencia laboral, formación
            y habilidades.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            La información proporcionada se utiliza para la elaboración
            del material solicitado y para prestar correctamente el
            servicio contratado.
          </p>


          <a
            href={documents.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Leer información sobre privacidad
          </a>

        </div>

      </section>


      {/* =====================================================
          PÚBLICO
      ====================================================== */}

      <section
        id="publico"
        className="scroll-mt-24 bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-12">

            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              ¿Para quiénes?
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Un servicio pensado para distintas etapas laborales.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              No importa si estás comenzando, buscando volver al mercado
              laboral o pensando en un cambio: adaptamos el trabajo a
              las necesidades de cada perfil.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            <TargetCard text="Personas que buscan su primer empleo." />

            <TargetCard text="Personas que quieren volver al mercado laboral." />

            <TargetCard text="Personas que sienten que su CV no representa realmente su perfil." />

            <TargetCard text="Personas que quieren cambiar de área laboral." />

            <TargetCard text="Personas que quieren actualizar y profesionalizar su CV." />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESO
      ====================================================== */}

      <section
        id="proceso"
        className="scroll-mt-24 bg-slate-50 px-6 py-20"
      >

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Nuestro proceso
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Simple, claro y personalizado.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Trabajamos paso a paso para transformar la información
              proporcionada en una presentación profesional, clara y
              coherente.
            </p>

          </div>


          <div className="mt-12 space-y-4">

            <ProcessStep
              number="01"
              text="Recepción de la información y CV anterior, si existe."
            />

            <ProcessStep
              number="02"
              text="Análisis del perfil y objetivos laborales."
            />

            <ProcessStep
              number="03"
              text="Organización y redacción del contenido."
            />

            <ProcessStep
              number="04"
              text="Diseño y estructuración del CV."
            />

            <ProcessStep
              number="05"
              text="Revisión general del documento."
            />

            <ProcessStep
              number="06"
              text="Entrega del CV final en formato PDF."
            />

            <ProcessStep
              number="07"
              text="Incorporación opcional de servicios adicionales según las necesidades del cliente."

            />

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCUMENTOS
      ====================================================== */}

      <section
        id="documentos"
        className="scroll-mt-24 bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-5xl">

          <div className="mb-12">

            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Información
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Conocé todos los detalles del servicio.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Preparamos documentación adicional para que puedas
              conocer con mayor detalle cómo trabajamos, qué opciones
              existen y qué podés esperar del servicio.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <DocumentCard
              icon="📄"
              title="Información del servicio"
              text="Conocé en detalle qué incluye nuestro servicio de creación y rediseño de CV."
              href={documents.service}
            />

            <DocumentCard
              icon="💼"
              title="Paquetes y precios"
              text="Consultá las diferentes opciones disponibles y qué incluye cada una."
              href={documents.packages}
            />

            <DocumentCard
              icon="🔒"
              title="Privacidad y uso de información"
              text="Información sobre los datos solicitados y su utilización."
              href={documents.privacy}
            />

            <DocumentCard
              icon="⚙️"
              title="Cómo funciona"
              text="Conocé paso a paso cómo se desarrolla el servicio."
              href={documents.process}
            />

            <DocumentCard
              icon="❓"
              title="Preguntas frecuentes"
              text="Encontrá respuestas a las consultas más habituales."
              href={documents.faq}
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="contacto"
        className="scroll-mt-24 bg-gradient-to-br from-indigo-600 to-violet-700 px-6 py-20 text-white"
      >

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-lime-300">
            El objetivo
          </span>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Tu CV debería abrir puertas, no cerrarlas.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
            Un buen CV no debería ser solamente una lista de trabajos
            y estudios. Debe funcionar como una presentación profesional:
            clara, concreta, fácil de leer y orientada a generar interés.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-200">
            Nuestro objetivo es ayudarte a presentar de la mejor manera
            posible lo que ya tenés para ofrecer, sin inventar experiencia
            ni información.
          </p>


          {/* FINAL CTA */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href={documents.service}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-lime-400 px-8 py-4 font-extrabold text-slate-950 shadow-xl shadow-lime-400/20 transition hover:-translate-y-1 hover:bg-lime-300 hover:shadow-2xl"
            >
              Conocer el servicio
            </a>


            <a
              href={documents.packages}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20"
            >
              Ver paquetes y precios
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-slate-950 px-6 py-10 text-center text-sm text-slate-500">

        <p>
          © 2026 Fernando Bueno · Servicio profesional de creación y
          rediseño de CV
        </p>

        <p className="mt-2 text-slate-600">
          Diseño · Redacción · Organización · Estrategia
        </p>

      </footer>

    </main>
  )
}


/* =========================================================
   NAV LINK
========================================================= */

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="shrink-0 rounded-lg px-3 py-2 font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  )
}


/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ number, title, text }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">

      <span className="text-sm font-bold text-indigo-600">
        {number}
      </span>

      <h3 className="mt-3 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  )
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4 h-2 w-10 rounded-full bg-indigo-500" />

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  )
}


/* =========================================================
   ADDITIONAL ITEM
========================================================= */

function AdditionalItem({ text }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50">

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
        ✓
      </span>

      <span className="text-slate-700">
        {text}
      </span>

    </div>
  )
}


/* =========================================================
   TARGET CARD
========================================================= */

function TargetCard({ text }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200 hover:shadow-sm">

      <div className="flex gap-3">

        <span className="mt-1 text-indigo-600">
          ●
        </span>

        <p className="font-medium leading-7 text-slate-700">
          {text}
        </p>

      </div>

    </div>
  )
}


/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({ number, text }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md">

      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
        {number}
      </span>

      <p className="font-medium leading-7 text-slate-700">
        {text}
      </p>

    </div>
  )
}


/* =========================================================
   DOCUMENT CARD
========================================================= */

function DocumentCard({ icon, title, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl transition group-hover:bg-indigo-100">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 flex-1 leading-7 text-slate-600">
        {text}
      </p>

      <div className="mt-5 font-bold text-indigo-600">
        Abrir documento →
      </div>

    </a>
  )
}


export default App