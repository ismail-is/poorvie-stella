<template>
  <CommonLoading />
  <NavbarFullMenu theme="light" />
  <ShowcaseGrid />
</template>

<script setup>
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcaseGrid from '@/components/Showcases/ShowcaseGrid';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Showcase 3 Light`
});
</script>