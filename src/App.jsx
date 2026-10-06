import './App.css'
import profileImage from './img/IMG_20250430_155138.jpg'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-20 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_320px]">

            <div>
              <span className="mb-5 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
                Servicio profesional de CV
              </span>

              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
                Un CV que realmente{' '}
                <span className="text-indigo-400">te represente.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Creo y rediseño CV profesionales, claros y estratégicos,
                adaptados al perfil de cada persona y al tipo de oportunidad
                laboral que busca.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#servicio"
                  className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  Conocer el servicio
                </a>

                <a
                  href="#proceso"
                  className="rounded-xl border border-slate-700 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            {/* PROFILE CARD */}
            <div className="mx-auto w-full max-w-xs">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-2xl bg-slate-800">
                  <img
                    src={`${import.meta.env.BASE_URL}IMG_20250430_155138.jpg`}
                    alt="Fernando Bueno"
                    className="aspect-square w-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <p className="font-bold">Fernando Bueno</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Diseño · Redacción · Estrategia
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* INTRO */}
      <section id="servicio" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              El servicio
            </span>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              Mucho más que hacer que un CV se vea bonito.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              El objetivo no es simplemente que el CV se vea bien, sino que
              comunique de forma rápida y efectiva quién sos, qué podés aportar
              y por qué deberían considerarte.
            </p>
          </div>


          {/* INCLUDED */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              number="01"
              title="Diseño profesional"
              text="Estructura visual limpia, moderna y fácil de leer."
            />

            <FeatureCard
              number="02"
              title="Redacción y organización"
              text="Mejora de la forma en que se presentan experiencias, estudios, habilidades y otros datos relevantes."
            />

            <FeatureCard
              number="03"
              title="Adaptación al perfil"
              text="El contenido se organiza teniendo en cuenta tu experiencia, objetivos y tipo de trabajo buscado."
            />

            <FeatureCard
              number="04"
              title="Optimización para selección"
              text="Palabras clave y estructura pensadas para facilitar la lectura de reclutadores y sistemas ATS."
            />

            <FeatureCard
              number="05"
              title="Jerarquización"
              text="Se prioriza la información más importante para destacar rápidamente los puntos fuertes del perfil."
            />

            <FeatureCard
              number="06"
              title="Corrección"
              text="Revisión de ortografía, redacción, coherencia y presentación general."
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
                  Recibís el CV final en formato PDF, listo para enviar por
                  correo, WhatsApp, plataformas de empleo o presentar
                  personalmente.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Soluciones
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              También puedo ayudarte con...
            </h2>
          </div>


          <div className="grid gap-5 md:grid-cols-2">

            <ServiceCard
              title="CV desde cero"
              text="Ideal si todavía no tenés un CV profesional o querés empezar nuevamente."
            />

            <ServiceCard
              title="Rediseño de CV"
              text="Transformación de un CV existente para mejorar tanto su presentación como su contenido."
            />

            <ServiceCard
              title="Perfil profesional"
              text="Desarrollo o mejora del perfil inicial para presentar mejor tus principales fortalezas."
            />

            <ServiceCard
              title="Descripción de experiencias"
              text="Reformulación de tareas y responsabilidades para mostrar mejor el valor de cada experiencia."
            />

            <ServiceCard
              title="Habilidades"
              text="Selección y descripción de competencias relevantes para el perfil."
            />

            <ServiceCard
              title="Preparación para entrevistas"
              text="Material con preguntas frecuentes, explicación de lo que realmente busca evaluar cada pregunta y ejemplos de respuestas."
            />

          </div>

        </div>
      </section>


      {/* ADDITIONAL SERVICES */}
      <section className="bg-white px-6 py-20">
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
                Podés complementar el servicio principal con herramientas
                adicionales para mejorar toda tu búsqueda laboral.
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


      {/* PRIVACY */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            🔒
          </div>

          <h2 className="text-3xl font-extrabold">
            Tu información, con privacidad.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Para realizar el servicio no es necesario proporcionar información
            extremadamente sensible. Se solicita únicamente la información
            necesaria para elaborar correctamente el CV, como datos de
            contacto, experiencia laboral, formación y habilidades.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            La información proporcionada se utiliza exclusivamente para la
            elaboración del material solicitado.
          </p>

        </div>
      </section>


      {/* TARGET */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              ¿Para quién?
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Un servicio pensado para distintas etapas laborales.
            </h2>
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


      {/* PROCESS */}
      <section id="proceso" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              El proceso
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Simple, claro y personalizado.
            </h2>
          </div>


          <div className="mt-12 space-y-4">

            <ProcessStep number="01" text="Recepción de la información y CV anterior, si existe." />
            <ProcessStep number="02" text="Análisis del perfil y objetivos laborales." />
            <ProcessStep number="03" text="Organización y redacción del contenido." />
            <ProcessStep number="04" text="Diseño y estructuración del CV." />
            <ProcessStep number="05" text="Revisión general." />
            <ProcessStep number="06" text="Entrega del CV final en PDF." />
            <ProcessStep number="07" text="Incorporación opcional de servicios adicionales según las necesidades del cliente." />

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-indigo-200">
            El objetivo
          </span>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Tu CV debería abrir puertas, no cerrarlas.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
            Un buen CV no debería ser solamente una lista de trabajos y
            estudios. Debe funcionar como una presentación profesional:
            clara, concreta, fácil de leer y orientada a generar interés.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-200">
            La idea es ayudarte a presentar de la mejor manera posible lo que
            ya tenés para ofrecer, sin inventar experiencia ni información.
          </p>

          <div className="mt-8">
            <button className="rounded-xl bg-white px-8 py-4 font-bold text-indigo-700 shadow-xl transition hover:-translate-y-1">
              Consultar por el servicio
            </button>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Fernando Bueno · Servicio de creación y rediseño de CV</p>
      </footer>

    </main>
  )
}


/* COMPONENTS */

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


function TargetCard({ text }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="flex gap-3">
        <span className="mt-1 text-indigo-600">●</span>
        <p className="font-medium leading-7 text-slate-700">
          {text}
        </p>
      </div>
    </div>
  )
}


function ProcessStep({ number, text }) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
        {number}
      </span>

      <p className="font-medium leading-7 text-slate-700">
        {text}
      </p>
    </div>
  )
}


export default App