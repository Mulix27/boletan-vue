<template>
  <div class="container is-max-desktop">
    <div class="container">
      <div class="content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img class="icon-seccion" src="@/assets/citas.png" alt="">
            </figure>
          </div>

          <div class="media-content">
            <p class="title" style="color:#EE7F36;">Información básica</p>
            <p class="subtitle is-size-6">Elige un nombre para tu evento. Añade detalles que destaquen por qué tu evento
              es único.
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

            <section class="columns">

              <div class="column is-one-quarter">
                <b-field v-model="tipoMenu">
                  <b-select placeholder="Tipo" expanded>
                    <option v-for="(menu, index) in menus" :key="index" :value="menu" aria-role="listitem">
                      <div class="media">
                        <div class="media-content">
                          <span>{{ menu.text }}</span>
                        </div>
                      </div>
                    </option>
                  </b-select>
                </b-field>
              </div>

              <div class="column is-one-quarter">
                <b-field v-model="tipoCategory">
                  <b-select placeholder="Categoría:" expanded>
                    <option v-for="(item, index) in items" :key="index" :value="item" aria-role="listitem">
                      <div class="media">
                        <div class="media-content">
                          <span>{{ item.text }}</span>
                        </div>
                      </div>
                    </option>
                  </b-select>
                </b-field>
              </div>
            </section>

            <section>
              <div class="media">
                <div class="media-content">
                  <p class="title" style="color:#EE7F36;">Etiquetas</p>
                  <p class="subtitle is-size-6">Agrega etiquetas según tu el giro de tu evento</p>
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
            <figure class="image is-64x64">
              <img src="@/assets/mapa.png" alt="">
            </figure>
          </div>

          <div class="media-content">
            <p class="title" style="color:#EE7F36;">Ubicación</p>
            <p class="subtitle is-size-6">Ayuda a la gente de la zona a descubrir el evento y asegúrate de que tus
              asistentes <br>
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
            <figure class="image is-64x64">
              <img src="@/assets/calendario.png" alt="">
            </figure>
          </div>

          <div class="media-content">
            <p class="title" style="color:#EE7F36;">Fecha y hora</p>
            <p class="subtitle is-size-6">Informa a los asistentes cuándo empieza y termina el evento para que puedan <br>
              organizarse.</p>
            <section>

              <div>

                <b-button @click="banderaDate = 1">Evento individual</b-button>


                <b-button @click="banderaDate = 0" class="ml-5">Evento recurrente</b-button>

              </div>

              <br>


              <div v-if="banderaDate === 1">
                <p>Un evento único ocurre una vez y puede durar varios días</p>
                <div class="columns is-align-items-end">
                  <div class="column is-one-third">
                    <b-field label="El evento comienza">
                      <b-datepicker placeholder="21/12/2023" :min-date="minDate" :max-date="maxDate">
                      </b-datepicker>
                    </b-field>
                  </div>
                  <div class=" column is-one-quarter">
                    <b-field label="Hora de inicio">
                      <b-select placeholder="19:00" expanded>
                        <option v-for="(time, index) in times" :key="index" :value="time" aria-role="listitem">
                          <div class="media">
                            <div class="media-content">
                              <span>{{ time.text }}</span>
                            </div>
                          </div>
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                </div>

                <div class="columns is-align-items-end">
                  <div class="column is-one-third">
                    <b-field label="El evento finaliza">
                      <b-datepicker placeholder="21/12/2023" :min-date="minDate" :max-date="maxDate">
                      </b-datepicker>
                    </b-field>
                  </div>
                  <div class=" column is-one-quarter">
                    <b-field label="Hora de finalización">
                      <b-select placeholder="22:00" expanded>
                        <option v-for="(time, index) in times" :key="index" :value="time" aria-role="listitem">
                          <div class="media">
                            <div class="media-content">
                              <span>{{ time.text }}</span>
                            </div>
                          </div>
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                </div>
              </div>

              <div v-else>

              </div>

            </section>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>

    <div class="columns">
      <div class="column is-4 is-offset-10">
        <router-link to="create-event-media"><b-button style="background-color: #EE7F36; color:white">Guardar y continuar</b-button></router-link>
      </div>
    </div>

    <br><br><br>

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
      banderaDate: 1,
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
      times: [
        { text: '00:00' }, { text: '00:30' },
        { text: '01:00' }, { text: '01:30' },
        { text: '02:00' }, { text: '02:30' },
        { text: '03:00' }, { text: '03:30' },
        { text: '04:00' }, { text: '04:30' },
        { text: '05:00' }, { text: '05:30' },
        { text: '06:00' }, { text: '06:30' },
        { text: '07:00' }, { text: '07:30' },
        { text: '08:00' }, { text: '08:30' },
        { text: '09:00' }, { text: '09:30' },
        { text: '10:00' }, { text: '10:30' },
        { text: '11:00' }, { text: '11:30' },
        { text: '12:00' }, { text: '12:30' },
        { text: '13:00' }, { text: '13:30' },
        { text: '14:00' }, { text: '14:30' },
        { text: '15:00' }, { text: '15:30' },
        { text: '16:00' }, { text: '16:30' },
        { text: '17:00' }, { text: '17:30' },
        { text: '18:00' }, { text: '18:30' },
        { text: '19:00' }, { text: '19:30' },
        { text: '20:00' }, { text: '20:30' },
        { text: '21:00' }, { text: '21:30' },
        { text: '22:00' }, { text: '22:30' },
        { text: '23:00' }, { text: '23:30' }
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