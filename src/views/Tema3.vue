<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Normatividad ambiental 


    p.mb-5(data-aos="fade") La normatividad es de gran importancia en cualquier aspecto de estudio e investigación, por lo tanto le invitamos a explorar el siguiente recurso con el fin de mejorar sus conocimientos en normatividad ambiental.  
    
    figure.mb-5
      img(src='@/assets/curso/tema3-infog.svg', alt='Normatividad ambiental')

    p.mb-0(data-aos="fade") Para ampliar la información, lo invitamos a ver el video “Introducción a la Normatividad Ambiental en Colombia”, que se encuentra en el material complementario.
    p.mb-5(data-aos="fade") Continuando con la temática de normatividad ambiental, se le sugiere visualizar el siguiente recurso con el fin de reforzar lo aprendido.

    SlyderE.tema-3.border-r10.mb-5.hover-columna(indicadores="derecha")
      .row.justify-content-center.align-items-center.py-5.px-4.px-md-0.bg-1
        .col-md-5.mb-4.mb-md-0
          img(src='@/assets/curso/tema3-slide1.svg', alt='Texto que describa la imagen', style="width: 410px; margin: 0 auto;")
        .col-md-5
          p.mb-0 Las organizaciones de servicios postales y transporte de mercancías también deben velar por la conservación del medio ambiente, por tanto se debe establecer direccionamientos o políticas que permitan dar un uso adecuado en el manejo de los residuos que se generan en la operación, de tal manera que los materiales o elementos que usen para la operación puedan ser reutilizables en un alto porcentaje o renovables en su mayoría o se puedan recuperar en el corto plazo, por ejemplo el cartón que usan para los embalajes, está elaborado con material reciclable. 
      .row.justify-content-center.py-5.px-4.px-md-0.bg-1
        .col-md-3
          p.mb-0 Los residuos que se generan en empresas de servicios postales y transporte de mercancías son residuos como cartón, plástico, latas de aluminio, tonner, lapiceros, llantas y residuos orgánicos y las empresas deben generar lineamientos para dar el adecuado uso a dichos residuos, sin embargo y de forma específica.
        .col-md-4.img-absolute.mb-4.mb-md-0
          img(src='@/assets/curso/tema3-slide2.png', alt='Texto que describa la imagen')
        .col-md-4.col-xxl-3
          p.mb-0 En el proceso de recolección y distribución de mercancías se identifican impactos potenciales como contaminación del aire y el suelo, uso de recursos derivados de la madera, variación del relleno sanitario con los desechos generados, como plan de mitigación se establecen proceso de capacitación para separación de residuos en fuente, el uso de estibas plásticas, señalización de manejo adecuado de residuos y ubicación de puntos ecológicos y obtención de licencias ambientales para la disposición fina de residuos.
      .row.justify-content-center.align-items-center.py-5.px-4.px-md-0.hover-columna.bg-1
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema3-slide3.svg', alt='Texto que describa la imagen', style="width: 340px; margin: 0 auto;")
        .col-md-6
          p.mb-0 En referencia al uso del papel en oficinas, esta se denomina política de cero papel y tiene como objetivo motivar el uso de menos papel en el desarrollo de las actividades por parte de los colaboradores, además se establecen políticas para la generación de impresos como por ejemplo: márgenes de papel, tipo de letras, tamaño de letras, impresiones a doble cara, uso de papel reciclado y todas las demás herramientas que los paquetes de software generan para hacer un uso adecuado, racional y responsable frente al uso del papel y el aporte de cada uno a la protección y conservación del medio ambiente. (Solano Hernández, 2018)







</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
