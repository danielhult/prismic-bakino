<template>
    <section class="employees__section">
        <div class="container">
            <div class="emloyees">
                <div v-for="(employee, index) in slice.items" :key="'employee' + index">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'employee-slice',
};
</script>

<style lang="scss">
</style>
