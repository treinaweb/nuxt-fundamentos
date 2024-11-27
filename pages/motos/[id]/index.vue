<script setup>
const route = useRoute();
</script>

<template>
    <div>
        <h1>Essa é a moto de ID: {{ route.params.id }}</h1>
    </div>
</template>
