/**
 * Todo el contenido del portafolio vive aquí.
 * Para actualizar textos, cursos o datos de contacto, edita solo este archivo.
 */

/* ------------------------------------------------------------------ */
/*  FOTO — pega aquí el enlace de Cloudinary                            */
/* ------------------------------------------------------------------ */
/**
 * Pega la URL completa de la imagen en Cloudinary, por ejemplo:
 *   https://res.cloudinary.com/tu-cloud/image/upload/v1712345678/ada-artiles.jpg
 * Mientras esté vacía, se muestra un monograma elegante en su lugar.
 * La página añade automáticamente recorte a la cara, formato y calidad óptimos.
 */
export const PHOTO_URL = 'https://res.cloudinary.com/veloramedia/image/upload/v1790131105/ChatGPT_Image_Sep_22_2026_10_36_39_PM_tlpitw.png'

/* ------------------------------------------------------------------ */

export const person = {
  name: 'Ada Artiles Espinal',
  shortName: 'Ada Artiles',
  initials: 'AA',
  title: 'Psicóloga Industrial',
  specialty: 'Especialista en Recursos Humanos y Formación Empresarial',
  institution: 'Facilitadora del Instituto Nacional de Formación Técnico Profesional (INFOTEP)',
  institutionShort: 'Facilitadora INFOTEP',
  years: 35,
  sectors: 'Sector privado e instituciones gubernamentales',
  email: 'artilesada@gmail.com',
  phones: [
    { label: '(809) 669-5534', href: 'tel:+18096695534' },
    { label: '(829) 988-1570', href: 'tel:+18299881570' },
  ],
  mainQuote: 'El desarrollo de las organizaciones comienza con el desarrollo de las personas.',
  facilitatorQuote:
    'Formar personas es mucho más que transmitir conocimientos; es ayudarles a descubrir capacidades que pueden transformar su manera de trabajar, relacionarse y aportar.',
}

export const profile = {
  paragraphs: [
    'Soy Ada Artiles, facilitadora del Instituto Nacional de Formación Técnico Profesional (INFOTEP) y Psicóloga Industrial de profesión, con más de 35 años de experiencia en el área de Recursos Humanos, desarrollada tanto en empresas del sector privado como en instituciones gubernamentales.',
    'A lo largo de mi trayectoria profesional he acompañado a personas, equipos y organizaciones en procesos relacionados con la gestión del talento humano, desarrollo de competencias, liderazgo, comunicación, servicio, trabajo en equipo, relaciones interpersonales y fortalecimiento de la cultura organizacional.',
    'Como facilitadora, concibo la formación como un espacio para aprender, reflexionar, compartir experiencias y transformar conocimientos en acciones concretas. Mi metodología procura conectar los contenidos con situaciones reales del entorno laboral mediante ejercicios, casos, dinámicas y herramientas prácticas.',
  ],
  purpose:
    'Contribuir al crecimiento personal y profesional de los participantes, fortaleciendo conocimientos, habilidades, actitudes y valores para favorecer un desempeño responsable, humano y efectivo.',
  highlights: [
    { label: 'Profesión', value: 'Psicóloga Industrial' },
    { label: 'Formación', value: 'Facilitadora INFOTEP' },
    { label: 'Experiencia', value: '+35 años en RR.HH.' },
    { label: 'Trayectoria', value: 'Sector privado y gubernamental' },
  ],
}

/** Los dos roles que la landing destaca. */
export const roles = [
  {
    id: 'asesora',
    eyebrow: 'Rol 01',
    title: 'Asesora de departamentos de Recursos Humanos',
    lead: 'Acompañamiento a equipos de Gestión Humana para ordenar, fortalecer y alinear sus procesos con los objetivos de la organización, con la experiencia de más de 35 años en empresas privadas e instituciones públicas.',
    points: [
      'Administración y procesos clave de Recursos Humanos',
      'Diseño e implementación de sistemas de evaluación del desempeño',
      'Planes de desarrollo de personal y de competencias',
      'Gestión estratégica del capital humano',
      'Diagnóstico y fortalecimiento de cultura y clima laboral',
      'Desarrollo organizacional y acompañamiento en procesos de cambio',
    ],
    cta: 'Solicitar asesoría',
  },
  {
    id: 'facilitadora',
    eyebrow: 'Rol 02',
    title: 'Facilitadora docente INFOTEP',
    lead: 'Formación en habilidades blandas y gestión humana con una metodología participativa, práctica y aplicable al puesto de trabajo, que integra conocimientos, habilidades, actitudes y valores.',
    points: [
      'Talleres independientes, programas modulares y rutas de formación',
      'Contenidos adaptados al perfil, sector y cultura de cada organización',
      'Aprendizaje experiencial: casos, dinámicas y ejercicios reales',
      'Modalidad presencial o virtual',
      'Ocho áreas temáticas y un catálogo de más de 35 cursos',
      'Enfoque en Conocer, Saber Hacer y Saber Ser',
    ],
    cta: 'Ver catálogo de formación',
  },
] as const

