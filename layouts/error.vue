<template>
    <div class="error-page">
        <div class="container">
            <h1>Sorry..could not find what you were looking for.</h1>
            <nuxt-link to="/">Go to homepage?</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
</style>