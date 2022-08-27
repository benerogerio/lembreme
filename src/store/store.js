import Vue from 'vue'
import Vuex from 'vuex'

// import carrinho from './modules/carrinho'
// import parametros from './modules/parametros'

// import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notas : [
            { id: 1, titulo: 'Minha primeira nota', desc: 'Loren ipsun dolor sit amet da minha primeira nota' },
            { id: 2, titulo: 'Minha segunda nota', desc: 'Loren ipsun dolor sit amet da minha seguda nota', },
            { id: 82, titulo: 'Minha terceira nota', desc: 'Loren ipsun dolor sit amet da minha terceira nota', },
            { id: 4, titulo: 'Minha quarta nota', desc: 'Loren ipsun dolor sit amet da minha quarta nota', },
        ]
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
              }, -Infinity);

            return max
        }
    },
    // modules: { carrinho, parametros }
})
