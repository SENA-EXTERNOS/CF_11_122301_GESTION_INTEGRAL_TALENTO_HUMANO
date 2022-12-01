<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-t4
    .row.justify-content-around.align-items-center.bkg-t4    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Implementación de la evaluación y recopilación de datos

      .row.justify-content-center.mt-3
        .col-lg-10
          .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
            .blq1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-1.svg')})`}")
            .bloque-texto-g__texto.p-4
              p Antes de dar inicio al proceso de la evaluación de desempeño, es importante tener cuenta todo lo relacionado con el despliegue logístico y conceptual, dando claridad a los involucrados sobre cuáles son las responsabilidades y los recursos que serán utilizados, para que estas personas garanticen el debido proceso en la ejecución de la medición al interior de la organización.

      .row.justify-content-center.mt-4
        p En el procedimiento técnico de la evaluación de desempeño, se deben tener en cuenta los siguientes factores:
        .col-lg-8
          TabsA.color-acento-contenido
            .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Objetivo y alcance")
              .row.p-4
                .col-auto
                  p Previo a la implementación de la evaluación de desempeño, los integrantes del equipo de apoyo deben estar contextualizados con relación al contenido de este instrumento, con el objetivo de obtener la capacidad de brindar todas la pautas necesarias a los evaluadores y atender todo tipo de inquietudes que puedan surgir antes de la salida en vivo de esta medición; este proceso garantiza que disminuya la probabilidad de equivocaciones o contratiempos, en la ejecución de la evaluación de desempeño.
            .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Contextualización del contenido")
              .row.p-4
                .col-auto
                  p Previo a la implementación de la evaluación de desempeño, los integrantes del equipo de apoyo deben estar contextualizados con relación al contenido de este instrumento, con el objetivo de obtener la capacidad de brindar todas la pautas necesarias a los evaluadores y atender todo tipo de inquietudes que puedan surgir antes de la salida en vivo de esta medición; este proceso garantiza que disminuya la probabilidad de equivocaciones o contratiempos, en la ejecución de la evaluación de desempeño.
            .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Logística de la evaluación ")
              .row.p-4
                .col-auto
                  p Una vez designados los responsables, recursos y el cronograma de aplicación de esta evaluación, los colaboradores encargados deben garantizar en la logística, que todos los evaluadores cuenten con los instrumentos, herramientas y espacios idóneos, en donde se garantice que no se presenten distracciones para lograr obtener que los resultados se encuentren ajustados al panorama actual de la organización y se permita construir un plan de acción, acorde con los hallazgos de esta medición.
        .col-lg-4
          img(src='@/assets/curso/temas/tema4/t4-2.svg', alt='Texto que describa la imagen') 

      .row.justify-content-start.align-items-center.mb-5.mt-5        
        .col-lg-4
          .color-degrade.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Recopilación de datos

    .row.justify-content-center.mb-3.mt-3
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema4/t4-3.svg', alt='Texto que describa la imagen').mb-3    
      .col-lg-8.col-xs-6
        p La recopilación de datos es un concepto que hace referencia al proceso secuencial que busca reunir la información que es conducida a través de diferentes fuentes, con el objetivo de recopilar los datos relacionados con un tema específico o de interés, de manera precisa y completa, la cual le permite a los individuos responder preguntas, evaluar resultados y anticiparse a los sucesos que puedan tener incidencias sobre la organización; es decir, en el contexto relacionado con la evaluación de desempeño, una vez finalizada la evaluación, la recopilación adecuada de esta información garantiza a los miembros evaluadores, la garantía que es una información integral y confiable, que sirve para establecer análisis, permitiendo a los individuos al interior de la organización responder a los criterios que fueron establecidos en la medición con la finalidad de implementar planes de acción, la toma de decisiones y los reconocimientos que se identifiquen.

    .row.justify-content-center.mt-5
      .col-lg-2(data-aos="flip-left").mb-3
        img(src='@/assets/curso/temas/tema4/t4-4.svg', alt='Texto que describa la imagen').animacion-flotante
      .col-lg-10
        p Existen diferentes estrategias para recopilar la información, con relación a la evaluación de desempeño; la elección está relacionada con el método de evaluación que es ejecutado en la organización y, por este motivo, es importante tener en cuenta los siguientes métodos para reunir datos:
    //terminar avatar-----------------------
    .row.justify-content-center.mb-5
      .col-auto.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/t4-9.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-5.svg", alt="alt").numero
            .col
              h3 Encuestas
              p Se refiere a captar la información de los colaboradores mediante cuestionarios con preguntas abiertas y/o cerradas, a través de canales físicos o digitales, los cuales permiten identificar el cumplimiento de las habilidades y destrezas de los individuos que se van a evaluar.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-6.svg", alt="alt").numero
            .col
              h3 Entrevista
              p Consiste en obtener datos mediante la formulación de preguntas específicas, a través de un entrevistador y por medio de llamadas por teléfono o, incluso, de manera electrónica, quien direccionará el ejercicio, orientándolo a evaluar una solicitud específica.
        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-7.svg", alt="alt").numero
            .col
              h3 Prueba
              p Este método consta en realizar pruebas basadas en los estándares estipulados en las fichas técnicas de la organización, con el fin de determinar la habilidades físicas, cognitivas y actitudinales de los participantes; con relación a este método, la información puede ser recopilada por medios físicos o digitales.
        .crd.crd--avatarHorizontal.crd--last2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/t4-8.svg", alt="alt").numero
            .col
              h3 Observaciones
              p Este proceso consta de la visualización constante del comportamiento de las personas a evaluar, mediante registros periódicos en una planilla de campo, de forma ordenada, la cual permite registrar los resultados para el adecuado análisis del cumplimiento de los objetivos. 

    //----------------------------------
    .row.justify-content-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
          .blq1.bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-10.svg')})`}")
          .bloque-texto-g__texto.p-4
            p Luego viene la analítica de datos, la cual consiste en examinar la información recopilada en la evaluación de desempeño, para identificar los aspectos relevantes de los resultados obtenidos en esta medición, con el objetivo de generar reportes para las partes interesadas, para la estructuración de planes de acción relacionados con la transformación empresarial y mejora continua y para monitoreos constantes y toma de decisiones que beneficien a todos los colaboradores de la organización.
      p.mt-5 Esa consolidación de la información, se realiza agrupando y organizando la información en sistemas u hojas de cálculo; en este proceso, la información debe contar con la calidad más alta, debido a que es el punto de partida para que los responsables de la evaluación de la inducción, realicen el análisis de los resultados.
      p.mt-5 Para finalizar con la elaboración del informe, se encuentran dos clasificaciones:


    .row.justify-content-center.mt-5
      .col-lg-4
          img(src='@/assets/curso/temas/tema4/t4-11.svg', alt='Texto que describa la imagen')         
      .col-lg-8.mt-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Informe de evaluación de  desempeño")
            .col-12.ps-5
              p.mb-0 El informe de evaluación de desempeño, tiene como objetivo explicar, de manera detallada, la información analizada una vez finalizado el ejercicio de medición al interior de la organización; este informe emite un parte del rendimiento laboral de los colaboradores evaluados, de las áreas de trabajo y de toda la empresa en general, en donde se evidencian los atributos, falencias, productividad y cumplimiento de objetivos de los colaboradores; es por esta razón que el informe de la evaluación de desempeño le facilita a los miembros que toman todo tipo de decisiones, otorgar ascensos, reconocimientos, establecer programas de formación y acciones encaminadas a la corrección de errores y la mejora continua, contribuyendo con la competitividad y la sostenibilidad de la organización en el tiempo.
          .row(titulo="Informe general de la evaluación")
            .col-12.ps-5
              p.mb-0 Al finalizar todo el proceso, los responsables de la estructuración y ejecución del proyecto de evaluación de desempeño de la organización, emiten el informe general, el cual consiste en retroalimentar a las partes interesadas, todos los pormenores relacionados con el proceso de ejecución, evidenciando las fortalezas y las dificultades enfrentadas, con la finalidad de obtener un insumo importante para la identificación de riesgos y oportunidades, para futuras evaluaciones, gracias a las lecciones aprendidas y a las buenas prácticas realizadas y utilizadas.

</template>

<script>
export default {
  name: 'Tema4',
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
