<template lang="pug">
.slyder-c
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-c__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .slyder-c__imagen
        figure.slyder-c__img
          img(:src='item.imagen', :alt='item.leyendaImagen')

      .slyder-c__content
        .slyder-c__content__body.border-r10.bg-2.mb-3
          .row.justify-content-center
            .col-md-10.px-md-0.px-4.py-4
              p.mb-0(v-html="item.texto")

        .slyder-c__content__header.mb-4
          .row.justify-content-end
            .col-auto
              .slyder__action
                .slyder__pagination {{index+1}}/{{datos.length}}
                a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
                  i.fas.fa-angle-left
                a.slyder__btn(
                  v-if="index != datos.length -1"
                  @click="selected = getId(index +1)"
                  @mouseover="mostrarIndicador = false"
                )
                  i.fas.fa-angle-right
                  .indicador__container.indicador--left(v-if="mostrarIndicador && index === 0")
                    .indicador--click.indicador--sm  

</template>

<script>
import slyderMixins from '../../node_modules/ecored-base-pkg/src/mixins/slyderMixins'
import ScrollHorizontal from '../../node_modules/ecored-base-pkg/src/components/plantilla/ScrollHorizontal'
export default {
  name: 'SlyderC2',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass">
.slyder-c, .slyder-c__content
  position: relative

.slyder-c__imagen
  z-index: 1
figure.slyder-c__img
  z-index: 1
.slyder-c__img img
  z-index: 1
.slyder-c__content
  margin-top: -40px
  z-index: 99
  @media (max-width: 992px)
    margin-top: -10px
.slyder-c__content__body
  z-index: 99
</style>
