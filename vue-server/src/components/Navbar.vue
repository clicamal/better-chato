<template>
    <nav id="navbar" class="pure-menu pure-menu-horizontal">
        <a id="homepage-anchor" href="/" class="pure-menu-heading pure-menu-link">BETTER CHATO</a>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavbarComponent'
});
</script>

<style scoped>
nav#navbar {
    background-color: var(--primary-color);
    box-shadow: 0px 0px 7px 0px black;
    position: static;
    top: 0px;
    left: 0px;
    z-index: 10;
}

a#homepage-anchor {
    color: var(--primary-text-color);
}
</style>
