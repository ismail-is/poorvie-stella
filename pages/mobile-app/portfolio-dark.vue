<template>
  <CommonLoading />
  <Navbar ref="navbar" />
  <Header :headerData="headerData" />
  <Works theme="dark" />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Works from '@/components/Mobile-app/Works';
import Footer from '@/components/Mobile-app/Footer';

//= Page Metadata
definePageMeta({
  layout: "mobile-app-dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Dark`
});

const headerData = {
  title: "Latest Works",
  page: "Portfolio"
}
</script>
