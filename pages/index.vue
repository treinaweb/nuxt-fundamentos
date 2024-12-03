<script setup>
const counter = useCounterStore();
const mensagem = ref("");

const atualizarMensagem = () => {
    counter.updateMessage(mensagem.value);
    mensagem.value = "";
};
</script>

<template>
    <TitlePage text="Index" />
    <Card>
        <ul class="bg-red-500 mt-8">
            <li><Icon name="logos:nuxt-icon" /> item 1</li>
            <li><Icon name="logos:vue" /> item 2</li>
        </ul>
    </Card>

    <div class="py-4">
        <p>Contagem atual: {{ counter.count }}</p>
        <p>Contagem dobrada: {{ counter.doubleCount }}</p>

        <button
            class="bg-blue-500 text-white rounded-lg py-1 px-2"
            @click="counter.increment"
        >
            Adicionar 1
        </button>
        <button
            class="bg-red-500 text-white rounded-lg py-1 px-2 ms-2"
            @click="counter.decrement"
        >
            Remover 1
        </button>
    </div>
    <div class="py-4">
        <p>A mensagem é: {{ counter.message }}</p>
        <p>A mensagem tem {{ counter.messageLength }} caracteres</p>
        <input v-model="mensagem" class="border border-black" />
        <button
            @click="atualizarMensagem"
            class="bg-blue-500 text-white rounded-lg py-1 px-2 mt-2"
        >
            Atualizar Mensagem
        </button>
    </div>
    <div class="mb-80"></div>
</template>

<style>
* {
    font-family: "Yuji Mai";
}
</style>
