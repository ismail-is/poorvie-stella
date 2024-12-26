<template>
  <CommonLoading />
  <Navbar />
  <Header :headerData="headerData" />
  <Features />
  <Statstics theme="dark" />
  <Pricing bgGray="1" />
  <FAQ />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Features from '@/components/Mobile-app/Features';
import Statstics from '@/components/Mobile-app/Stats';
import Pricing from '@/components/Mobile-app/Pricing';
import FAQ from '@/components/Mobile-app/FAQ';
import Footer from '@/components/Mobile-app/Footer';

//= Page Metadata
definePageMeta({
  layout: "mobile-app-dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Services Dark`
});

const headerData = {
  title: "Popular Services",
  page: "Services"
}
</script>
