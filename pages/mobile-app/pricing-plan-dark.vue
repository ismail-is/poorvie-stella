<template>
  <CommonLoading />
  <Navbar />
  <Header :headerData="headerData" />
  <Pricing />
  <CallToAction />
  <FAQ />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Pricing from '@/components/Mobile-app/Pricing2';
import CallToAction from '@/components/Mobile-app/CallToAction';
import FAQ from '@/components/Mobile-app/FAQ';
import Footer from '@/components/Mobile-app/Footer';

//= Page Metadata
definePageMeta({
  layout: "mobile-app-dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Pricing Dark`
});

const headerData = {
  title: "Pricing Package",
  page: "Pricing"
}
</script>
