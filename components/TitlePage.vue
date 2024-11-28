<template>
    <div>
        <h1>Essa é a Página de {{ text }}</h1>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    text: String,
});
</script>