export const learningApproach = [
  {
    key: 'Conocer',
    text: 'Adquirir conocimientos y comprender nuevas herramientas.',
  },
  {
    key: 'Saber hacer',
    text: 'Aplicar lo aprendido a situaciones reales del entorno laboral.',
  },
  {
    key: 'Saber ser',
    text: 'Fortalecer actitudes, valores y comportamientos que favorezcan relaciones saludables.',
  },
]

export const valueProposition = {
  intro:
    'Una oferta de formación diseñada para responder a necesidades reales de las organizaciones, combinando experiencia en Recursos Humanos, herramientas prácticas y una metodología participativa centrada en las personas.',
  items: [
    { icon: 'award', text: 'Experiencia profesional de más de 35 años en Recursos Humanos.' },
    { icon: 'target', text: 'Formación con enfoque práctico y aplicable al puesto de trabajo.' },
    { icon: 'users', text: 'Dinámicas y ejercicios que facilitan la participación y la reflexión.' },
    { icon: 'settings', text: 'Adaptación de los contenidos a la realidad de cada organización.' },
    { icon: 'layers', text: 'Integración de conocimientos, habilidades, actitudes y valores.' },
    { icon: 'sprout', text: 'Orientación al desarrollo de personas, equipos y cultura organizacional.' },
  ],
} as const

export const methodology = {
  intro:
    'La metodología combina distintas estrategias de aprendizaje. Los contenidos pueden adaptarse al perfil de los participantes, sector, cultura y necesidades de la organización.',
  steps: [
    'Exposición dialogada',
    'Aprendizaje experiencial',
    'Análisis de casos',
    'Ejercicios individuales',
    'Trabajo colaborativo',
    'Dinámicas de grupo',
    'Reflexión',
    'Aplicación práctica',
  ],
}

export type Course = { name: string; description: string }
export type Area = { id: string; numeral: string; title: string; short: string; courses: Course[] }

