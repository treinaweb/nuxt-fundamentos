<script setup>
const counter = useCounterStore();
</script>

<template>
    <TitlePage text="Carros" />

    <div class="py-4">
        <p>Contagem atual: {{ counter.count }}</p>

        <button
            class="bg-blue-500 text-white rounded-lg py-1 px-2"
            @click="counter.increment"
        >
            Adicionar 1
        </button>
       
    </div>
</template>
