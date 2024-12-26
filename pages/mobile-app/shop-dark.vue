<template>
  <CommonLoading />
  <Navbar />
  <Header :headerData="headerData" />
  <Shop />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Shop from '@/components/Mobile-app/Shop';
import Footer from '@/components/Mobile-app/Footer';

//= Page Metadata
definePageMeta({
  layout: "mobile-app-dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Shop Dark`
});

const headerData = {
  title: "Shop",
  page: "Shop"
}
</script>
