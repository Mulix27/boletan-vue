<template>
    <b-navbar :fixed-top="true" :spaced="true">

        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="@/assets/tan_tan.png" alt="">
            </b-navbar-item>
        </template>

        <template #end>
            <router-link to="/">
                <b-navbar-item href="#">
                    INICIO
                </b-navbar-item>
            </router-link>
            <b-navbar-item href="#">
                EVENTOS
            </b-navbar-item>
            <router-link to="/login">
                <b-navbar-item href="#">
                    INICIO DE SESIÓN
                </b-navbar-item>
            </router-link>

            <b-navbar-item href="#">
                CONTACTANOS
            </b-navbar-item>
        </template>

    </b-navbar>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavBar'
})
</script>
  