<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade") La ofimática es un <em>software</em> o aplicación que sirve para las labores de la oficina de la casa en fin donde se requiera. Otra definición puede ser el equipamiento de <em>hardware</em> y <em>software</em> usado para crear, coleccionar, almacenar, manipular y transmitir digitalmente  información necesaria en una oficina para realizar tareas y lograr objetivos tanto desde lo personal como en lo organizacional.
      br
      br
      |A continuación, el mapa conceptual refuerza el tema de manejo de bases de datos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/sintesis.svg', alt='Texto que describa la imagen')


    p.mb-5(data-aos="fade") El video refiere síntesis de lo que es ofimática, usos, así como aplicabilidad en muchos campos incluidos la protección del medio ambiente.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Sintesis',
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
