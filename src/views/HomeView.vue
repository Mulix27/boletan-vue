<template>
  <div>
    <!-- Título con variable de nombre -->



    <!-- Contenedor o card de "Tus próximos eventos" -->



    <div class="columns is-centered">
      <div class="column is-10">

        <div class="columns is-3 mx-1">
          <h1 class="title">Hola, {{ variableNombre }}</h1>
        </div>

        <div class="card pb-6">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Tu próximo evento</p>
                <p class="subtitle is-6"><a href="/eventos">Ir a eventos</a></p>
              </div>
            </div>
          </div>

          <div class="card-content columns is-centered">
            <div class="content container-event">

              <p>Todavía no tienes eventos, ¡Vamos a crear uno!</p>


              <!-- Mensaje cuando no tienes eventos -->
              <p v-if="eventos.length === 0">Aún no tienes eventos</p>
              <!-- Botón "Crear evento" -->
              <router-link v-else-if="eventos.length > 0" to="/create-event-info"><button class="button">Crear
                  evento</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  data() {
    return {
      variableNombre: "Jorge", 
      eventos: [1] 
    };
  }
};

</script>

<style>
.container-event {
  text-align: center;
}
</style>
  