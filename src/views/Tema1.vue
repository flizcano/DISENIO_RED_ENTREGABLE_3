<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Herramientas ofimáticas


    .row.justify-content-center.align-items-center.mb-4.imgs-flotantes
      .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
        img(src='@/assets/curso/tema1-img1.svg', alt='Imagen decorativa')
        img.img-flotante(src='@/assets/curso/sobre-flotante.svg', alt='Imagen decorativa')
      .col-md-6(data-aos="fade-left")
        p Las herramientas ofimáticas son el conjunto de programas o herramientas de sistemas que son utilizados por las organizaciones y que les permite gestionar y optimizar las funciones relacionadas con la operación o funcionamiento de las oficinas, es decir, las herramientas permiten crear, procesar, modificar, organizar, imprimir e incluso escanear documentos que se generan diariamente y que dan lectura de la operación y funcionamiento de la organización. 


    p.mb-5(data-aos="fade") Como herramientas ofimáticas se tiene:    
   
    .row.mb-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-flip1.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema1-flip1.png', alt='Imagen decorativa')
              h4.mb-0 Es el programa de informática que tiene como función permitir la creación o modificación de documentos de texto escritos a través del equipo de cómputo, como procesadores de texto se tiene el Word Perfect y Microsoft Word.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-flip2.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema1-flip2.png', alt='Imagen decorativa')
              h4.mb-0 Este grupo de herramientas es amplio y permiten crear exposiciones o presentaciones multimedia, como herramientas de presentación se cuenta el PowerPoint, Prezi, Keynote, Google Slides, Glogster.
      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenid
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-flip3.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema1-flip3.png', alt='Imagen decorativa')
              h4.mb-0 Documento que permite gestionar una tabla de valores de forma organizada la cual está distribuida en filas y columnas, es utilizada dentro de muchas otras herramientas para la gestión administrativa y contable. 

    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-flip4.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema1-flip4.png', alt='Imagen decorativa')
              h4.mb-0 Es la compilación de información de forma organizada, se almacenan de forma electrónica en el sistema informático, y generalmente es controlada por el sistema de gestión de las bases de datos.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1-flip5.svg')})`}")
            .tarjeta-flip__contenido.p-4
              img.mb-3(src='@/assets/curso/tema1-flip5.png', alt='Imagen decorativa')
              h4.mb-0 Herramienta del ordenador que permite crear, enviar y recibir mensajes de forma electrónica, el Outlook, Outlook Express, Thunderbird, Courrier, son los programas más conocidos de correo electrónico.




    p(data-aos="fade") También se cuenta como herramientas de ofimática los softwares de programación, impresoras, calculadora, agendas, programas de correo de voz, programas de mensajería instantánea, herramientas de reconocimiento de voz; todo el paquete que contiene las múltiples herramientas ofimáticas se denomina Suite Ofimática.

    p(data-aos="fade") Para ampliar la información, lo invitamos a ver el video “Herramientas ofimáticas”, que se encuentra en el material complementario.




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

<style lang="sass"></style>
