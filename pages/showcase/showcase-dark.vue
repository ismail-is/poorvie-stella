<template>
  <CommonLoading />
  <NavbarFullMenu />
  <ShowcasesFullScreen />
</template>

<script setup>
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Showcase Dark`
});
</script>