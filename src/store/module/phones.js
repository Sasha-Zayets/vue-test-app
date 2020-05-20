const state = {
    phones: [
        {
            id: 0,
            phone: '123456789'
        }
    ],
    editPhone: {
        phone: ''
    }
}

const getters = {
    phones: state => state.phones,
    editPhone: state => state.editPhone
}

const mutations = {
    setAddPhone(state, payload) {
        const lastPhone = state.phones[state.phones.length - 1]
        const id = lastPhone.id + 1
        const newPhone = {
            id,
            ...payload
        }
        state.phones.push(newPhone)
    },
    setRemovePhone(state, id) {
        const newPhones = state.phones.filter(item => item.id !== id)
        state.phones = newPhones
    },
    setEditPhone(state, id) {
        const editPhone = state.phones.filter(item => item.id === id)
        state.editPhone = editPhone[0]
    },
    setUpdatePhone(state, payload) {
        const editPhones = state.phones.filter(item => {
            if(item.id === payload.id) {
                return payload
            }
            return item
        })
        
        state.phones = editPhones
    }
}

const actions = {
    addPhone({ commit }, payload) {
        commit('setAddPhone', {
            phone: payload
        })
    },
    deletePhone({ commit }, id) {
        commit('setRemovePhone', id)
    },
    getPhone({ commit }, id) {
        commit('setEditPhone', id)
    },
    updatePhone({ commit }, payload) {
        commit('setUpdatePhone', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}