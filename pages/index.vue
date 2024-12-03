<script setup>
const counter = useCounterStore();
</script>

<template>
    <TitlePage text="Index" />
    <Card>
        <ul class="bg-red-500 mt-20">
            <li><Icon name="logos:nuxt-icon" /> item 1</li>
            <li><Icon name="logos:vue" /> item 2</li>
        </ul>
    </Card>

    <div class="py-4">
        <p>Contagem atual: {{ counter.count }}</p>

       
        <button
            class="bg-red-500 text-white rounded-lg py-1 px-2 ms-2"
            @click="counter.decrement"
        >
            Remover 1
        </button>
    </div>
</template>

<style>
* {
    font-family: "Yuji Mai";
}
</style>
