<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1 Normativa de seguridad
    p.mb-5 La Constitución Política de Colombia en el artículo 15 hace referencia a:
    .row.mb-5.g-5.aling-items-center.justify-content-center
      .col-lg-4: img(src='@/assets/curso/61.png')
      .col-lg-7
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Todas las personas tienen derecho a su intimidad personal y a su buen nombre y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Constitución Política de Colombia, Art 15, 2021
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-2.col-md-3.col-sm-4: img(src='@/assets/curso/62.svg').mb-3.mb-lg-0
      .col-lg-10.col-md-9.col-sm-8
        p También encontramos dentro de la normatividad de seguridad de la información, la ley 1581 de octubre de 2012, ley mediante la cual el Congreso de la República reglamentó en Colombia, las disposiciones para la protección de datos personales, posteriormente se anexo el decreto 1377 de 2013, en el cual se establece un reglamento parcial de la ley 1581 de 2012 frente a la protección de datos personales. (Ministerio de Comercio Industria y Turismo, 2013) y el decreto 1074 de 2015 en el artículo 25 incluye reglamentación a la ley 1581 de 2012 frente a la protección de datos personales. (Ministerio de Comercio Industria y Turismo, 2015)
    .contenedor-imagen-up.p-5.my-5
      img(src='@/assets/curso/63.svg')
      .row.mb-5.g-5.aling-items-center.justify-content-end
        .col-xl-8
          h1.fw-normal.w-75 Los datos personales es la información de un individuo
          p.mb-0 La cual es utilizada para identificarle, dichas bases de datos pueden ser físicas o digitales y dentro de los datos personales se maneja información como: edad, nombre, documento de identidad, números telefónicos de contacto, correo electrónico, número de seguridad social, dirección de domicilio, entre otros.
    .row.mb-5
      .col-lg-4
        .tarjeta.color-primario.rounded-0.p-5.h-100
          img(src='@/assets/curso/64.svg' style='width: 122px').mb-4 
          p Las empresas de servicios postales y transporte de mercancías deben dar cumplimiento a la normativa de protección de datos y en la línea de la responsabilidad que les asiste, deben garantizar el derecho constitucional que tienen las personas en el manejo del tratamiento de datos personales, ya sea en bases digitales o físicas. 
      .col-lg-4
        .tarjeta.color-primario.rounded-0.p-5.h-100
          img(src='@/assets/curso/64.svg' style='width: 122px').mb-4 
          p La política que las organizaciones establezcan para la protección de datos debe contener un amplio ámbito de aplicación, deben cobijar la responsabilidad del manejo de la información por parte de los colaboradores, los contratistas, los operadores, los terceros que presten servicios a la empresa y toda persona natural o jurídica que, para realizar las labores contratadas por la empresa, tenga acceso a la información.
      .col-lg-4
        .tarjeta.color-primario.rounded-0.p-5.h-100
          img(src='@/assets/curso/64.svg' style='width: 122px').mb-4 
          p La protección de datos debe se enmarca en categorías, dentro de las categorías se tienen datos sensibles, derechos de los niños, niñas y adolescentes, autorización especial de datos de personas sensibles.
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-2.col-md-3.col-sm-4: img(src='@/assets/curso/62.svg').mb-3.mb-lg-0
      .col-lg-10.col-md-9.col-sm-8
        p También encontramos dentro de la normatividad de seguridad de la información
          br
          br
          |Los datos sensibles son los datos que pueden llegar a afectar la intimidad del titular, el uso indebido de la información puede generar riesgos e incluso discriminación, la revelación de datos del titular como pertenencia organizaciones, sindicatos, agremiaciones, orientación política, datos relativos a la salud, datos biométricos son datos de alta sensibilidad y que se debe garantizar la protección de estos en pro de la garantía del bienestar del propietario de estos.
    SlyderA.slyder-rojo-2.mb-5
      .row
        .col-md-4
          figure
            img(src='@/assets/curso/65.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          h4 Derechos de Niñas, Niños y Adolescentes, el tratamiento de datos de este grupo poblacional, está prohibido, se exceptúa cuando el tratamiento cumpla con requisitos o parámetros como: 
          p a. Cuando los datos respondan al interés superior de los niños, niñas y adolescentes, en un ámbito de respeto.  Entiéndase como interés superior la obligatoriedad de todas las personas a garantizar la integralidad y los derechos humanos universales, interdependientes y prevalentes de los niños, niñas y adolescentes.
            br
            br
            |b. Cuando se aseguren los derechos fundamentales.
      .row
        .col-md-4
          figure
            img(src='@/assets/curso/66.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          h4 En el tratamiento de los datos sensibles se tiene algunas excepciones como son:
          p a. El titular entrega autorización explicita en el tratamiento de los datos.          
            br
            |b. Cuando los datos son requeridos en procesos judiciales o para reconocimientos.
            br
            |c. Los datos tengan una finalidad estadística, científica o histórica.
            br
            |d. Los datos son necesarios para salvaguardar el interés del titular y este se encuentra incapacitado sea física o jurídicamente, para este se requiere autorización del representante legal.
      .row
        .col-md-4
          figure
            img(src='@/assets/curso/67.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es de anotar que para el tratamiento de datos de los niños, niñas y adolescentes debe contar con la autorización del representante legal y el cumplimiento de otros parámetros definidos por la ley según la necesidad o requerimiento.
      .row
        .col-md-4
          figure
            img(src='@/assets/curso/68.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p La autorización especial de datos personales sensibles refiere a la implementación y uso de los diferentes medios disponibles para la obtención de la autorización de información de los titulares, es decir el manejo de los datos sensibles; no obstante, la ley 1581 de 2012, los decretos y normas reglamentarias, faculta el manejo de los datos, por tanto, no se tiene obligatoriedad de otorgar autorización para el tratamiento de los datos sensibles. 
    .row.mb-5
      .col-lg-4: img(src='@/assets/curso/69.png', alt='Texto que describa la imagen')
      .col-lg-8
        p <b>El fin de la política de protección de datos</b> es la de estandarizar procesos de recolección y tratamiento de datos personales según la normativa establecida, así como la de crear esquemas organizados que salvaguarden información privada e información sensible de los titulares. 
        br
        br
        | <b>Todo titular de la información tiene un derecho y unas condiciones de legalidad para el tratamiento de los datos</b>, el habeas data, este derecho de tipo constitucional art. 15 CPN  que como se referenció antes es el derecho a la intimidad familiar, personal y al buen nombre, así como al estado como ente garantista de que el artículo se cumpla, de tal forma que el propietario de la información puede conocer, actualizar, rectificar, modificar, la información recolectada, en archivos de entidades públicas y privadas o en bancos de datos, de tal manera que la organización debe generar herramientas para que el propietario de la información pueda consultar de forma gratuita los datos por lo menos una vez al mes y cuando se presenten modificaciones a las política de tratamiento de datos.
    .tarjeta.bg-1-claro.p-3.mb-5.ignore-p.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-lg-1
          img(src="@/assets/curso/10.svg")
        .col-9
          p.mb-0 En el video <b>“Normativa de Seguridad”</b>, que se encuentra en el material complementario, encontrará información sobre la legislación en protección de datos personales en Colombia.  
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=bvAH9ppBbbE" target="_blank")
            span Ver mas
            i.fas.fa-file-download 



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
.bloque-texto-d.color-secundario:before
  background-color: $color-primario
  opacity: 0.30
.contenedor-imagen-up
  position: relative
  img
    position: absolute
    width: 400px
    left: 0
    top: -5%
    @media (max-width: $bp-max-lg)
      display: none


  background-color: #fff7e6
.slyder-rojo-2
  background-color: #ffe7e4
  padding: 50px 100px
  .slyder-a__btn--sigt
    right: 4%
    background-color: #f08b7d
    background-image: url(../assets/curso/flecha-blanca.svg)
  .slyder-a__btn--atrs
    left: 4%
    background-color: #f08b7d
    background-image: url(../assets/curso/flecha-blanca.svg)
</style>
