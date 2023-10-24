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
          <div>
            <div class="media">
              <div class="media-left">
                <p class="card-header-title">Tu próximo evento</p>
                <a href="/eventos" class="column is-two-thirds ">Ir a eventos</a>
              </div>
            </div>
          </div>
          
          <div class="card-content">
            <div class="content">

              <p>Todavía no tienes eventos, ¡Vamos a crear uno!</p>


              <!-- Mensaje cuando no tienes eventos -->
              <p v-if="eventos.length === 0">Aún no tienes eventos</p>
              <!-- Botón "Crear evento" -->
              <router-link v-else-if="eventos.length > 0"  to="/create-event"><button class="button is-primary">Crear evento</button></router-link>
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
      variableNombre: "Jorge", // Cambia "Usuario" por tu variable de nombre real
      eventos: [0] // Puedes cargar aquí tus eventos desde tu fuente de datos
    };
  }
};
</script>
  