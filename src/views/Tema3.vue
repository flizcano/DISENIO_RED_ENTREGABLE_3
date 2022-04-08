<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Normatividad ambiental 
    p.mb-5 La normatividad es de gran importancia en cualquier aspecto de estudio e investigación, por lo tanto le invitamos a explorar el siguiente recurso con el fin de mejorar sus conocimientos en normatividad ambiental.
    .botones-hover.mb-4.p-5
      .imagen-float__1: img(src='@/assets/curso/float1.png')
      .imagen-float__2: img(src='@/assets/curso/float6.svg')
      .imagen-float__3: img(src='@/assets/curso/float2.png')
      Botones(data-aos="fade-down")
    .tarjeta.bg-1-claro.p-3.mb-5.ignore-p.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-lg-1
          img(src="@/assets/curso/10.svg")
        .col-9
          p.mb-0 Para ampliar la información, lo invitamos a ver el video <b>“Introducción a la Normatividad Ambiental en Colombia”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=XPeC4Fw_T10" target="_blank")
            span Ver mas
            i.fas.fa-file-download 
    p.mb-5 Continuando con la temática de normatividad ambiental, se le sugiere visualizar el siguiente recurso con el fin de reforzar lo aprendido.
    SlyderB.mb-5(:datos="datosSlyder")






</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema3',
  components: {
    Botones,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Las organizaciones de servicios postales y transporte de mercancías también deben velar por la conservación del medio ambiente, por tanto se debe establecer direccionamientos o políticas que permitan dar un uso adecuado en el manejo de los residuos que se generan en la operación, de tal manera que los materiales o elementos que usen para la operación puedan ser reutilizables en un alto porcentaje o renovables en su mayoría o se puedan recuperar en el corto plazo, por ejemplo el cartón que usan para los embalajes, está elaborado con material reciclable. ',
        imagen: require('@/assets/curso/57.jpg'),
      },
      {
        titulo: '',
        texto:
          'Los residuos que se generan en empresas de servicios postales y transporte de mercancías son residuos como cartón, plástico, latas de aluminio, tonner, lapiceros, llantas y residuos orgánicos y las empresas deben generar lineamientos para dar el adecuado uso a dichos residuos, sin embargo y de forma específica.',
        imagen: require('@/assets/curso/58.jpg'),
      },
      {
        titulo: '',
        texto:
          'En el proceso de recolección y distribución de mercancías se identifican impactos potenciales como contaminación del aire y el suelo, uso de recursos derivados de la madera, variación del relleno sanitario con los desechos generados, como plan de mitigación se establecen proceso de capacitación para separación de residuos en fuente, el uso de estibas plásticas, señalización de manejo adecuado de residuos y ubicación de puntos ecológicos y obtención de licencias ambientales para la disposición fina de residuos.',
        imagen: require('@/assets/curso/59.jpg'),
      },
      {
        titulo: '',
        texto:
          'En referencia al uso del papel en oficinas, esta se denomina política de cero papel y tiene como objetivo motivar el uso de menos papel en el desarrollo de las actividades por parte de los colaboradores, además se establecen políticas para la generación de impresos como por ejemplo: márgenes de papel, tipo de letras, tamaño de letras, impresiones a doble cara, uso de papel reciclado y todas las demás herramientas que los paquetes de software generan para hacer un uso adecuado, racional y responsable frente al uso del papel y el aporte de cada uno a la protección y conservación del medio ambiente. (Solano Hernández, 2018)',
        imagen: require('@/assets/curso/60.jpg'),
      },
    ],
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
.botones-hover
  background-image: url(../assets/curso/fondo-claro.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  border-radius: 20px
  position: relative
  .imagen-float
    &__1
      position: absolute
      animation: float 4s infinite alternate
      top: -10%
      left: 2%
      width: 125px
    &__2
      position: absolute
      animation: float 4s infinite alternate
      bottom: 0%
      right: 2%
      width: 100px
    &__3
      position: absolute
      animation: float 4s infinite alternate
      bottom: 0%
      right: 55%
      width: 70px
</style>
