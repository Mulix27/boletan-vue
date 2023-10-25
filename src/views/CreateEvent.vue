<template>
  <div class="container">
    <div class="container">
      <div class="content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/tan_tan.png" alt="">
            </figure>
          </div>

          <div class="media-content">
            <p class="title">Información básica</p>
            <p class="subtitle">Elige un nombre para tu evento. Añade detalles que destaquen por qué tu evento es único.
            </p>

            <div class="field">
              <label class="label">Nombre del Evento</label>
              <div class="control">
                <input class="input" v-model="eventName" placeholder="Nombre del evento">
              </div>
            </div>

            <div class="field">
              <label class="label">Organizador</label>
              <div class="control">
                <input class="input" v-model="organizer" placeholder="Organizador del evento">
              </div>
            </div>

            <section>
              <b-dropdown :scrollable="isScrollable" :max-height="maxHeight" v-model="tipoMenu" aria-role="list">
                <template #trigger>
                  <b-button class="menu-text" :label="tipoMenu.text" type="is-primary" icon-right="menu-down" />
                </template>


                <b-dropdown-item v-for="(menu, index) in menus" :key="index" :value="menu" aria-role="listitem">
                  <div class="media">
                    <div class="media-content">
                      <span>{{ menu.text }}</span>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>

              <b-dropdown :scrollable="isScrollable" :max-height="maxHeight" v-model="tipoCategory" aria-role="list">
                <template #trigger>
                  <b-button class="menu-text" :label="tipoCategory.text" type="is-primary" icon-right="menu-down" />
                </template>


                <b-dropdown-item v-for="(item, index) in items" :key="index" :value="item" aria-role="listitem">
                  <div class="media">
                    <div class="media-content">
                      <span>{{ item.text }}</span>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </section>

            <section>
              <div class="media">
                <div class="media-content">
                  <p class="title">Etiquetas</p>
                  <p class="subtitle">Agrega etiquetas según tu el giro de tu evento</p>
                  <b-field>
                    <b-taginput v-model="tags" maxlength="30" maxtags="5" placeholder="Agrega una etiqueta">
                    </b-taginput>
                  </b-field>
                </div>
              </div>

            </section>



          </div>

        </div>
      </div>
    </div>

    <div class="linea"></div>

    <div class="container">
      <div class="content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/tan_tan.png" alt="">
            </figure>
          </div>

          <div class="media-content">
            <p class="title">Ubicación</p>
            <p class="subtitle">Ayuda a la gente de la zona a descubrir el evento y asegúrate de que tus asistentes <br>
              sepan adónde ir.</p>
            <section>
              <b-button v-model="banderaUbicacion" @click="banderaUbicacion = 1">Lugar</b-button>
              <b-button @click="banderaUbicacion = 0" class="ml-5">Evento online</b-button>

              <br>
              <br>

              <div v-if="banderaUbicacion === 1">
                <b-field>
                  <b-input placeholder="Buscar" type="search" icon="magnify">
                  </b-input>
                </b-field>
              </div>
              <div v-else>

              </div>

            </section>
          </div>
        </div>
      </div>
    </div>

    <div class="linea"></div>

    <div class="container">
      <div class="content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/tan_tan.png" alt="">
            </figure>
          </div>

          <div class="media-content">
            <p class="title">Fecha y hora</p>
            <p class="subtitle">Informa a los asistentes cuándo empieza y termina el evento para que puedan <br>
              organizarse.</p>
            <section>

             <div class="columns">
              <div class="column is-one-third">
                <b-field label="El evento comienza">
                  <b-datepicker placeholder="21/12/2023" :min-date="minDate" :max-date="maxDate">
                  </b-datepicker>
                </b-field>
              </div>
              <div class=" column is-three-quarters">
                <b-dropdown :scrollable="isScrollable" :max-height="maxHeight" v-model="tipoMenu" aria-role="list">
                  <template #trigger>
                    <b-button class="menu-text" :label="tipoMenu.text" type="is-primary" icon-right="menu-down" />
                  </template>
  
  
                  <b-dropdown-item v-for="(menu, index) in menus" :key="index" :value="menu" aria-role="listitem">
                    <div class="media">
                      <div class="media-content">
                        <span>{{ menu.text }}</span>
                      </div>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
              </div>
             </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {


  data() {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    return {
      eventName: '',
      organizer: '',
      isScrollable: true,
      banderaUbicacion: 1,
      maxHeight: 150,
      date: new Date(),
      minDate: yesterday,
      maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate()),
      tipoMenu: { text: 'Tipo' },
      tipoCategory: { text: 'Categoría' },
      menus: [
        { text: 'Tipo' },
        { text: 'Orders' },
        { text: 'Payments' },
        { text: 'Logistics' },
        { text: 'Jobs' },
        { text: 'Cart' },
        { text: 'Configuration' }
      ],
      items: [
        { text: 'Tipo' },
        { text: 'Categoría' }
      ],
      tags: [

      ],
      methods: {
      }
    }
  }
}
</script>

<style>
.menu-text {
  padding-right: 12rem;
}

.linea {
  border: 1px solid #E5E5E5;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>