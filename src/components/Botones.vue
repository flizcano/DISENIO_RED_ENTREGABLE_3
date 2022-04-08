<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-between
    .col-md-6.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/70.svg', alt='Estudio de mercados')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-4.col-lg-6(:style="{'z-index':'2'}")
      
      .tarjeta-botones.bg-acento-botones.p-3(v-if="selected === 0")
        .titulo-tarjeta
          h3.mb-0 01
          hr.mt-2
          p La normatividad ambiental es toda la legislación sean leyes, decretos o normas con las cuales el estado a través de las diferentes entidades ambientales regula los temas pertinentes a la protección y conservación del medio ambiente, en Colombia las entidades que emiten regulación en tema ambiental son en su orden jerárquico el Congreso de la República, el Ministerio del Medio Ambiente y Desarrollo Sostenible.
      .tarjeta-botones.bg-acento-botones.p-3(v-if="selected === 1")
        .titulo-tarjeta
          h3.mb-0 02
          hr.mt-2
          p Las Corporaciones Autónomas Regionales, el IDEAM (instituto de hidrología, meteorología y estudios ambientales), y las Secretarias de Ambiente de cada municipio, las normas que se emiten hacen parte de los sistemas de gestión ambiental de las organizaciones, todos los sistemas de gestión ambiental tienen un punto primordial y son las políticas y la normatividad es el fundamento de las políticas de gestión ambiental.
      .tarjeta-botones.bg-acento-botones.p-3(v-if="selected === 2")
        .titulo-tarjeta
          h3.mb-0 03
          hr.mt-2
          p El principio de la normatividad ambiental en Colombia se da en el art 8 de la constitución política nacional, artículo que refiere la obligatoriedad del estado y de las personas en la protección de las riquezas naturales y culturales de la nación, en al artículo 79 encontramos que la constitución política nacional relata que todas las personas tienen el derecho de gozar de un ambiente sano y que se debe garantizar la participación de las personas o comunidades en las decisiones que puedan afectarlo y en artículo 95 se registra la responsabilidad que cobija a todos los colombianos de hacer cumplir los anteriores artículos.
      .tarjeta-botones.bg-acento-botones.p-3(v-if="selected === 3")
        .titulo-tarjeta
          h3.mb-0 04
          hr.mt-2
          p En Colombia se cuenta con una amplia normatividad ambiental y sanitaria, estas pueden ser consultadas en el enlace que se registra en el material de apoyo. (Normatividad Ambiental y Sanitaria, 2021)




</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,

    botones: [
      {
        img: require('@/assets/curso/71.svg'),
        img_h: require('@/assets/curso/72.svg'),
        pos_x: '26%',
        pos_y: '10%',
        size: '25%',
      },
      {
        img: require('@/assets/curso/73.svg'),
        img_h: require('@/assets/curso/74.svg'),
        pos_x: '37%',
        pos_y: '55%',
        size: '25%',
      },
      {
        img: require('@/assets/curso/76.svg'),
        img_h: require('@/assets/curso/75.svg'),
        pos_x: '75%',
        pos_y: '2%',
        size: '25%',
      },
      {
        img: require('@/assets/curso/77.svg'),
        img_h: require('@/assets/curso/78.svg'),
        pos_x: '60%',
        pos_y: '65%',
        size: '25%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out

.tarjeta-botones
  z-index: 3
  display: block
  position: relative

@media (max-width: $bp-max-md)
  .tarjeta-botones:before
    display: none
.titulo-tarjeta
  h3
    position: relative
    color: $color-secundario
    font-size: 30px
  hr
    margin
    height: 8px
    background-color: $color-secundario
    width: 30%
    opacity: 1
</style>
