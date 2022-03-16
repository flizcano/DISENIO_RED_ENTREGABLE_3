<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Hoja electrónica


    p.mb-5(data-aos="fade") A continuación, encontrará la explicación sobre qué es una hoja de cálculo o electrónica y cómo se usa.

    SlyderD.tema-2.mb-3(:datos="datosSlyder", data-aos="fade-down")

    p(data-aos="fade") Para tener una comprensión más clara de la hoja de cálculo y su operatividad, lo invitamos a ver el video “Introducción a la hoja de cálculo”, que se encuentra en el material complementario.

    Separador



    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto: '<b>Hoja de cálculo o electrónica</b>',
        imagen: require('@/assets/curso/tema2-slider1.svg'),
      },
      {
        texto: '<b>Hoja de cálculo o electrónica</b>',
        imagen: require('@/assets/curso/tema2-slider2.svg'),
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

<style lang="sass"></style>
