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
    
    SlyderC2.tema-2-1.mb-2(:datos="datosSlyder1", data-aos="fade-down")

    p(data-aos="fade") Para ampliar la información sobre la configuración de una hoja de cálculo, lo invitamos a ver el video “Configuración hoja de cálculo”, que se encuentra en el material complementario.

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2 Barra de fórmulas

    p.mb-4(data-aos="fade") En el siguiente recurso usted descubrirá qué es la barra de fórmulas y cómo utilizarla.

    TabsC.color-acento-contenido.tema2-2.mb-5
      .row.justify-content-center.py-3.py-md-4(titulo="Asocia una celda con otra")
        .col-md-10
          p.mb-4 En la barra de fórmulas se asocia una celda con otra, esto quiere decir que si lo que se pretende es realizar una operación matemática entre dos valores numéricos por ejemplo 3*4=12 el tres y el cuatro deben estar en celdas diferentes de la siguiente manera.
          figure
            img(src='@/assets/curso/tema2-2-tab1.png', alt='Asocia una celda con otra')
      .row.justify-content-center.py-3.py-md-4(titulo="Insertar la operación")
        .col-md-10
          p.mb-4 Luego se debe insertar la operación en la celda C1 de la siguiente manera
          figure
            img(src='@/assets/curso/tema2-2-tab2.png', alt='Insertar la operación')
      .row.justify-content-center.py-3.py-md-4(titulo="Obtener el resultado")
        .col-md-10
          p.mb-3 Nótese que los colores de los textos de la fórmula corresponden al color de la celda a la cual se asocia la fórmula.
          p.mb-4 Luego se presiona ENTER y se obtiene el resultado. 
          figure
            img(src='@/assets/curso/tema2-2-tab3.png', alt='Obtener el resultado')            

    p.mb-5(data-aos="fade") En el vídeo “Hoja de Cálculo (Excel) Conceptos Básicos”, que se encuentra en el material complementario, se puede apreciar con claridad la ubicación de los componentes de la hoja de cálculo que le permitirán ubicar las diferentes zonas de la hoja de cálculo, así podrá escribir en el lugar adecuado los valores para que realice las operaciones con los cuales se obtengan los resultados esperados.


    // 2.2.1
    h3.titulo-tercero.mb-4(data-aos="fade-right") Fórmulas básicas y lógicas

    p.mb-4(data-aos="fade") El siguiente recurso le dará un recorrido por las fórmulas básicas y lógicas de Excel.

    SlyderA.mb-5.tema2-2-1(data-aos="fade-down")
      .row.justify-content-center
        .col-md-10.bg-2.py-5.px-4.px-md-0
          .row.justify-content-center.align-items-center
            .col-md-10.mb-3
              h1.text-center Fórmulas básicas y lógicas
            .col-md-6 
              img(src='@/assets/curso/tema2-2-1-slide1.png', alt='Imagen decorativa')
      .row.justify-content-center
        .col-md-10.bg-2.py-5.px-4.px-md-0
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p Las operaciones que se pueden realizar en Excel son múltiples y variadas, se pueden hacer operaciones sencillas hasta operaciones muy complejas. 
            .col-md-5
              img(src='@/assets/curso/tema2-2-1-slide2.svg', alt='Imagen decorativa')
      .row.justify-content-center
        .col-md-10.bg-2.py-5.px-4.px-md-0
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p Es importante que antes de iniciar la construcción de una operación tenga claro cuál es el resultado que pretende obtener, se recomienda que utilice papel y lápiz antes de ingresar la formula en Excel.
              p Básicamente una fórmula que se quiera ingresar a la hoja de cálculo tiene la siguiente estructura:
              p X + y = z
            .col-md-5
              img(src='@/assets/curso/tema2-2-1-slide3.svg', alt='Imagen decorativa')
      .row.justify-content-center
        .col-md-10.bg-2.py-5.px-4.px-md-0
          .row.justify-content-center.align-items-end.hover-columna
            .col-md-4.mb-4.mb-md-0
              p.mb-0 Excel calculará el valor que está posterior al igual, los otros dos términos deberán ser ingresados por el usuario.
              p Por lo tanto, si lo que se quiere encontrar es la sumatoria entre 3 y 4 la expresión algebraica es 
                br
                | 3 + 4 = z
              p El valor que se calculará será el de la incógnita “Z”
              p Cada valor debe ser ingresado en una celda independiente, por ejemplo
            .col-md-7
              .img-absoluta
                img(src='@/assets/curso/tema2-2-1-slide4.svg', alt='Imagen decorativa')
              .texto-absoluto
                p.mb-0 Donde cada incógnita hace referencia a un posible número, la primera incógnita es un valor numérico cualquiera, luego aparece el símbolo de la operación, luego el segundo valor, el símbolo del igual y finalmente el resultado de la operación entre dos términos. 
      .row.justify-content-center
        .col-md-10.bg-2.py-5.px-4.px-md-0
          .row.justify-content-center.align-items-center.hover-columna
            .col-md-4.mb-4.mb-md-0
              p El símbolo de la operación no se escribe en una celda independiente, debe de escribirse en la barra de fórmulas. La fórmula debe escribirse en la celda C1, así se obtiene el resultado con la siguiente estructura:
              img(src='@/assets/curso/tema2-2-1-slide5-1.png', alt='Imagen decorativa')
            .col-md-7
              img(src='@/assets/curso/tema2-2-1-slide5-2.svg', alt='Imagen decorativa')

    p(data-aos="fade") Para ampliar la información sobre la manera como se pueden configurar las operaciones básicas, lo invitamos a ver el video “Fórmulas básicas en Excel”, que se encuentra en el material complementario.

    p.mb-4(data-aos="fade") Ahora, sigamos aprendiendo de las diferentes fórmulas de trabajo en hojas de cálculo.

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-acento-botones.p-5   
        h2.text-center.mb-5 La base de las funciones lógicas es el manejo de funciones algebraicas de la forma:
        p.text-center F(x) = 2x
        p.text-center Estas funciones tienen la característica que tienen una variable dependiente y una independiente, esto quiere decir, que se debe encontrar el resultado de multiplicar el número 2, que es la variable dependiente, por cualquier número x, la cual es la variable independiente.
      .col-md.tarjeta.color-acento-contenido.text-white.p-5          
        h2.text-center.mb-5 X puede tomar cualquier número
        p.text-center.mb-md-5 Pero el número 2 se debe de conservar, así por ejemplo podemos ver la operación en la siguiente tabla.
        img(src='@/assets/curso/tema2-2-1-tarj2-tabla1.svg', alt='Tabla')

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.p-5   
        h2.text-center.mb-5 Se puede notar que el número 2 siempre se repite, el que cambia es el valor de x
        img(src='@/assets/curso/tema2-2-1-tarj3-tabla2.svg', alt='Tabla')
      .col-md.tarjeta.color-secundario.text-white.p-5          
        h2.text-center.mb-5 La anterior es una función sencilla 
        p.text-center.mb-md-4 Pero se pueden hacer funciones muy complejas. Lo importante es que la parametrización de la fórmula que se ingrese sea correcta. Por ejemplo, deseo encontrar el resultado de varias multiplicaciones.
        p.text-center F(x) = 2x + 3x + 4x

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-3.text-white.p-5   
        h2.text-center.mb-5 La forma de resolver esta fórmula
        p.text-center Es que se deben de hacer los cálculos de manera independiente, de la siguiente forma
        p.text-center.mb-0 F(x) = (2*2) + (3*2) + (4*2) 	
        p.text-center (1) 
        p.text-center Nótese que el valor de X debe ser siempre el mismo, en este caso. 
      .col-md.tarjeta.bg-4.text-white.p-5          
        h2.text-center.mb-5 Si la forma de la función es 
        p.text-center.mb-0 F(x) = 2x + 3y + 4z
        p.text-center Los valores de las variables deben de cambiar de la siguiente manera
        p.text-center.mb-0 F(x) = (2*2) + (3*5) + (4*7)	
        p.text-center (2)
        p.text-center Por eso es importante que, antes de ingresar los valores a la hoja de cálculo, realice la formulación usando papel y lápiz.

    p.mb-4(data-aos="fade") Otro punto importante es que cada operación debe ser ingresada entre paréntesis para que sea identificada por la hoja electrónica adecuadamente. Una de las formas de ingresar los valores es la siguiente:

    h4.mb-4(data-aos="fade-right") En (1)
      br 
      | Ingreso de valores 
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema2-2-1-img1.png', alt='Ingreso de valores')

    h4.mb-4(data-aos="fade-right") En (2)
      br 
      | Combinación de operaciones
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema2-2-1-img2.png', alt='Combinación de operaciones')

    p.mb-4(data-aos="fade") Pueden realizarse combinaciones de operaciones, lo importante es ubicar los paréntesis de la forma adecuada para que se indique, que primero se deben realizar las operaciones entre paréntesis y luego realizar la operación final.

    h4.mb-0(data-aos="fade-right") Funciones Lógicas de Excel
    p.mb-5(data-aos="fade") Las funciones lógicas tienen la característica que pueden realizar cálculos en datos agrupados, un dato agrupado son valores que forman parte de una columna que tiene un título y todos los valores que se encuentran debajo del título tienen relación, por ejemplo: 


    h4.mb-0(data-aos="fade-right") Figura 1
    p.mb-4(data-aos="fade") Ejemplo funciones lógicas de Excel

    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/tema2-2-1-fig1.png', alt='Ejemplo funciones lógicas de Excel')

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-md-9
        ol.lista-ol--cuadro
          li.mb-4
            .lista-ol--cuadro__vineta
              span 1
            | Nótese que cada columna tiene un nombre y los valores que están debajo del título están relacionados.
          li.mb-4 
            .lista-ol--cuadro__vineta
              span 2
            | Las fórmulas lógicas sólo se pueden aplicar a datos agrupados para que el resultado que se obtenga sea lógico y útil.
          li.mb-4
            .lista-ol--cuadro__vineta
              span 3
            | Excel cuenta con más de 300 fórmulas lógicas para el tratamiento de datos y su principal función es obtener resultados que permitan tomar decisiones.
          li.mb-4
            .lista-ol--cuadro__vineta
              span 4
            | Para acceder a las opciones de fórmulas lógicas, se debe de dar clic en la barra de fórmulas en el ícono. 


    h4.mb-0(data-aos="fade-right") Figura 2
    p.mb-4(data-aos="fade") Ícono de fórmulas lógicas

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema2-2-1-fig2.png', alt='Ícono de fórmulas lógicas')

    p.mb-5(data-aos="fade") Se desplegará un cuadro de opciones de la siguiente manera:

    h4.mb-0(data-aos="fade-right") Figura 3
    p.mb-4(data-aos="fade") Buscador de funciones

    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema2-2-1-fig3.png', alt='Ejemplo funciones lógicas de Excel')

    p.mb-5(data-aos="fade") Para observar el funcionamiento de las funciones lógicas más utilizadas, lo invitamos a ver el video “Cómo hacer funciones lógicas en Excel”, que se encuentra en el material complementario:


    // 2.2.2
    h3.titulo-tercero.mb-4(data-aos="fade-right") Gráficos y Tablas dinámicas

    p.mb-4(data-aos="fade") Le invitamos a ver el siguiente recurso, donde conocerá los gráficos y las tablas dinámicas.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade") Para ampliar la información sobre la configuración de una tabla dinámica, lo invitamos a ver el video “Crear tablas dinámicas en Excel”, que se encuentra en el material complementario. 

    p(data-aos="fade") Y complemente la información explorando el siguiente recurso.

    SlyderC3.tema2-2-2(:datos="datosSlyder2")

    p.mb-5(data-aos="fade") Para ampliar la información sobre la construcción de gráficos, lo invitamos a ver el video “Crear GRÁFICOS estadísticos. Introducir datos en Excel y crear gráficas”, que se encuentra en el material complementario. 


    // 2.2.3
    h3.titulo-tercero.mb-4(data-aos="fade-right") Relación y vínculos entre hojas y libros

    p.mb-4(data-aos="fade") El siguiente recurso muestra la relación  y vínculos entre hojas y libros, con el fin de mejorar la organización.

    .row.tema2-2-3.justify-content-center.d-flex.mb-4
      .col-md-5.border-r10.bg-acento-botones.text-white.py-4.px-3.px-md-4.mx-2.mb-4.mb-md-3.h-342(data-aos="fade-right")
        h4 Relación y vínculos entre hojas y libros
        p.mb-0 Los datos en una base de datos cobran vida cuando se relacionan con otros datos de otras bases de datos diferentes a la principal pero que se complementan.
      .col-md-5.border-r10.bg-acento-botones.text-white.py-4.px-3.px-md-4.mx-2.mb-4.mb-md-3.h-342(data-aos="fade-left")
        h4 En muchos casos en las empresas diferentes áreas generan bases de datos que se enfocan en su función empresarial. 
        p.mb-0 En ese contexto es necesario tener presente que en la administración moderna todas las empresas deben tener enfoques sistémicos donde todo está relacionado. Si no se tiene presente que la interacción de las áreas es inherente al funcionamiento de la organización, dicha organización está condenada al fracaso una vez que no está implementando procesos de mejora continua que busquen el mejoramiento de la competitividad.

      .col-md-5.border-r10.bg-acento-botones.text-white.py-4.px-3.px-md-4.mx-2.mb-4.mb-md-3.h-342(data-aos="fade-right")
        h4 Es en ese contexto que la relación de las áreas se ve evidenciada cuando las bases de datos se pueden relacionar. 
        p.mb-0 Para poder hacer esa asociación se debe de tener un dato en común, por lo general se usa el número de identificación personal o empresarial y partiendo de ese dato clave se pueden relacionar las bases de datos.
      .col-md-5.border-r10.bg-acento-botones.text-white.py-4.px-3.px-md-4.mx-2.mb-4.mb-md-3.h-342(data-aos="fade-left")
        h4 En el capítulo anterior se trató el tema de las funciones lógicas.
        p.mb-0 la función BUSCARV permite buscar en una base de datos alterna un dato que se encuentra en la base de datos principal y asociar una base de datos con otra.

      .col-md-10.border-r10.bg-acento-botones.text-white.py-4.px-3.px-md-4.mb-4.mb-md-3(data-aos="fade-down")
        h4 También es importante 
        p.mb-0 Generar enlaces de consulta dentro de la misma base de datos o que lleve a una dirección WEB. Así se permite complementar la información y ampliar un concepto o soportar un dato.

    p.mb-5(data-aos="fade") Para ampliar la información, lo invitamos a ver el video “Cómo enlazar o vincular celdas entre diferentes hojas”, que se encuentra en el material complementario.


    // 2.2.4
    h3.titulo-tercero.mb-4(data-aos="fade-right") Dashboard

    p.mb-5(data-aos="fade") Los tableros inteligentes son herramientas de ayuda en la creación y propagación de la información, explore el siguiente recurso con el fin de conocer más acerca de ellos.

    #MapaGroup01.mb-4.tema2-2-4(data-aos="fade-down")
      .row.justify-content-center
        .col-md-6.hover-columna
          .row.justify-content-center.align-items-center.botones
            .col-md-3.col-4
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
                img.ChangeSRC01(src='@/assets/curso/tema2-2-4-btn1.svg', alt='botón 1')
            .col-md-3.col-4.absoluta
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2')(@mouseover="mostrarIndicador = false")
                .indicador--click(v-if="mostrarIndicador")
                img.ChangeSRC02(src='@/assets/curso/tema2-2-4-btn2.svg', alt='botón 2' )
            .col-md-3.col-4
              .tarjeta.btn-grupo.mb-4(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='false' aria-controls='.multi-collapse2')
                img.ChangeSRC03(src='@/assets/curso/tema2-2-4-btn3.svg', alt='botón 3' )
          .row.fondo
            .fondo-botones
              img(src='@/assets/curso/tema2-2-4-fondo-botones.png', alt='Fondo' )

      .row.justify-content-center.bg-contenido.py-4.multi-collapse1.collapse.show(data-bs-parent='#MapaGroup01')
        .row.justify-content-around
          .col-md-3.py-0.py-md-4
            p El <b style="font-size: 18px;">Dashboard</b> es una herramienta muy útil para presentar los datos que se compilan en una o varias tablas dinámicas.
          .col-md-6
              img(src='@/assets/curso/tema2-2-4-tab1.png', alt='Dashboard')
      .row.justify-content-center.bg-contenido.py-4.multi-collapse2.collapse(data-bs-parent='#MapaGroup01')
        .col-md-4.mb-4.mb-md-0
          p La gran ventaja de esta herramienta es que a medida que se actualizan los datos en la base de datos principal, el gráfico dinámico también se actualiza. Es una herramienta muy útil para hacer seguimiento a indicadores y para observar el histórico del comportamiento de los datos. Se permite también visualizar de manera gráfica y ordenada la información que se ha consolidado en una base de datos.
        .col-md-3.pos-relative
          .top-nube
            img(src='@/assets/curso/tema2-2-4-tab2-1-2.svg', alt='Imagen decorativa')
          .movimiento-nube
            img(src='@/assets/curso/tema2-2-4-tab2-1-1.svg', alt='Imagen decorativa') 
        .col-md-4
          img(src='@/assets/curso/tema2-2-4-tab2-2.svg', alt='Imagen decorativa')  
      .row.justify-content-center.bg-contenido.py-4.multi-collapse3.collapse(data-bs-parent='#MapaGroup01')
        .row.justify-content-around
          .col-md-5.py-0.py-md-4
            p Permite también la toma de decisiones para el direccionamiento de la empresa por parte de la alta dirección. Se incluye también gráficos y números sobre un proyecto. Son útiles al implementar modelos eficientes y eficaces para el manejo de la información y permiten de manera inteligente cruzar datos y visualizarlos, otra ventaja es que permite la personalización y su diseño se puede adaptar a las necesidades de la empresa, es un proceso de fácil diseño, comprensión e implementación
          .col-md-5.pos-relative
            figure
              img(src='@/assets/curso/tema2-2-4-tab3-1.png', alt='Imagen decorativa')               
            .img-absoluta.movimiento-lupa
              img(src='@/assets/curso/tema2-2-4-tab3-2.png', alt='Lupa')


    p(data-aos="fade") Para ampliar la información, lo invitamos a ver el video “Excel - Cómo hacer gráficos dinámicos y crear un Dashboard con segmentación de datos”, que se encuentra en el material complementario.


    Separador


    // 2.3
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3. Formularios

    p.mb-4(data-aos="fade") Le invitamos a visualizar el siguiente video con el fin de conocer más sobre los formularios y su función en las herramientas ofimáticas. 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade") Para conocer la forma como se diseña un formulario en Excel y sus posibles parametrizaciones, lo invitamos a ver el video “Cómo crear una base de datos en Excel”, que se encuentra en el material complementario.

    .row.justify-content-center.align-items-center.mb-4.imgs-flotantes
      .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
        img.px-md-4(src='@/assets/curso/tema2-3-img1.svg', alt='Imagen decorativa')
        img.img-flotante2(src='@/assets/curso/sobre-flotante.svg', alt='Imagen decorativa')
      .col-md-7(data-aos="fade-left")
        h4.mb-1 Configuración de preguntas
        p.mb-4 Dentro de la configuración del formulario es importante parametrizar primero las preguntas, cada pregunta debe tener la suficiente claridad:
        ol.lista-ol--cuadro.px-md-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Cuando cree el campo de una pregunta tenga presente que cada campo debe de tener una respuesta única, es decir una entrada que permitirá luego su análisis, herramientas como listas desplegables, casillas de verificación, opción única, falso y verdadero son muy útiles para parametrizar los valores que se deben ingresar.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Es importante que se considere antes de la publicación del formulario las necesidades de la empresa de manejo de información y validar la funcionalidad del formulario y las preguntas que se ingresan.

    p.mb-4(data-aos="fade") En el video anterior se puede integrar la creación de formulario y la configuración de las preguntas de entrada del formulario utilizando macros sencillos y útiles.



