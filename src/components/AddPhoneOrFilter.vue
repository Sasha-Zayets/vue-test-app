<template>
    <v-col md="6" class="d-flex align-center">
        <v-text-field
            v-model="search"
            label="Искать"
            prepend-icon="mdi-magnify"
            class="mr-2"
        ></v-text-field>
        <v-btn 
            rounded 
            color="cyan darken-4" 
            dark
            @click="$emit('search', search)"
            >Найти
        </v-btn>
        <v-btn 
            class="mx-2" 
            fab dark small 
            color="red"
            @click="clearSearch">
            <v-icon dark>mdi-close-circle</v-icon>
        </v-btn>
    </v-col>
</template>

<script>
export default {
    data: () => ({
        search: ''
    }),
    methods: {
        clearSearch() {
            this.search = ''
            this.$emit('search', this.search)
        }
    }
}
</script>