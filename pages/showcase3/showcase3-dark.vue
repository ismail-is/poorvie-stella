<template>
  <CommonLoading />
  <NavbarFullMenu />
  <ShowcaseGrid />
</template>

<script setup>
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcaseGrid from '@/components/Showcases/ShowcaseGrid';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Showcase 3 Dark`
});
</script>