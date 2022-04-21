<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Hoja de cálculo electrónica
    p.mb-5 Recordemos qué es una hoja de cálculo o electrónica y para qué se utiliza.
    .row.justify-content-center.mb-5(data-aos='zoom-in')
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.position-relative.tarjeta2
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/15.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Programa o <em>software</em> que permite realizar y ejecutar: <b>cálculos aritméticos, modelos dinámicos, trabajar contabilidad, crear bases de datos, gráficas y reportes.</b>
              br
              br
              |Está presente en todos los paquetes o suites de ofimática como son: <b>office, Google Suite o iWork.</b>
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 Para tener una comprensión más clara de la hoja de cálculo y su operatividad, lo invitamos a ver el video <b>“Introducción a la hoja de cálculo”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=xthhxRF7Epo" target="_blank")
            span Ver mas
            i.fas.fa-file-download
    p.mb-5 A continuación, se va a analizar el procedimiento para configurar una hoja de cálculo y las diferentes funciones que esta posee. En este caso se va a utilizar la herramienta de Excel, pero los ejemplos y ejercicios se pueden realizar en cualquier <em>software</em> de hoja de cálculo.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Configuración de hoja de cálculo
    p.mb-5 La configuración de una hoja de cálculo consiste en realizar la parametrización del documento para digitar la información y después procesarla para gestionar el resultado.
      br
      br
      |<b>Ejemplo:</b> 
    .bg-1-claro.position-relative.p-5.mb-5
      .img-float.d-none.d-xl-block(style=' bottom: 40%; left: 2%;'): img(src='@/assets/curso/float1.svg')
      .img-float.d-none.d-xl-block(style=' top: 10%; right: 2%;'): img(src='@/assets/curso/float2.svg')
      .img-float.d-none.d-xl-block(style=' bottom: 2%; left: 20%;'): img(src='@/assets/curso/float3.svg')
      SlyderA.slyderA-editado.px-lg-5
        .tarjeta-slyde
          img.d-none.d-lg-block(src='@/assets/curso/16.jpg' alt='AvatarTop')
          .tarjeta-slyde__contenido.p-4
            p.mb-0 Se requiere conocer la suma de los gastos de caja menor de la semana del lunes 8 de noviembre al viernes 12 de noviembre, este es un cálculo básico, por tanto se debe parametrizar la hoja, esto se hace registrando en una celda información de texto con la fecha del registro y en la celda continua  el valor pagado o desembolso realizado, con el soporte de pago, una vez digitalizada la información, se aplica la herramienta sumatoria y obtendremos un resultado rápido, preciso y confiable, es de anotar que para que el resultado cumpla los anteriores parámetros, el ingreso de la información.                       
        .tarjeta-slyde
          img.d-none.d-lg-block(src='@/assets/curso/17.jpg' alt='AvatarTop')
          .tarjeta-slyde__contenido.p-4
            p.mb-0 Es decir, la digitalización debe ser datos precisos, a continuación se presenta secuencia de imágenes del desarrollo del ejemplo:
              br
              br
              |1.Crear la hoja de Excel con el registro.  Se hace haciendo Clic en la parte superior de la barra de herramientas, la opción guardar, para el caso se crea una carpeta denominada Gastos de Caja Menor, esta se crea dando clic derecho crear carpeta y en el espacio inferior de la pantalla se registra el nombre, luego clic sobre el nombre de la carpeta y allí ya se registra el archivo Gastos de Caja Menor Noviembre 8 al 12, de tal manera que ya se creó la hoja de cálculo digitar la información.                      
        .tarjeta-slyde
          img.d-none.d-lg-block(src='@/assets/curso/18.jpg' alt='AvatarTop')
          .tarjeta-slyde__contenido.p-4
            p.mb-0 2. Una vez digitalizada la información, se ubica el curso sobre la herramienta y como observamos se enmarca los registros que vamos a sumas, se presiona ENTER.                       
        .tarjeta-slyde
          img.d-none.d-lg-block(src='@/assets/curso/19.jpg' alt='AvatarTop')
          .tarjeta-slyde__contenido.p-4
            p.mb-0 3. Finalmente y como se observa en la imagen, se obtiene el resultado de la operación. 
    p.mb-5 Para ampliar la información sobre la configuración de una hoja de cálculo, lo invitamos a ver el video “Configuración hoja de cálculo”, que se encuentra en el material complementario.                      
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Barra de fórmulas
    p.mb-5 La barra de fórmulas de Excel es el espacio donde se encuentran las expresiones o los valores que se utilizan para realizar las operacione, esta barra permite visualizar y editar la fórmula que se va a implementar para el proceso que se deba hacer.
      br
      br
      | En el siguiente recurso usted descubrirá qué es la barra de fórmulas y cómo utilizarla.
    br 
    .row.mb-5.size-img.mt-3.justify-content-center
      .col-md-10.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/19.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-4-claro.w-100.rounded-3
            .p-4
              p La barra de fórmulas de Excel es el espacio donde se encuentran las expresiones o los valores que se utilizan para realizar las operaciones, esta barra permite visualizar y editar la fórmula que se va a implementar para el proceso que se deba hacer. 
    
      .col-md-10.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/20.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-4-claro.w-100.rounded-3
            .p-4
              p La importancia de la barra de fórmulas radica en que en este espacio se relacionan celdas que contienen valores numéricos o de texto, si lo que se busca es que el valor sea reconocido como número se le debe anteponer el símbolo del igual (=) por lo general está ubicado sobre el número cero en el teclado y debe oprimirse la tecla shift + el número cero. 
    
      .col-md-10.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/21.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-4-claro.w-100.rounded-3
            .p-4
              p Si lo que se desea es registrar un valor de texto debe escribirse normalmente dentro de la celda. Es importante anotar que cuando un número dentro de la barra de fórmulas se va a escribir solo pero no debe ser reconocido como texto se debe anteponer el símbolo (‘) que está ubicado en la tecla enseguida de la tecla cero.
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.px-5(titulo=" Asocia una celda con otra")
        p.mb-3 En la barra de fórmulas se asocia una celda con otra, esto quiere decir que si lo que se pretende es realizar una operación matemática entre dos valores numéricos por ejemplo 3*4=12 el tres y el cuatro deben estar en celdas diferentes de la siguiente manera.
        img(src='@/assets/curso/22.jpg' alt='AvatarTop')
      .py-3.py-md-4.px-5(titulo="Insertar la operación")
        p.mb-3 Luego se debe insertar la operación en la celda C1 de la siguiente manera.
          br
          |Nótese que los colores de los textos de la fórmula corresponden al color de la celda a la cual se asocia la fórmula.
        img(src='@/assets/curso/23.jpg' alt='AvatarTop')
      .py-3.py-md-4.px-5(titulo="Obtener el resultado")
        p.mb-3 Luego se presiona ENTER y se obtiene el resultado.
        img(src='@/assets/curso/24.jpg' alt='AvatarTop')
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-between.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 En el vídeo <b>“Hoja de Cálculo (Excel) Conceptos Básicos”</b>, que se encuentra en el material complementario, se puede apreciar con claridad la ubicación de los componentes de la hoja de cálculo que le permitirán ubicar las diferentes zonas de la hoja de cálculo, así podrá escribir en el lugar adecuado los valores para que realice las operaciones con los cuales se obtengan los resultados esperados.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=mt1CkQKuFW4&t=95s" target="_blank")
            span Ver mas
            i.fas.fa-file-download
    br
    h3.titulo-tercero(data-aos='fade-right').mt-4 Fórmulas básicas y lógicas
    p El siguiente recurso le dará un recorrido por las fórmulas básicas y lógicas de Excel.
    
    SlyderA.slyder.my-5
      .tarjeta.color-primario.rounded-0.slyder-card-front
        img(src='@/assets/curso/25.jpg' alt='AvatarTop' style='width: 820px')
        .slyder-card-front__card.p-5
          .img-float(style=' top: -35px; left: 30%; width: 80px'): img(src='@/assets/curso/float2.svg')
          p.mb-2.pe-5 Las operaciones que se pueden realizar en Excel son múltiples y variadas, se pueden hacer operaciones sencillas hasta operaciones muy complejas. 
          <audio controls>
            <source src="../../public/downloads/audio.mp3" type="audio/ogg">
            <source src="../../public/downloads/audio.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
      .tarjeta.color-primario.rounded-0.slyder-card-front
        img(src='@/assets/curso/25.jpg' alt='AvatarTop' style='width: 820px')
        .slyder-card-front__card.p-5
          .img-float(style=' top: -35px; left: 30%; width: 80px'): img(src='@/assets/curso/float2.svg')
          p.mb-3.pe-5 Es importante que antes de iniciar la construcción de una operación tenga claro cuál es el resultado que pretende obtener, se recomienda que utilice papel y lápiz antes de ingresar la fórmula en Excel.
            br
            br
            |Básicamente una fórmula que se quiera ingresar a la hoja de cálculo tiene la siguiente estructura:
          span.bg-white.p-2
            | <b>X + Y = Z</b>
      .tarjeta.color-primario.rounded-0.slyder-card-front
        img(src='@/assets/curso/25.jpg' alt='AvatarTop' style='width: 820px')
        .slyder-card-front__card.p-5
          p.mb-3.pe-5.text-small Donde cada incógnita hace referencia a un posible número, la primera incógnita es un valor numérico cualquiera, luego aparece el símbolo de la operación, luego el segundo valor, el símbolo del igual y finalmente el resultado de la operación entre dos términos. 
            br
            br
            |Excel calculará el valor que está posterior al igual, los otros dos términos deberán ser ingresados por el usuario.
            br
            |Por lo tanto, si lo que se quiere encontrar es la sumatoria entre 3 y 4 la expresión algebraica es: 3 + 4 = Z
            br
            br
            |El valor que se calculará será el de la incógnita “Z”
            br
            br
            |Cada valor debe ser ingresado en una celda independiente, por ejemplo:
          a.boton.color-acento-contenido.indicador__container.mb-3(@click="modal1 = true")
              i.far.fa-file-excel.me-2
              span.text-small Ver ejemplo
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-primario.rounded-0.slyder-card-front
        img(src='@/assets/curso/25.jpg' alt='AvatarTop' style='width: 820px')
        .slyder-card-front__card.p-5
          .img-float(style=' top: -35px; left: 30%; width: 80px'): img(src='@/assets/curso/float2.svg')
          .mb-0.pe-5
            p El símbolo de la operación no se escribe en una celda independiente, debe de escribirse en la barra de fórmulas. La fórmula debe escribirse en la celda C1, así se obtiene el resultado con la siguiente estructura:
            a.boton.color-acento-contenido.indicador__container.mb-3(@click="modal2 = true")
              i.far.fa-file-excel.me-2
              span.text-small Ver ejemplo
              .indicador--click(v-if="mostrarIndicador")
            p Nótese que el símbolo de la operación va en la fórmula. Se oprime ENTER y la fórmula se resuelve de acuerdo con los parámetros que el usuario ingresa.
            a.boton.color-acento-contenido.indicador__container.mb-3(@click="modal3 = true")
              i.far.fa-file-excel.me-2
              span.text-small Ver ejemplo
    ModalA(:abrir-modal.sync="modal1"): img(src='@/assets/curso/26.png')
    ModalA(:abrir-modal.sync="modal2"): img(src='@/assets/curso/28.png')
    ModalA(:abrir-modal.sync="modal3"): img(src='@/assets/curso/27.png')
    p.mb-5 Para ampliar la información sobre la manera como se pueden configurar las operaciones básicas, lo invitamos a ver el video “Fórmulas básicas en Excel”, que se encuentra en el material complementario.
      br
      br
      |Ahora, sigamos aprendiendo de las diferentes fórmulas de trabajo en hojas de cálculo.
    .row.justify-content-center.mb-5
      .col-lg-10
        SlyderA.slyder-botones-rojos
          .row.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/29.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4.mb-3 La base de las funciones lógicas es el manejo de funciones algebraicas de la forma:
              span.span-rojo.p-2.my-3
                b F(x) = 2x
              p.mt-3 Estas funciones tienen la característica que tienen una variable dependiente y una independiente, esto quiere decir, que se debe encontrar el resultado de multiplicar el número 2, que es la variable dependiente, por cualquier número x, la cual es la variable independiente.
          .row.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/30.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4.mb-2 X puede tomar cualquier número
              p Pero el número 2 se debe de conservar, así por ejemplo podemos ver la operación en la siguiente tabla.
              img(src='@/assets/curso/31.svg')
          .row.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/33.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4.mb-3 Se puede notar que el número 2 siempre se repite, el que cambia es el valor de x
              img(src='@/assets/curso/32.svg')
          .row.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/34.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4.mb-2 La anterior es una función sencilla 
              p Pero se pueden hacer funciones muy complejas. Lo importante es que la parametrización de la fórmula que se ingrese sea correcta. Por ejemplo, deseo encontrar el resultado de varias multiplicaciones.
              span.span-rojo.p-2
                b F(x) = 2x + 3x + 4x
          .row.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/35.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4.mb-2 La forma de resolver esta fórmula: 
              p Es que se deben de hacer los cálculos de manera independiente, de la siguiente forma:
              span.span-amarillo.p-2
                b  F(x) = (2*2) + (3*2)/1 + (4*2) 	
              p.mt-3 Nótese que el valor de X debe ser siempre el mismo, en este caso.

          .row.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/36.svg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Si la forma de la función es:
              span.span-rojo.p-2.mb-3
                b F(x) = 2x + 3y + 4z
              p.mt-3 Los valores de las variables deben de cambiar de la siguiente manera:
              span.span-amarillo.p-2
                b  F(x) = (2*2) + (3*5)/(2) + (4*7)
              p.mt-3 Por eso es importante que, antes de ingresar los valores a la hoja de cálculo, realice la formulación usando papel y lápiz.
    p.mb-5 Otro punto importante es que cada operación debe ser ingresada entre paréntesis para que sea identificada por la hoja electrónica adecuadamente. Una de las formas de ingresar los valores es la siguiente:
    figure.mb-3
      img(src='@/assets/curso/37.png', alt='Texto que describa la imagen')
    figure.mb-5
      img(src='@/assets/curso/38.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-10
        .color-verde 
          p <b>Pueden realizarse combinaciones de operaciones, lo importante es ubicar los paréntesis de la forma adecuada para que se indique, que primero se deben realizar las operaciones entre paréntesis y luego realizar la operación final.</b>
    h3.titulo-tercero(data-aos='fade-right') Funciones lógicas de Excel
    p.mb-5 Las funciones lógicas tienen la característica que pueden realizar cálculos en datos agrupados, un dato agrupado son valores que forman parte de una columna que tiene un título y todos los valores que se encuentran debajo del título tienen relación, por ejemplo: 
    .titulo-sexto.color-acento-contenido.mb-5.fst-italic
      h5 Figura 1
      span Ejemplo funciones lógicas de Excel
    .tarjeta-fondo.p-5.mb-5
      .px-4
        img(src='@/assets/curso/39.jpg', alt='Texto que describa la imagen').mb-3
        ul.lista-ul--color
          li
            i.vineta-avion
            p.mb-0 Nótese que <b>cada columna tiene un nombre</b> y los valores que están debajo del título están relacionados.
          li
            i.vineta-avion
            p.mb-0 Las <b>fórmulas lógicas sólo se pueden aplicar a datos agrupados</b> para que el resultado que se obtenga sea lógico y útil.
          li
            i.vineta-avion
            p.mb-0 <b>Excel cuenta con más de 300 fórmulas lógicas</b> para el tratamiento de datos y su principal función es obtener resultados que permitan tomar decisiones.
          li
            i.vineta-avion
            p.mb-0 Para acceder a las opciones de fórmulas lógicas, se debe de <b>dar clic en la barra de fórmulas</b> en el ícono. 
    .row.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido.fst-italic
          h5 Figura 2
          span Ícono de fórmulas lógicas 
        img(src='@/assets/curso/40.svg', alt='Texto que describa la imagen')
      .col-lg-8
        .titulo-sexto.color-acento-contenido.fst-italic
          h5 Figura 3
          span Buscador de funciones
        img(src='@/assets/curso/41.jpg', alt='Texto que describa la imagen')
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg").me-5
        .col-8
          p.mb-0 Para observar el funcionamiento de las funciones lógicas más utilizadas, lo invitamos a ver el video <b>“Cómo hacer funciones lógicas en Excel”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=dWy-JjhUsBw" target="_blank")
            span Ver mas
            i.fas.fa-file-download
    h3.titulo-tercero(data-aos='fade-right') Gráficos y Tablas dinámicas
    p.mb-5 Le invitamos a ver el siguiente recurso, donde conocerá los gráficos y las tablas dinámicas.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BN6p79MReoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 Para ampliar la información sobre la configuración de una tabla dinámica, lo invitamos a ver el video <b>“Crear tablas dinámicas en Excel”</b>, que se encuentra en el material complementario. 
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=gsxCopOjGZo" target="_blank")
            span Ver mas
            i.fas.fa-file-download
    p.mb-5 Y complemente la información explorando el siguiente recurso.
    .tarjeta.tarjeta-verde-claro.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        div(titulo="").px-5
          p.mb-4 Para la configuración de una tabla dinámica se utiliza la herramienta que está en el menú de herramientas Pivot Table y luego se hace clic en tabla dinámica como se muestra en la imagen:
          img(src='@/assets/curso/42.jpg', alt='Texto que describa la imagen')
        .row(titulo="").px-5.row.justify-content-center.align-items-center
          .col-lg-2: img(src='@/assets/curso/43.svg')
          .col-lg-10
            p Lo determinante es saber la relación que se pretende lograr y el orden que tienen las columnas, es muy importante que todos los datos estén ordenados en columnas, de lo contrario se pueden presentar inconsistencias en el resultado final y afectar el análisis que se quiere hacer.
        .row(titulo="").px-5.row.justify-content-center.align-items-center
          .col-lg-2: img(src='@/assets/curso/44.svg')
          .col-lg-10
            p Cuando se tienen muchos datos su análisis se puede volver complejo, si utilizamos gráficos, se puede presentar la información de una manera más comprensible, agradable a los ojos y dinámico.
              br
              br
              |Las condiciones para crear gráficos en Excel deben tener ciertas condiciones sobre todo de no tener espacios en blanco en los datos que se van a procesar. Nuevamente es recomendable que se utilice el lápiz y el papel para poder visualizar lo que se pretende lograr cuando se analizan los datos.
        .row(titulo="").px-5.row.justify-content-center.align-items-center
          .col-lg-2: img(src='@/assets/curso/45.svg')
          .col-lg-10
            p Excel tiene por lo menos unos 100 formatos de gráficos que pueden ser usados en la construcción de interfaces amigables. Nuevamente recalcamos que el tipo de gráfico que se va a seleccionar debe de ayudar a que los gráficos se comprendan de una mejor manera.
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 Para ampliar la información sobre la construcción de gráficos, lo invitamos a ver el video <b>“Crear GRÁFICOS estadísticos. Introducir datos en Excel y crear gráficas”</b>, que se encuentra en el material complementario. 
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=04pGYGNxRZY" target="_blank")
            span Ver mas
            i.fas.fa-file-download  
    h3.titulo-tercero(data-aos='fade-right') Relación y vínculos entre hojas y libros
    p.mb-5 El siguiente recurso muestra la relación  y vínculos entre hojas y libros, con el fin de mejorar la organización.
    .row.justify-content-center.mb-5
      .col-lg-10
        .slyder-botones-morados
          SlyderA
            .row.align-items-center
              .col-md-7
                figure
                  img(src='@/assets/curso/46.png', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                h4 Relación y vínculos entre hojas y libros
                p Los datos en una base de datos cobran vida cuando se relacionan con otros datos de otras bases de datos diferentes a la principal pero que se complementan.
            .row.align-items-center
              .col-md-7
                figure
                  img(src='@/assets/curso/47.png', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                h4 En muchos casos en las empresas diferentes áreas generan bases de datos que se enfocan en su función empresarial
                p En ese contexto es necesario tener presente que en la administración moderna todas las empresas deben tener enfoques sistémicos donde todo está relacionado. Si no se tiene presente que la interacción de las áreas es inherente al funcionamiento de la organización, dicha organización está condenada al fracaso una vez que no está implementando procesos de mejora continua que busquen el mejoramiento de la competitividad..   
            .row.align-items-center
              .col-md-7
                figure
                  img(src='@/assets/curso/48.png', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                h4 Es en ese contexto que la relación de las áreas se ve evidenciada cuando las bases de datos se pueden relacionar 
                p  Para poder hacer esa asociación se debe de tener un dato en común, por lo general se usa el número de identificación personal o empresarial y partiendo de ese dato clave se pueden relacionar las bases de datos.   
            .row.align-items-center
              .col-md-7
                figure
                  img(src='@/assets/curso/49.png', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                h4 En el capítulo anterior se trató el tema de las funciones lógicas
                p La función BUSCARV permite buscar en una base de datos alterna un dato que se encuentra en la base de datos principal y asociar una base de datos con otra. 
            .row.align-items-center
              .col-md-7
                figure
                  img(src='@/assets/curso/50.png', alt='Texto que describa la imagen')
              .col-md-5.mb-4.mb-md-0
                h4 También es importante:
                p Generar enlaces de consulta dentro de la misma base de datos o que lleve a una dirección <em>WEB.</em> Así se permite complementar la información y ampliar un concepto o soportar un dato. 
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 Para ampliar la información, lo invitamos a ver el video <b>“Cómo enlazar o vincular celdas entre diferentes hojas”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=PU6SqS6Rtnc" target="_blank")
            span Ver mas
            i.fas.fa-file-download 
    h3.titulo-tercero(data-aos='fade-right') <em>Dashboard</em> 
    p.mb-5 Los tableros inteligentes son herramientas de ayuda en la creación y propagación de la información, explore el siguiente recurso con el fin de conocer más acerca de ellos.
    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta.color-primario.tarjeta-hover-morado.p-4.img-rounded
          img(src='@/assets/curso/51.jpg', alt='Texto que describa la imagen' style='width: 354px').mb-4
          p El <em>dashboard</em> es una herramienta muy útil para presentar los datos que se compilan en una o varias tablas dinámicas.
      .col-lg-4.mb-3
        .tarjeta.color-primario.tarjeta-hover-morado.p-4.img-rounded
          img(src='@/assets/curso/52.jpg', alt='Texto que describa la imagen' style='width: 354px').mb-4
          p La gran ventaja de esta herramienta es que a medida que se actualizan los datos en la base de datos principal, el gráfico dinámico también se actualiza. Es una herramienta muy útil para hacer seguimiento a indicadores y para observar el histórico del comportamiento de los datos. Se permite también visualizar de manera gráfica y ordenada la información que se ha consolidado en una base de datos.
      .col-lg-4.mb-3
        .tarjeta.color-primario.tarjeta-hover-morado.p-4.img-rounded
          img(src='@/assets/curso/53.jpg', alt='Texto que describa la imagen' style='width: 354px').mb-4
          p Permite también la toma de decisiones para el direccionamiento de la empresa por parte de la alta dirección. Se incluye también gráficos y números sobre un proyecto. Son útiles al implementar modelos eficientes y eficaces para el manejo de la información y permiten de manera inteligente cruzar datos y visualizarlos, otra ventaja es que permite la personalización y su diseño se puede adaptar a las necesidades de la empresa, es un proceso de fácil diseño, comprensión e implementación.
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 Para ampliar la información, lo invitamos a ver el video <b>“Excel - Cómo hacer gráficos dinámicos y crear un Dashboard con segmentación de datos”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=ghyGNJKjPsQ" target="_blank")
            span Ver mas
            i.fas.fa-file-download 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Formularios
    p.mb-5 Le invitamos a visualizar el siguiente video con el fin de conocer más sobre los formularios y su función en las herramientas ofimáticas. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ys10wr50zz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .tarjeta.bg-1-claro.p-3.mb-5.rounded-0(data-aos='zoom-in')
      .row.justify-content-center.align-items-center.px-5.py-3
        .col-1.d-none.d-lg-block
          img(src="@/assets/curso/10.svg")
        .col-8
          p.mb-0 Para conocer la forma como se diseña un formulario en Excel y sus posibles parametrizaciones, lo invitamos a ver el video <b>“Cómo crear una base de datos en Excel”</b>, que se encuentra en el material complementario.
        .col-2
          a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=qD1ESeppezg" target="_blank")
            span Ver mas
            i.fas.fa-file-download 
    h3.titulo-tercero(data-aos='fade-right') Configuración de preguntas
    p.mb-5 Dentro de la configuración del formulario es importante parametrizar primero las preguntas, cada pregunta debe tener la suficiente claridad:
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-3
          .col-auto: img(src="@/assets/curso/54.svg").mb-5.mb-lg-2
          .col-lg
            p Cuando cree el campo de una pregunta tenga presente que cada campo debe de tener una respuesta única, es decir una entrada que permitirá luego su análisis, herramientas como listas desplegables, casillas de verificación, opción única, falso y verdadero son muy útiles para parametrizar los valores que se deben ingresar.
        hr
        .row.justify-content-center.align-items-center.mb-5
          .col-auto: img(src="@/assets/curso/55.svg").mb-5.mb-lg-2
          .col-lg
            p Es importante que se considere antes de la publicación del formulario las necesidades de la empresa de manejo de información y validar la funcionalidad del formulario y las preguntas que se ingresan. 
    .texto-2
      p.mb-5 <b>En el video anterior se puede integrar la creación de formulario y la configuración de las preguntas de entrada del formulario utilizando macros sencillos y útiles.</b>




























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
    modal1: false,
    modal2: false,
    modal3: false,
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
.bg-1-claro
  background-color: #fff6e2
.slyderA-editado
  .slyder-a__bullets__item--active
    background-color: #5263e2
  .slyder-a__tipo-a .slyder-a__bullets
    bottom: -23px
  .slyder-a__bullets__item
    border: 3px solid #5263e2
  @media (max-width: $bp-max-xs)
    .tarjeta-slyde
      height: 610px !important
  @media (max-width: $bp-max-md)
    .tarjeta-slyde
      height: 408px
.tarjeta-slyde
  position: relative

  img
    width: 100%
    border-radius: 15px
  &__contenido
    width: 100%
    position: absolute
    left: 0
    bottom: 0
    background-color: #dce0f9
.img-float
  z-index: 1000
  position: absolute
  animation: float 5s ease-in-out infinite alternate
@keyframes float
  0%
    transform: translateY(-10px)
  100%
    transform: translateY(10px)
.bg-4-claro
  background-color: #b1e0d9
.size-img
  .tarjeta-avatar img
    width: 200px
    top: -8%
.slyder-card-front
  position: relative

  &__card
    position: absolute
    background-color: $color-secundario
    top: 50%
    right: 0
    transform: translateY(-50%)
    width: 50%
    p
      color: white !important
    .img-float
      z-index: 1000
      position: absolute
      animation: float 5s ease-in-out infinite alternate
.modal-a__content
  background-color: $color-acento-contenido
.slyder-botones-rojos
  background-color: #fff6e2
  padding: 50px 100px
  .fa-chevron-left
    &:before
      content: url(../assets/curso/flecha-izquierda-roja.svg) !important
  .slyder-a__btn--sigt
    &:before
      content: url(../assets/curso/flecha-roja.svg) !important
  .slyder-a__btn--atrs
    &:before
      content: url(../assets/curso/flecha-roja.svg) !important
.slyder-botones-morados
  background-color: #dce0f9
  padding: 50px 100px
  .slyder-a__btn--sigt
    right: -8%
    background-color: #5263e2
    background-image: url(../assets/curso/flecha-blanca.svg)
  .slyder-a__btn--atrs
    left: -8%
    background-color: #5263e2
    background-image: url(../assets/curso/flecha-blanca.svg)
.span-rojo
  background-color: $color-acento-contenido
.span-amarillo
  background-color: $color-primario
.color-verde
  p
    color: #43a99b
.tarjeta-fondo
  background-image: url(../assets/curso/fondo.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover

.vineta-avion
  &:before
    content: url(../assets/curso/vineta-avion.svg)
.tarjeta-verde-claro
  background-color: #d8efec
.tarjeta-hover-morado
  height: 100%
  img
    border-radius: 10px
  p
    transition: color 0.3s ease-in-out
  transition: background-color 0.3s ease-in-out
  &:hover
    background-color: $color-secundario
    p, em
      color: white
.texto-2
  p
    color: #5263e2
.tarjeta2
  .bloque-texto-g__texto
    width: 70%
</style>
