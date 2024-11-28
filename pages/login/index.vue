<script setup>
definePageMeta({
    layout: "login",
});
</script>

<template>
    <div>
        <h1>Faça seu Login</h1>
        <form>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" name="" id="email" />
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" name="" id="password" />
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
</template>
