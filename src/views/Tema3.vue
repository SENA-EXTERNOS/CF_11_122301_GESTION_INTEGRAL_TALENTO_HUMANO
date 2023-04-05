<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-t3
    .row.justify-content-around.align-items-center.bkg-t3    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Recursos

      .row.justify-content-center.mb-3
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema3/t3-1.svg', alt='Texto que describa la imagen').mb-3    
        .col-lg-8.col-xs-6
          p Cuando se menciona el concepto de recurso, se hace referencia al conjunto de elementos utilizados para alcanzar un determinado objetivo o fin, en la búsqueda de satisfacer una necesidad o requerimiento; es decir, en el contexto de la evaluación de desempeño, se hace referencia a los medios que son insumos para la ejecución de la medición, según los criterios establecidos; es por esto, que se deben tener en cuenta los diferentes tipos y características de los recursos.
          .cajon.color-acento-contenido1.p-4
            p Es necesario que los miembros involucrados en la construcción y ejecución de la evaluación de desempeño, conozcan cada uno de los tipos y características de los recursos, para contar, de esta manera, con cada uno de los pormenores para que esta medición sea realizada eficazmente.

    .row.justify-content-center.mt-5
      p Estos recursos son:
      .col-lg-9
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema3/t3-2.svg', alt='Texto que describa la imagen')

          .tarjeta.estilo-cajon.p-3(x="25.6%" y="95.6%" numero="+")
            p En este tipo de recursos, se encuentran los #[em software] y las herramientas tecnológicas que son utilizadas para optimizar el desempeño de los colaboradores y, en este contexto, la ejecución de la evaluación de desempeño.
          
          .tarjeta.estilo-cajon.p-3(x="2.7%" y="54.5%" numero="+")
            p Se definen como los bienes tangibles con los que cuenta la organización para la consecución de los objetivos; en este sentido, se tienen en cuenta las herramientas, muebles e inmuebles, vehículos, materia prima, maquinaria, entre otros, los cuales son recursos indispensables para la ejecución de la evaluación de desempeño.

          .tarjeta.estilo-cajon.p-3(x="16.9%" y="17.5%" numero="+")
            p Este tipo de recurso está ligado al personal que tiene relación con la organización; en este sentido, los colaboradores son el principal insumo para gestionar y utilizar los demás recursos, para la consecución de los objetivos.

          .tarjeta.estilo-cajon.p-3(x="50.5%" y="2.8%" numero="+")
            p Se definen como los recursos que son fácilmente cuantificables y medibles, mediante indicadores o valores monetarios, como son los materiales, dinero, tecnología, etc.

          .tarjeta.estilo-cajon.p-3(x="83.5%" y="18%" numero="+")
            p Este concepto hace referencia a los recursos que no son cuantificables, pero tienen impacto en el desarrollo de los proyectos como son la motivación, el clima organizacional y la imagen corporativa de la empresa.

          .tarjeta.estilo-cajon.p-3(x="97.5%" y="54.5%" numero="+")
            p Este tipo de recurso hace mención a la capacidad económica con la que cuenta la organización o la entidad que se encuentre designada para la ejecución del proyecto específico.

          .tarjeta.estilo-cajon.p-3(x="74.4%" y="96.5%" numero="+")
            p Este tipo de recurso también hace referencia a la capacidad económica que esté designada para la ejecución de proyecto; sin embargo, los fondos provienen de otras organizaciones o préstamos obtenidos.           

    .row.justify-content-center.mt-5
      p Luego, viene la asignación de los recursos para la evaluación de desempeño y, para ampliar la información sobre este tema, es preciso visualizar el siguiente video. 
      
      .video.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3xb7c7X7T90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