</template>

<script>
import SlyderC2 from '../components/SlyderC2.vue'
import SlyderC3 from '../components/SlyderC3.vue'
export default {
  name: 'Tema2',
  components: {
    SlyderC2,
    SlyderC3,
  },
  data: () => ({
    mostrarIndicador: true,
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
    datosSlyder2: [
      {
        texto:
          'Para la configuración de una tabla dinámica se utiliza la herramienta que está en el menú de herramientas Pivot Table y luego se hace clic en tabla dinámica de la siguiente manera;',
        imagen: require('@/assets/curso/tema2-2-2-slide1.png'),
      },
      {
        texto:
          'Cuando se tienen muchos datos su análisis se puede volver complejo, si utilizamos gráficos, se puede presentar la información de una manera más comprensible, agradable a los ojos y dinámico. <br> Las condiciones para crear gráficos en Excel deben tener ciertas condiciones sobre todo de no tener espacios en blanco en los datos que se van a procesar. Nuevamente es recomendable que se utilice el lápiz y el papel para poder visualizar lo que se pretende lograr cuando se analizan los datos',
        imagen: require('@/assets/curso/tema2-2-2-slide2.svg'),
      },
      {
        texto:
          'Excel tiene por lo menos unos 100 formatos de gráficos que pueden ser usados en la construcción de interfaces amigables. Nuevamente recalcamos que el tipo de gráfico que se va a seleccionar debe de ayudar a que los gráficos se comprendan de una mejor manera.',
        imagen: require('@/assets/curso/tema2-2-2-slide3.svg'),
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
