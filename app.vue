<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="carros">Carros</NuxtLink>
        <NuxtLink to="motos">Motos</NuxtLink>
    </nav>
    <div>
        <NuxtPage />
    </div>
</template>

<style>
nav {
    display: flex;
    gap: 1rem;
}
</style>
