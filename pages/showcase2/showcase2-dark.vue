<template>
  <CommonLoading />
  <NavbarFullMenu />
  <FullscreenCircleSide />
</template>

<script setup>
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import FullscreenCircleSide from '@/components/Showcases/FullscreenCircleSide';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Showcase 2 Dark`
});
</script>