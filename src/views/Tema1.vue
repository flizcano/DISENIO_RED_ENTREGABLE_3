<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Herramientas ofimáticas
    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.position-relative.tarjeta1
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/0.jpg')})`}"
          )
            .imagen-superior.position-absolute.d-none.d-lg-block(style='bottom:0 ; left: -7%; z-index:'): img(src='@/assets/curso/1.png')
          .bloque-texto-g__texto.p-5
            p.mb-0 Una herramienta ofimática es un conjunto o recopilación de técnicas, aplicaciones y programas informáticos que pueden ser utilizados tanto de forma personal como empresarial; nos permiten crear, modificar, organizar, optimizar, escanear, imprimir y mejorar, entre otras acciones,  las tareas o procedimientos habituales.
    p.mb-5 Normalmente vienen en paquetes de programas o <em>suites</em>, e incluyen:
    SlyderF.flechas-rojas.mb-5(columnas="col-lg-6 col-xl-4" data-aos='zoom-in')
      .tarjeta.tarjeta-up-slyde.rounded-3
        img(src='@/assets/curso/2.jpg')
        .tarjeta-up-slyde__content.color-primario.p-4
          h4 Procesador de texto
          p Programa o <em>software</em> que contiene múltiples funciones para elaborar o redactar un documento y donde se pueden utilizar diferentes tipos de letra (fuentes), tamaños, caracteres especiales, colores, justificación de párrafos, etc. Permite insertar imágenes, tablas y gráficos dinámicos, para el análisis de datos.
      .tarjeta.tarjeta-up-slyde.rounded-3
        img(src='@/assets/curso/3.jpg')
        .tarjeta-up-slyde__content.color-primario.p-4
          h4 Programa para llevar a cabo presentaciones
          p Programa o <em>software</em> que se utiliza para presentar información esquematizada a través de diapositivas, donde, de forma ordenada, se va entregando la información contenida en cada una de ellas.
            br
            br
            |Una diapositiva puede ser diseñada haciendo uso de herramientas como textos, imágenes, fotos, videos o gráficos y también se pueden incluir diferentes efectos de animación.
      .tarjeta.tarjeta-up-slyde.rounded-3
        img(src='@/assets/curso/4.jpg')
        .tarjeta-up-slyde__content.color-primario.p-4
          h4 Hoja de cálculo
          p Programa o <em>software</em> conformado por filas (hileras) y columnas, que se utilizan para ordenar y procesar información como: datos numéricos, realizar cálculos matemáticos, gráficos y organizar otro tipo de datos. Permite realizar cualquier tipo de cálculo matemático, desde sencillas operaciones hasta cálculos más complejos. 
      .tarjeta.tarjeta-up-slyde
        img(src='@/assets/curso/5.jpg')
        .tarjeta-up-slyde__content.color-primario.p-4
          h4 Base de datos
          p Programa o <em>software</em> que también se conoce como Sistema de Gestión de Bases de Datos, y requiere de conocimiento más especializado y técnico para su manejo. Permite almacenar, de forma estructurada, gran cantidad de información a la que se puede acceder y utilizar de una manera sencilla y metódica.
      .tarjeta.tarjeta-up-slyde
        img(src='@/assets/curso/6.jpg')
        .tarjeta-up-slyde__content.color-primario.p-4
          h4 Programas de correo electrónico 
          p Programa o <em>software</em> que aporta la opción de poder tener centralizada toda la información que se utiliza en un correo electrónico, para administrarla fácil y acertadamente.
    p.mb-5 Las características de una <em>suite</em> informática son las siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-md-3.col-8(data-aos='fade-right'): img(src='@/assets/curso/7.svg').mb-3
      .col-lg-10.col-md-9.col-12(data-aos='fade-left')
        h4 Facilidad en el manejo de programas básicos
        p Las aplicaciones, como procesadores de textos, hojas de cálculo y presentaciones, aportan gran facilidad en su manejo; pero otras aplicaciones como las bases de datos, son programas más complejos que necesitan más capacitación por parte de la persona que las va a manejar.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2.col-md-3.col-8(data-aos='fade-right'): img(src='@/assets/curso/8.svg').mb-3
      .col-lg-10.col-md-9.col-12(data-aos='fade-left')
        h4 Funciones integradas
        p Los programas que vienen incorporados dentro de una <em>suite</em> informática, permiten interactuar entre ellos mismos. Por ejemplo, se puede realizar una gráfica estadística en una hoja de cálculo y luego llevarla a una presentación o a un procesador de textos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3.col-8(data-aos='fade-right'): img(src='@/assets/curso/9.svg').mb-3
      .col-lg-10.col-md-9.col-12(data-aos='fade-left')
        h4 Uso <em>online</em> y <em>offline</em>
        p <b><em>Offline:</em></b> cuando las aplicaciones se encuentran instaladas directamente en los computadores.
          br
          |<b><em>Online:</em></b> cuando se accede por conexión a internet y las aplicaciones se encuentran en un servidor externo. Funcionan como si estuviesen instaladas en el computador, se obtiene accesibilidad desde cualquier dispositivo y la información queda alojada en la nube.
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.py-3.px-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg" style='width: 70px')
        .col-8
          p.mb-0 Para ampliar información, lo invitamos a ver el video <b>“Herramientas ofimáticas”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Hs7UG7RO3_M" target="_blank")
            span Ver mas
            i.fas.fa-file-download
    h3.titulo-tercero(data-aos='fade-right') ¿Cuáles son las <em>suites</em> informáticas que se ofrecen en el mercado?
    p.mb-5 Las siguientes son las <em>suites</em> informáticas más utilizadas en el mercado (Pauls, S., 2021):
    TabsA.color-acento-contenido.mb-5(data-aos='zoom-in')
      .tarjeta.color-acento-contenido--borde.bg-3-claro.p-4(titulo="Microsoft Office")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-3.col-6: img(src='@/assets/curso/11.jpg')
          .col-lg-10.col-md-9.col-6
            h4 Microsoft Office
            p Es el principal distribuidor de esta tecnología. Se trata de una <em>suite</em> ofimática, para escritorio, que se debe pagar e instalar, para ser utilizada. Se destaca por la variedad de herramientas que aporta para trabajar, pero sobre todo, por la potencia de las mismas. Incluye programas como Word, Excel, PowerPoint, Outlook, Access, OneNote, Project, Publisher, SharePoint, Visio, Teams, Tareas, etc. Según la versión que se compre, dispone de acceso <em>online</em> u <em>offline</em> con instalación de algunas de sus aplicaciones en modo escritorio para varios dispositivos.
      .tarjeta.color-acento-contenido--borde.bg-3-claro.p-4(titulo="Google WorkSpace <em>(Suite)</em>")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-3.col-6: img(src='@/assets/curso/11.jpg')
          .col-lg-10.col-md-9.col-6
            h4 Google WorkSpace (<em>Suite</em>)
            p Con este proveedor, se adquieren herramientas <em>online</em> y con calidad. La oferta se compone de Docs, Sheets, Slides, Gmail, Forms y otras herramientas externas, con la ventaja de ser compatibles. Para servirse de estas herramientas, es necesario tener acceso a internet.
      .tarjeta.color-acento-contenido--borde.bg-3-claro.p-4(titulo="OpenOffice")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-3.col-6: img(src='@/assets/curso/11.jpg')
          .col-lg-10.col-md-9.col-6
            h4 OpenOffice
            p Esta <em>suite</em> es de opción libre, es un poco más reducida, pero con buena operatividad. Es compatible con Windows, iOS y GNU/Linux. Incluye Writer, Calc, Impress, Draw y Base.
      .tarjeta.color-acento-contenido--borde.bg-3-claro.p-4(titulo="iWork")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-3.col-6: img(src='@/assets/curso/11.jpg')
          .col-lg-10.col-md-9.col-6
            h4 iWork
            p Es el paquete privado de Apple. En los equipos de Apple, vienen instaladas, por defecto, estas herramientas: pages, Numbers y Keynote.
    p.mb-5 Es importante tener en cuenta lo siguiente:
    .tarjeta-amarilla.p-5(data-aos='zoom-in')
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span a
          p.mb-0 Cuando se crean documentos en una <em>suite</em>, se puede presentar la situación de incompatibilidad con otra <em>suite</em>; por ejemplo, si un documento de texto es creado en Word de Microsoft, al intentar abrirlo con Writer de Open Office, es probable que el programa no esté capacitado para ‘traducir’ al 100% el formato del texto que tiene el documento de Word. Una alternativa de las opciones por las que se puede optar es la de enviar en formato genérico, como sería un PDF.
        li 
          .lista-ol--cuadro__vineta
            span b
          p.mb-0 Las herramientas ofimáticas son fáciles de manejar, si el usuario maneja un nivel básico de conocimiento. No obstante, hay que tener en cuenta que algunas son herramientas complejas con muchas funciones y, por lo general, no se aprovechan en su totalidad debido al nivel de conocimiento del usuario. Es por esa razón que recomendamos realizar capacitaciones con este tipo de herramientas.
    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-1-claro
  background-color: #fff6e2
.bg-3-claro
  background-color: #ffe7e4 !important
.tabs-a__tab
  background-color: #e8e8e8
.tarjeta-amarilla
  background-color: #fff3d8
.tarjeta1
  .bloque-texto-g__texto
    // width: 70%
.tarjeta.color-acento-contenido--borde
  border-color: #ffcec9
</style>
