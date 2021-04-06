import Vue from 'vue';

export const state = Vue.observable({
    count: 0,
    step: 1,
    name: 'Raul Berrios'
});

export const mutations = {
    previousStep() {
        if (state.step > 1) {
            state.step--;
        }
    },
    nextStep() {
        if (state.step < 3) {
            state.step++;
        }
    }, 
    setName(name) {
        state.name = name;
    }
}

