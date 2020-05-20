<template>
    <v-row>
        <add-phone-or-filter @search="filterNumber" />
        <v-col md="6" class="d-flex justify-end align-center">
            <v-btn 
                rounded 
                color="success" 
                dark
                :to="{ name: 'add-new-phone' }"
                >Добавить
            </v-btn>
            <v-btn 
                class="mx-2" 
                fab dark small 
                color="primary">
                <v-icon dark>mdi-file-export-outline</v-icon>
            </v-btn>
            <v-btn 
                class="mx-2" 
                fab dark small 
                color="deep-purple accent-4">
                <v-icon dark>mdi-file-export-outline</v-icon>
            </v-btn>
        </v-col>
        <v-col sm="12">
            <v-card>
                <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="phones"
                    :items-per-page="25"
                    :items-per-page-text="123123123"
                    >
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-4"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            color="red"
                            class="ml-4"
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>    
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddPhoneOrFilter from '@/components/AddPhoneOrFilter'
export default {
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Телефони',
                align: 'start',
                value: 'phone',
                sortable: false
            },
            { 
                text: 'Действия', 
                align: 'end',
                value: 'actions', 
                sortable: false
            },
        ]
    }),
    computed: {
        ...mapGetters(['phones'])
    },
    methods: {
        ...mapActions(['deletePhone']),
        editItem(item) {
            this.$router.push({ name: 'edit-phone', params: {
                id: item.id
            }})
        },
        deleteItem(item) {
            this.deletePhone(item.id);
        },
        filterNumber(value) {
            this.search = value
        }
    },
    components: {
        AddPhoneOrFilter
    }
}
</script>