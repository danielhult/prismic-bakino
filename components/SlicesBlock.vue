<template>
    <section>
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'hero'">
                <hero-slice :slice="slice"></hero-slice>
            </template>
            <template v-else-if=" slice.slice_type==='quote'">
                <quote-slice :slice=" slice">
                </quote-slice>
            </template>
            <template v-else-if="slice.slice_type === 'text'">
                <text-slice :slice="slice"></text-slice>
            </template>
            <template v-else-if="slice.slice_type === 'image_gallery'">
                <image-gallery-slice :slice="slice"></image-gallery-slice>
            </template>
            <template v-else-if="slice.slice_type === 'employees'">
                <employees-slice :slice="slice"></employees-slice>
            </template>
        </section>
    </section>
</template>

<script>
// Imports for all slices
const HeroSlice = () => import('../components/slices/HeroSlice.vue');
const QuoteSlice = () => import('../components/slices/QuoteSlice.vue');
const TextSlice = () => import('../components/slices/TextSlice.vue');
const EmployeesSlice = () => import('../components/slices/EmployeesSlice.vue');
const ImageGallerySlice = () =>
    import('../components/slices/ImageGallerySlice.vue');

export default {
    props: ['slices'],
    name: 'slices-block',
    components: {
        HeroSlice,
        QuoteSlice,
        TextSlice,
        ImageGallerySlice,
        EmployeesSlice,
    },
};
</script>
