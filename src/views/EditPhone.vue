<template>
    <v-row>
        <v-col md="8">
            <v-text-field 
                v-model="editPhone.phone"
                label="Редактировать"
                />
            <v-btn 
                color="primary"
                @click="update"
                >Обновить</v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    created() {
        this.id = this.$route.params.id
        this.getPhone(parseInt(this.id))
    },
    methods: {
        ...mapActions(['getPhone', 'updatePhone']),
        update() {
            this.updatePhone(this.editPhone)
                .then(() => {
                    this.$router.push({ name: 'home-page' })
                })
        }
    },
    computed: {
        ...mapGetters(['editPhone'])
    }
}
</script>