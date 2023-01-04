<template>
    <div class="authentication">
        <form class="pure-form authentication-form" @submit="onSubmit">
            <h3 class="authentication-form-heading">{{ heading }}</h3>

            <slot></slot>
        </form>

        <ErrorsList :errors="errors" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AxiosError, AxiosResponse } from 'axios';
import ErrorsList from './ErrosList.vue';

export default defineComponent({
    name: "AuthenticationComponent",
    data() {
        return {
            errors: [] as string[]
        };
    },
    props: {
        heading: {
            type: String,
            required: true
        }
    },
    emits: ["submit"],
    methods: {
        onSubmit(event: Event) {
            event.preventDefault();

            this.errors.length = 0;

            const onAuthenticationRequestError = (error: AxiosError) => {
                const errors = (error.response as AxiosResponse).data.errors;
                for (const key in errors) {
                    for (const message of errors[key]) {
                        this.errors.push(message);
                    }
                }
            };

            this.$emit("submit", onAuthenticationRequestError);
        }
    },
    components: { ErrorsList }
});
</script>

<style>
div.authentication {
    height: fit-content;
    width: calc(100% - 20px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

form.authentication-form {
    background-color: var(--primary-color) !important;
    height: fit-content;
    border-radius: 5px;
    padding: 10px;
}

h3.authentication-form-heading {
    color: var(--primary-text-color);
    text-align: center;
    margin-top: 8.72px;
}

a.other-form-anchor {
    color: white;
    margin-top: 10px;
    display: inline-block;
}

@media only screen and (min-width: 720px) {
    div.authentication {
        width: 350px;
    }
}
</style>
