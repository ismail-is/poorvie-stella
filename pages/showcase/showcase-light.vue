<template>
  <CommonLoading />
  <NavbarFullMenu theme="light" />
  <ShowcasesFullScreen />
</template>

<script setup>
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Showcase Light`
});
</script>