<template>
  <div id="app">
    <one v-if="currentStep === 1"/>
    <two v-if="currentStep === 2"/>

    <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" :disabled="!hasPreviousStep" @click="previousStep">Anterior</button>

    <button :disabled="!hasNextStep" @click="nextStep">Siguiente</button>
    
    {{ currentStep }}
    {{ state.name }}
  </div>
</template>

<script>
    import { state, mutations } from './state';
    import One from './components/One';
    import Two from './components/Two';

    export default {
        name: 'App',
        components: {
            One, Two
        },
        data() {
            return {
                state
            }
        },
        computed: {
            currentStep() {
                return state.step;
            },
            /** return true if has a previous step */
            hasPreviousStep() {
                return state.step > 1;
            },
            /** return true if has a next step */
            hasNextStep() {
                return state.step < 2;
            },
        },
        methods: {
            previousStep() {
                mutations.previousStep();
            },
            nextStep() {
                mutations.nextStep();
            }
        }
    }
</script>

<style>

</style>