export const areas: Area[] = [
  {
    id: 'desarrollo-personal',
    numeral: 'I',
    title: 'Desarrollo Personal y Habilidades Blandas',
    short: 'Desarrollo personal',
    courses: [
      {
        name: 'Actitud Positiva en el Trabajo',
        description:
          'Desarrollar una actitud positiva ante los retos laborales, favoreciendo el bienestar, el trabajo en equipo, el clima laboral y el desempeño individual y colectivo.',
      },
      {
        name: 'Inteligencia Emocional',
        description:
          'Fortalecer la capacidad para reconocer y gestionar las propias emociones y comprender las de los demás, favoreciendo mejores decisiones, relaciones y manejo de situaciones de presión.',
      },
      {
        name: 'Bienestar Emocional',
        description:
          'Comprender la importancia del bienestar emocional y desarrollar herramientas prácticas para fortalecer el autocuidado, la gestión del estrés, la resiliencia y la calidad de vida laboral.',
      },
      {
        name: 'Manejo del Estrés y la Resiliencia',
        description:
          'Identificar fuentes de estrés y desarrollar estrategias saludables de afrontamiento, fortaleciendo la capacidad de adaptación ante cambios y desafíos.',
      },
      {
        name: 'Formación Humana para el Trabajo',
        description:
          'Fortalecer valores, actitudes y competencias humanas para un desempeño responsable, ético y comprometido, promoviendo el desarrollo personal y un clima laboral saludable.',
      },
      {
        name: 'Adaptabilidad al Cambio',
        description:
          'Desarrollar una actitud flexible, positiva y proactiva frente a los cambios organizacionales, favoreciendo la disposición para aprender y responder a nuevos escenarios.',
      },
    ],
  },
  {
    id: 'comunicacion',
    numeral: 'II',
    title: 'Comunicación y Relaciones Interpersonales',
    short: 'Comunicación',
    courses: [
      {
        name: 'Relaciones Interpersonales',
        description:
          'Desarrollar habilidades para comunicarse, relacionarse y colaborar de manera efectiva, empática y saludable en el entorno laboral.',
      },
      {
        name: 'Comunicación Asertiva',
        description:
          'Fortalecer la capacidad para expresar ideas, opiniones, necesidades y sentimientos con claridad, respeto y oportunidad.',
      },
      {
        name: 'Manejo Efectivo de Conflictos',
        description:
          'Identificar, analizar y gestionar conflictos de manera constructiva, fortaleciendo las relaciones y promoviendo ambientes armoniosos y productivos.',
      },
    ],
  },
  {
    id: 'liderazgo',
    numeral: 'III',
    title: 'Trabajo en Equipo y Liderazgo',
    short: 'Equipo y liderazgo',
    courses: [
      {
        name: 'Trabajo en Equipo',
        description:
          'Fortalecer la colaboración, responsabilidad compartida y sinergia para alcanzar objetivos comunes de manera efectiva y armoniosa.',
      },
      {
        name: 'Integración de Equipos de Trabajo',
        description:
          'Fortalecer la cohesión, confianza, colaboración y sentido de pertenencia, aprovechando las fortalezas individuales y colectivas.',
      },
      {
        name: 'Liderazgo Personal y Colaborativo',
        description:
          'Desarrollar habilidades de liderazgo basadas en el autoconocimiento, la motivación, la influencia positiva y el desarrollo de los equipos.',
      },
      {
        name: 'Delegación y Supervisión',
        description:
          'Desarrollar competencias para delegar responsabilidades con claridad, dar seguimiento y acompañar el desempeño sin perder el control de los resultados.',
      },
      {
        name: 'Motivación Laboral',
        description:
          'Fortalecer la motivación y el compromiso, identificando factores que influyen en la actitud, satisfacción, energía y disposición hacia el trabajo.',
      },
      {
        name: 'Reconocimiento como Herramienta de Motivación',
        description:
          'Desarrollar habilidades para utilizar el reconocimiento de manera oportuna y efectiva como herramienta para fortalecer motivación, confianza, compromiso y valoración.',
      },
    ],
  },
  {
    id: 'servicio',
    numeral: 'IV',
    title: 'Servicio, Imagen y Experiencia del Cliente',
    short: 'Servicio al cliente',
    courses: [
      {
        name: 'Servicio al Cliente con Enfoque Humano',
        description:
          'Desarrollar un servicio de calidad basado en empatía, escucha activa, respeto y búsqueda efectiva de soluciones para clientes internos y externos.',
      },
      {
        name: 'Excelencia en el Servicio al Cliente',
        description:
          'Fortalecer competencias para ofrecer experiencias de servicio consistentes, profesionales y orientadas a las necesidades del cliente.',
      },
      {
        name: 'Etiqueta y Protocolo en el Servicio',
        description:
          'Aplicar normas de cortesía, presentación, comportamiento y protocolo que contribuyan a una experiencia profesional y positiva.',
      },
      {
        name: 'Imagen Profesional',
        description:
          'Fortalecer la imagen personal y profesional como parte de la comunicación, credibilidad, servicio y representación de la organización.',
      },
      {
        name: 'Humanización de los Servicios',
        description:
          'Promover una atención centrada en la persona, basada en respeto, empatía, dignidad, sensibilidad y calidad humana.',
      },
    ],
  },
  {
    id: 'productividad',
    numeral: 'V',
    title: 'Productividad, Organización y Gestión del Tiempo',
    short: 'Productividad',
    courses: [
      {
        name: 'Gestión del Tiempo y Productividad',
        description:
          'Desarrollar estrategias para planificar, priorizar y utilizar el tiempo de manera eficiente, aumentando la productividad sin descuidar el bienestar.',
      },
      {
        name: 'Manejo Efectivo del Tiempo',
        description:
          'Aplicar herramientas prácticas para organizar actividades, reducir pérdidas de tiempo, establecer prioridades y mejorar el equilibrio entre responsabilidades.',
      },
      {
        name: 'Planificación del Trabajo',
        description:
          'Fortalecer la capacidad para planificar, organizar y priorizar tareas, optimizando recursos y orientando el trabajo hacia resultados.',
      },
      {
        name: 'Iniciativa y Productividad',
        description:
          'Fomentar una actitud proactiva, orientada a la búsqueda de soluciones, aprovechamiento de oportunidades y cumplimiento de objetivos.',
      },
      {
        name: 'Cultura de Responsabilidad en el Trabajo',
        description:
          'Fortalecer hábitos de seguimiento, cumplimiento, organización y responsabilidad sobre compromisos, tareas y resultados.',
      },
      {
        name: 'Procrastinación Laboral',
        description:
          'Identificar causas y patrones de postergación y desarrollar estrategias para establecer prioridades, gestionar distracciones y avanzar oportunamente hacia los objetivos.',
      },
    ],
  },
  {
    id: 'cultura',
    numeral: 'VI',
    title: 'Cultura, Compromiso y Valores Organizacionales',
    short: 'Cultura y valores',
    courses: [
      {
        name: 'Cultura Organizacional',
        description:
          'Comprender cómo se construye y fortalece la cultura organizacional a través de valores, comportamientos, liderazgo y prácticas cotidianas.',
      },
      {
        name: 'Clima Laboral',
        description:
          'Identificar factores que influyen en el ambiente de trabajo y promover comportamientos que favorezcan relaciones saludables, colaboración y bienestar.',
      },
      {
        name: 'Compromiso e Identificación con la Empresa',
        description:
          'Fortalecer el sentido de pertenencia, compromiso e identificación con la organización, conectando el aporte individual con los objetivos institucionales.',
      },
      {
        name: 'Lealtad con la Empresa',
        description:
          'Reflexionar sobre la lealtad profesional, el compromiso, la confidencialidad, la responsabilidad y el cuidado de la relación colaborador-organización.',
      },
    ],
  },
  {
    id: 'etica',
    numeral: 'VII',
    title: 'Ética y Responsabilidad Profesional',
    short: 'Ética profesional',
    courses: [
      {
        name: 'Ética Profesional y Valores en el Trabajo',
        description:
          'Fortalecer principios de integridad, responsabilidad, respeto, compromiso y transparencia que sustenten relaciones de confianza.',
      },
      {
        name: 'Ética Laboral',
        description:
          'Promover comportamientos éticos en las decisiones y relaciones de trabajo, fortaleciendo responsabilidad, honestidad y respeto por las normas y las personas.',
      },
    ],
  },
  {
    id: 'talento-humano',
    numeral: 'VIII',
    title: 'Gestión del Talento Humano',
    short: 'Talento humano',
    courses: [
      {
        name: 'Administración de Recursos Humanos',
        description:
          'Comprender los principales procesos de Recursos Humanos y su contribución al funcionamiento y desarrollo de las organizaciones.',
      },
      {
        name: 'Gestión del Capital Humano',
        description:
          'Comprender el papel estratégico del talento humano y alinear prácticas de gestión de personas con los objetivos organizacionales.',
      },
      {
        name: 'Desarrollo de Personal',
        description:
          'Diseñar acciones orientadas al desarrollo de competencias, crecimiento profesional y preparación del talento para responder a las necesidades de la organización.',
      },
      {
        name: 'Evaluación del Desempeño',
        description:
          'Comprender, diseñar, implementar y dar seguimiento a sistemas de evaluación del desempeño orientados al desarrollo y a los resultados.',
      },
      {
        name: 'Desarrollo Organizacional',
        description:
          'Comprender y aplicar principios de desarrollo organizacional para acompañar procesos de cambio, efectividad, cultura y mejora institucional.',
      },
    ],
  },
]

export const totalCourses = areas.reduce((sum, a) => sum + a.courses.length, 0)

export const programs = {
  intro:
    'Cada propuesta puede ser personalizada de acuerdo con el perfil de los participantes, objetivos estratégicos, cultura organizacional, sector de actividad y necesidades detectadas.',
  formats: [
    {
      title: 'Talleres independientes',
      text: 'Sesiones enfocadas en una competencia específica para responder a una necesidad puntual.',
    },
    {
      title: 'Programas modulares',
      text: 'Varios cursos articulados en módulos que se complementan y profundizan en un área.',
    },
    {
      title: 'Rutas de formación',
      text: 'Itinerarios diseñados a la medida para acompañar el desarrollo de equipos a lo largo del tiempo.',
    },
  ],
  customization: [
    'Perfil de los participantes',
    'Objetivos estratégicos',
    'Cultura organizacional',
    'Sector de actividad',
    'Necesidades detectadas',
  ],
  modality: 'Presencial o virtual',
  duration: 'Adaptada a las necesidades y disponibilidad de cada organización',
}

export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#formacion', label: 'Formación' },
  { href: '#programas', label: 'Programas' },
  { href: '#contacto', label: 'Contacto' },
]
