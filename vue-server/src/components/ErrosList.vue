<template>
    <ol id="errors-list" v-if="errors.length > 0">
        <li class="error" v-for="(message, index) in errors" :key="index">{{ message }}</li>
    </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ErrorsList',
    props: {
        errors: {
            type: Array,
            required: true
        }
    }
})
</script>

<style scoped>
ol#errors-list {
    background-color: pink;
    color: red;
    border: 2px solid red;
    padding: 10px;
    padding-bottom: 0px;
    list-style: none;
    border-radius: 5px;
}

li.error {
    margin-bottom: 10px;
}
</style>
