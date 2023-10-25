<template>
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
          <p class="subtitle">Elige un nombre para tu evento. Añade detalles que destaquen por qué tu evento es único.</p>

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
                  <b-taginput v-model="tags" maxlength="30" maxtags="5" placeholder="Add a tag">
                  </b-taginput>
                </b-field>
              </div>
            </div>

          </section>



        </div>

      </div>
    </div>

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
            <b-button v-model="bandera" @click="bandera = 1">Lugar</b-button>
            <b-button @click="bandera = 0" class="ml-5">Evento online</b-button>

            <br>
            <br>

            <div v-if="bandera == 1">
              <b-field>
                <b-input placeholder="Search..." type="search" icon="magnify" >
                </b-input>
              </b-field>
            </div>
            <div v-else>
              <b-field>
                <b-input placeholder="Search..." type="search" icon="magnify">
                </b-input>
              </b-field>
            </div>

            <p class="content"> bandera: {{ bandera }} </p>

          </section>
        </div>

      </div>
    </div>

  </div>
</template>


<script>
export default {


  data() {
    return {
      eventName: '',
      organizer: '',
      isScrollable: true,
      bandera: 1,
      maxHeight: 150,
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
</style>