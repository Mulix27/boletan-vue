<template>

    <aside>
        sidebar
    </aside>
    
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideBar'
})

</script>

<style lang="scss" scoped>  

aside {
    display: flex;
    flex-direction: column;
    width: var(--sidebar-width);
    overflow: hidden;
    padding: 1rem;
    min-height: 100vh;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2 ease-out;
}

</style>
