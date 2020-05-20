<template>
    <v-row>
        <v-col sm="8" class="d-flex align-center">
            <v-form
                ref="form"
                class="add-phone-form"
                >
                <v-text-field
                    v-model="newPhone"
                    :rules="nameRules"
                    type="phone"
                    label="Телефон"
                    class="mr-3"
                    ></v-text-field>
            </v-form>
            <v-btn
                fab dark small 
                color="primary"
                @click="addNewPhone">
                <v-icon>mdi-check</v-icon>
            </v-btn>
        </v-col>
        <v-col sm="12">
            <v-btn 
                rounded
                @click="$router.go(-1)"
                >Назад</v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data: () => ({
        newPhone: '',
        nameRules: [
            v => !!v || 'Поле обязательное'
        ]
    }),
    methods: {
        ...mapActions(['addPhone']),
        addNewPhone() {
            const form = this.$refs.form
            
            if(form.validate()) {
                this.addPhone(this.newPhone)
                    .then(() => {
                        form.reset()
                        this.$router.push({ name: 'home-page' })
                    })
            }
        }
    }
}
</script>

<style>
    .add-phone-form {
        width: 100%;
    }
</style>