<template>
    <div>
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
                            <p class="title">Medios de evento</p>
                            <p class="title">Imágenes</p>
                            <p class="subtitle">Añade fotos para mostrar de qué irá tu evento.</p>

                            <div class="column is-half
                            is-offset-one-quarter">
                                <b-field>
                                    <b-upload v-model="dropFiles" multiple accept=".jpg, .png, .jpeg" required
                                        validationMessage="Por favor, selecciona una imagen" drag-drop expanded>
                                        <section class="section">
                                            <div class="content has-text-centered">
                                                <p>
                                                    <b-icon icon="upload" size="is-large">
                                                    </b-icon>
                                                </p>
                                                <p>Arrastra y sube tus imagenes</p>
                                            </div>
                                        </section>
                                    </b-upload>
                                </b-field>

                                <div class="tags">
                                    <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
                                        {{ file.name }}
                                        <button class="delete is-small" type="button" @click="deleteDropFile(index)">
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div class="linea"></div>

                            <div class="media-content">
                                <p class="title">Vídeo</p>
                                <p class="subtitle">Añade un enlace de vídeo de Youtube o Vimeo para mostrar el ambiente de
                                    tu
                                    evento. El vídeo aparecerá con las <br> imágenes de tu evento.</p>

                                <div class="field">
                                    <p class="control has-icons-left">
                                        <input class="input" type="password" placeholder="URL">
                                        <span class="icon is-small is-left">
                                            <i class="fa-brands fa-youtube"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-6">
                <div class="content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="@/assets/tan_tan.png" alt="">
                            </figure>
                        </div>

                        <div class="media-content">
                            <p class="title">Descripción</p>
                            <p class="subtitle">Añade más detalles de tu evento como el programa, patrocinadores o invitados
                                destacados.</p>

                            <div class="field">
                                <div class="control">
                                    <textarea class="textarea has-fixed-size"></textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br>
            <br>

            <div class="columns">
                <div class="column is-4 is-offset-10">
                    <router-link to="create-event-media"><b-button>Guardar y continuar</b-button></router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropFiles: [],
            expandOnHover: false,
            expandWithDelay: false,
            mobile: "reduce",
            reduce: false
        }
    },
    methods: {
        deleteDropFile(index) {
            this.dropFiles.splice(index, 1)
        }
    }
}
</script>


<style>
.linea {
    border: 1px solid #E5E5E5;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>