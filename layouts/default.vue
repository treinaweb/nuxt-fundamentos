<template>
    <div>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="carros">Carros</NuxtLink>
            <NuxtLink to="motos">Motos</NuxtLink>
        </nav>
        <slot />
    </div>
</template>

<style>
nav {
    display: flex;
    gap: 1rem;
}

a {
    color: #216430;
}

.router-link-active {
    color: #5cc975;
}
</style>
