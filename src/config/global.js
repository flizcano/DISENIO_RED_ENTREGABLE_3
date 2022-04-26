export default {
  global: {
    componenteFormativo: 'Herramientas ofimáticas aplicadas',
    descripcionCurso:
      'La ofimática posee herramientas muy valiosas, dichas herramientas permiten a las organizaciones gestionar la información de forma óptima según necesidades, sin embargo, disponer de información de forma oportuna no solo es importante, también es de gran relevancia y responsabilidad hacer uso de las ofimáticas para dar manejo a la información de los clientes con seguridad y aplicando la normativa. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Herramientas ofimáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Hoja de cálculo electrónica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Configuración de hoja de cálculo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Barra de fórmulas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Formularios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa de seguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Corporaciones Autónomas Regionales. (2020). Glosario de Términos Ambientales.  ',
      link: 'https://www.car.gov.co/vercontenido/2215',
    },
    {
      referencia:
        'Dozo & Martínez Quijano. (2013). Glosario Iberoamericano de Protección de Datos.  ',
      link: 'https://www.habeasdat.com/GLOSARIO.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio Industria y Turismo. (2013). Decreto 1377 de 2013.  ',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/JUNIO/27/DECRETO%201377%20DEL%2027%20DE%20JUNIO%20DE%202013.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015). Decreto 1074 de 2015.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
    },
    {
      referencia:
        'Secretaria del Senado. (2021). Artículo 15 y 79 de la Constitución Política Nacional.  ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html#15',
    },
    {
      referencia:
        'Solano Hernández, A.F. (2018). Análisis y Evaluación de la Gestión Ambiental en Servientrega S.A.  ',
      link:
        'https://repository.urosario.edu.co/bitstream/handle/10336/18287/SolanoHernandez-AndresFelipe-2018.pdf?sequence=21&isAllowed=y',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio, SIC. (2021) Protección de Datos Personales.  ',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética. (2019). Normatividad Ambiental y Sanitaria. : ',
      link:
        'http://www.upme.gov.co/guia_ambiental/carbon/gestion/politica/normativ/normativ.htm#BM1__NORMATIVIDAD_GENERAL',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'Entorno en el cual se contiene el suelo, el agua, el aire, la interrelación y las relaciones de estos elementos con otros elementos vivos.',
    },
    {
      termino: 'Aviso de privacidad',
      significado:
        'La comunicación escrita o verbal, emitida por una entidad jurídica o persona natural, dirigida a un propietario o titular para el tratamiento de los datos.',
    },
    {
      termino: 'Barra de fórmulas',
      significado:
        'Espacio que permite la creación de fórmulas haciendo uso el asistente o de forma manual para la escritura de estas, (fórmulas).',
    },
    {
      termino: 'Celdas',
      significado:
        'Intersección entre las columnas y las filas, estas representan el punto de ubicación dentro de la hoja y es en la celda donde se introduce la información.',
    },
    {
      termino: 'Columna',
      significado:
        'Los espacios que se ubican de forma vertical en la hoja de cálculo, se identifican por que los encabezados son letras dispuestas en orden alfabético.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Transformaciones tanto naturales como culturales, sociales, institucionales y económicas, que están dirigidas a mejorar las condiciones de vida del ser humano.',
    },
    {
      termino: 'Excel',
      significado:
        'Es un programa que permite el manejo de libros los cuales contienen hojas de cálculo.',
    },
    {
      termino: 'Filas',
      significado:
        'Son los espacios que se ubican de forma horizontal en la hoja de cálculo, se identifican por que los encabezados son números los cuales están dispuestos en orden ascendente.',
    },
    {
      termino: 'Hoja de cálculo',
      significado:
        'Espacio o área de trabajo que permite gestionar datos los cuales hacen parte de la información que se almacena en el libro.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Alteraciones en el medio cultural, biológico, químico o físico que es imputado a actividades humanas, generalmente relacionadas con la implementación de proyectos.',
    },
    {
      termino: 'Libro',
      significado: 'Es un archivo de Excel que contiene las hojas de cálculo.',
    },
    {
      termino: 'Transferencia de datos',
      significado:
        'Cuando el responsable del tratamiento de los datos con presencia en Colombia envía o transfiere los datos personales a un receptor que también tiene la connotación de ser responsable del manejo de datos a otro lugar al interior del país o al exterior. ',
    },
  ],
  complementario: [
    {
      texto:
        'Miguel, A. (2020). Ofimática, definición, historia y ejemplos. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rIKhE6wCNyk',
    },
    {
      texto:
        'Carrillo, M. (2020). Introducción a la Hoja Electrónica de Calculo. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xthhxRF7Epo',
    },
    {
      texto:
        'Todo <em>Software.</em> (2019). Configurar Hoja de Cálculo Excel. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7b2U1EsjZJw',
    },
    {
      texto:
        'Silva,V. (2020). Hoja de Cálculo (Excel) Conceptos Básicos. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mt1CkQKuFW4&t=95s',
    },
    {
      texto:
        'Maestra Rayito. (2020) Fórmulas Básicas de Excel. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xwtwb_BoCuY',
    },
    {
      texto:
        'El tio tech (2019) 5 fórmulas en Excel más utilizadas y indispensables para tu trabajo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ndgQo9JYe_o',
    },
    {
      texto:
        'Profe Carlos. (2013). Como hacer funciones lógicas en Excel. [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dWy-JjhUsBw',
    },
    {
      texto:
        'Saber Programas. (2015). Crear Tablas Dinámicas en Excel. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gsxCopOjGZo',
    },
    {
      texto:
        'Saber programas. (2015). Crear GRÁFICOS estadísticos. Introducir datos en Excel y crear gráficas. [Video] You Tube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=04pGYGNxRZY',
    },
    {
      texto:
        'Cordova, O. (2021). Cómo enlazar o vincular celdas entre diferentes hojas. [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PU6SqS6Rtnc',
    },
    {
      texto:
        'Saber Programas. (2019). Hipervínculo en Excel. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A6aPJN_umtA',
    },
    {
      texto:
        'Saber programas (2018) Excel - Cómo hacer gráficos dinámicos y crear un Dashboard con segmentación de datos. Español HD, [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ghyGNJKjPsQ',
    },
    {
      texto:
        'El Tio Tech. (2020). Como Crear una Base de Datos en Excel. [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qD1ESeppezg',
    },
    {
      texto:
        'Correa García E. (2021). Introducción a la Normatividad Ambiental en Colombia. [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XPeC4Fw_T10',
    },
    {
      texto:
        'Escuela de Privacidad. (2020). Legislación en Protección de Datos en Colombia. [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvAH9ppBbbE',
    },
    {
      texto:
        'Ministerio de Industria y Comercio. (2013). Decreto 1377 de 2013.  ',
      tipo: 'Documento',
      link: 'https://n9.cl/yfcpo',
    },
    {
      texto:
        'Superintendencia de Industria y Comercio. (2021) Protección de Datos Personales. ',
      tipo: 'Artículo',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gloria Liliana García',
        cargo: 'Experta temática',
        centro:
          'Centro de la industrial, la empresa y los servicios Regional Santander',
      },
      {
        nombre: 'Cesar Augusto Cano Echeverri',
        cargo: 'Coordinador regional de formación profesional ',
        centro: 'Centro de Comercio y Servicios Regional Risaralda',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres	',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaime ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
