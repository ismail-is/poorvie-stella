<template>
  <CommonLoading />
  <DemosCircleBg />
  <DemosHeader />
  <DemosMainContent />
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Demos`
});
</script>