<template>
    <div>
      <!-- Título con variable de nombre -->
      <h1 class="title">Hola, {{ variableNombre }}</h1>
  
      <!-- Contenedor o card de "Tus próximos eventos" -->
      <div class="card">
          <p class="card-header-title">
            Tus próximos eventos
          </p>
        <div class="card-content">
          <div class="content">
            <!-- Etiqueta para ir a eventos -->
            <p><a href="/eventos">Ir a eventos</a></p>
  
            <!-- Mensaje cuando no tienes eventos -->
            <p v-if="eventos.length === 0">Aún no tienes eventos</p>
  
            <!-- Botón "Crear evento" -->
            <button v-else-if="eventos.length > 0" class="button is-primary">Crear evento</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        variableNombre: "Usuario", // Cambia "Usuario" por tu variable de nombre real
        eventos: [] // Puedes cargar aquí tus eventos desde tu fuente de datos
      };
    }
  };
  </script>
  