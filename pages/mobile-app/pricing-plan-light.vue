<template>
  <CommonLoading />
  <Navbar theme="light" />
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
  layout: "mobile-app-light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Pricing Light`
});

const headerData = {
  title: "Pricing Package",
  page: "Pricing"
}
</script>
