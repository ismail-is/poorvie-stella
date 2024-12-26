<template>
  <CommonLoading />
  <div class="circle-bg">
    <div class="circle-color fixed">
      <div class="gradient-circle"></div>
      <div class="gradient-circle two"></div>
    </div>
  </div>
  <Navbar />
  <WorksHeader />
  <div class="main-content">
    <Works />
    <Footer />
  </div>
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import WorksHeader from '@/components/Headers/WorksHeader';
import Works from '@/components/Works/WorksStyle1';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Works Dark`
});

</script>