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


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1. Configuración de hoja de cálculo

    p.mb-2(data-aos="fade") La configuración de una hoja de cálculo consiste en realizar la parametrización del documento para digitar la información y después procesarla para gestionar el resultado. Ejemplo: 
    
    SlyderC.tema-2-1.mb-5(:datos="datosSlyder1", data-aos="fade-down")




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
    datosSlyder1: [
      {
        texto:
          'Se requiere conocer la suma de los gastos de caja menor de la semana del lunes 8 de noviembre al viernes 12 de noviembre, este es un cálculo básico, por tanto se debe parametrizar la hoja, esto se hace registrando en una celda información de texto con la fecha del registro y en la celda continua  el valor pagado o desembolso realizado, con el soporte de pago, una vez digitalizada la información, se aplica la herramienta sumatoria y obtendremos un resultado rápido, preciso y confiable, es de anotar que para que el resultado cumpla los anteriores parámetros, el ingreso de la información.',
        imagen: require('@/assets/curso/tema2-1-slide1.png'),
      },
      {
        texto:
          'Es decir, la digitalización debe ser datos precisos, a continuación se presenta secuencia de imágenes del desarrollo del ejemplo: <br> 1.Crear la hoja de Excel con el registro.  Se hace haciendo Clic en la parte superior de la barra de herramientas, la opción guardar, para el caso se crea una carpeta denominada Gastos de Caja Menor, esta se crea dando clic derecho crear carpeta y en el espacio inferior de la pantalla se registra el nombre, luego clic sobre el nombre de la carpeta y allí ya se registra el archivo Gastos de Caja Menor Noviembre 8 al 12, de tal manera que ya se creó la hoja de cálculo digitar la información.',
        imagen: require('@/assets/curso/tema2-1-slide2.png'),
      },
      {
        texto:
          '2. Una vez digitalizada la información, se ubica el curso sobre la herramienta y como observamos se enmarca los registros que vamos a sumas, se presiona ENTER. ',
        imagen: require('@/assets/curso/tema2-1-slide3.png'),
      },
      {
        texto:
          '3. Finalmente y como se observa en la imagen, se obtiene el resultado de la operación.',
        imagen: require('@/assets/curso/tema2-1-slide4.png'),
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
