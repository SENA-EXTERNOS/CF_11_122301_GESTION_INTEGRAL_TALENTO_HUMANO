export default {
  global: {
    componenteFormativo: 'Desarrollo y ejecución de la evaluación de desempeño',
    descripcionCurso:
      'Desarrollar y ejecutar efectivamente la evaluación de desempeño del personal, es un factor fundamental, el cual, concatenado con la recopilación de datos, permite analizar adecuadamente la información y establecer planes de mejora continua, direccionados a las áreas con índices más bajos en las escalas de valoración, permitiéndole al talento humano, alcanzar los objetivos y metas propuestos por la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/barra1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/barra2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/barra3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/barra4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/barra5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/barra6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Procedimiento técnico',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Validación del instrumento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recursos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Implementación de la evaluación y recopilación de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procedimiento técnico',
      referencia:
        'Universidad <em>ΙSΟ. (2019). ISO 9001: 2015 Proceso Procedimiento e Instrucción de Trabajo Documenting Processes and Procedures</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EMCD4yFRydw',
    },
    {
      tema: 'Implementación de la evaluación y recopilación de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Analítica de datos</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eK0QG1SUk9A ',
    },
    {
      tema: 'Implementación de la evaluación y recopilación de datos',
      referencia:
        'González, C. y Manzanares, C. (2020). <em>Sistemas de Gestión de la Calidad ISO 9001:</em> guía de aplicación. UNED - Universidad Nacional de Educación a Distancia. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/162883',
    },
    {
      tema: 'Implementación de la evaluación y recopilación de datos',
      referencia:
        'TEDx Talks. (2020). <em>La paradoja del feedback | Ricardo Mitrani | TEDxUNAMLeón</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0_FfaRltXTs',
    },
  ],
  glosario: [
    {
      termino: 'Cuestionario',
      significado: 'conjunto de preguntas que buscan evaluar una situación.',
    },
    {
      termino: 'Credenciales',
      significado:
        'certificación que se le entrega a un usuario en donde se le notifican los permisos de acceso a la documentación.',
    },
    {
      termino: 'Debilidad',
      significado: 'carencia de cualidades o de vigor.',
    },
    {
      termino: 'Emitir',
      significado: 'manifestar por medio escrito o verbal, una opinión.',
    },
    {
      termino: 'Experto',
      significado:
        'individuo que es muy hábil o cuenta con experiencia en alguna actividad.',
    },
    {
      termino: 'Fortaleza',
      significado: 'capacidad de enfrentar y sobrellevar obstáculos.',
    },
    {
      termino: 'Fuente',
      significado: 'origen de la información.',
    },
    {
      termino: 'Informe',
      significado: 'exposición sobre el estado de un proceso o un individuo.',
    },
    {
      termino: 'Veredicto',
      significado: 'dictamen o decisión final con relación a una temática.',
    },
    {
      termino: 'Viabilidad',
      significado: 'es la probabilidad de ejecutar con éxito un proyecto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Flores Mendoza, R. L. y Cervantes Penagos, M. Á. (2019). <em>Evaluación del desempeño del Gobierno Corporativo</em>. Instituto Mexicano de Contadores Públicos.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/124949 ',
    },
    {
      referencia:
        'Hernández Martín, A. (Coord.) e Iglesias Rodríguez, A. (Coord.). (2020). <em>Evaluación de las competencias digitales de estudiantes de educación obligatoria. Diseño, validación y presentación de la prueba Ecodies.</em> Ediciones Octaedro, S.L.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/157700',
    },
    {
      referencia:
        'Pulido Romero, E., Escobar Domínguez, Ó. & Núñez Pérez, J. Á. (2019). <em>Base de datos</em>. Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121283',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
