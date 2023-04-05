<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-around.align-items-center.bkg-intro
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.mb-3
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/intro.svg', alt='Texto que describa la imagen')
        .col-lg-8.col-xs-6.mt-2
          p Apreciado aprendiz, bienvenido a este componente formativo, donde identificará cada una de las generalidades del desarrollo y ejecución de la evaluación de desempeño en las organizaciones, guiados por las directrices establecidas en los procedimientos técnicos. Revisará los fundamentos relacionados con la ejecución de la evaluación de desempeño, validación y revisión de instrumentos, de acuerdo con los conceptos entregados por los expertos, recursos para la aplicación, implementación de la evaluación y las estrategias de recopilación de datos, posibilitando la reflexión sobre la importancia de evaluar al personal de la organización.
        
        p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .row.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/i08r19JRr4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
