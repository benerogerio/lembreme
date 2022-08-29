import Vue from 'vue'
import Vuex from 'vuex'

// import carrinho from './modules/carrinho'
// import parametros from './modules/parametros'

// import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notas : []
    },
    getters: {
        getNotaById: (state) => (id) => {
            const notas = state.notas.filter( obj => obj.id == id )
            return notas[0]
        },
        getMaiorId(state) {
            const ids = state.notas.map(nota => nota.id)
            const max = ids.reduce(function(a, b) {
                return Math.max(a, b);
              }, 0);

            return max
        }
    },
    // modules: { carrinho, parametros }
})
