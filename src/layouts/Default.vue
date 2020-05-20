<template>
    <v-content>
        <v-container>
            <h1 class="body-2 mb-2">Стоп лист</h1>
            <v-breadcrumbs 
                :items="items"
                class="pl-0 pt-0"
                />
            <router-view />
        </v-container>
    </v-content>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                text: 'Главная',
                href: 'home-page',
            },
            {
                text: 'Стоп-лист',
                disabled: true,
                href: 'stop-list',
            },
        ],
    })
}
</script>