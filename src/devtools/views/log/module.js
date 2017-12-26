import Vue from 'vue';

const state = {
    hasHTTPsource: false,
    eles: []
};

const mutations = {
    FLUSH(state, payload) {
        console.log('LOGTAB');
        console.log(payload);
        state.hasHTTPsource = payload.hasHTTPsource;
        state.eles = payload.eles;
    }
};


export default {
    namespaced: true,
    state,
    mutations
}
