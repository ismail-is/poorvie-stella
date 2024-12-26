<template>
  <CommonLoading />
  <Navbar theme="light" />
  <Header :headerData="headerData" />
  <Works theme="light" />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Works from '@/components/Mobile-app/Works';
import Footer from '@/components/Mobile-app/Footer';

//= Page Metadata
definePageMeta({
  layout: "mobile-app-light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Light`
});

const headerData = {
  title: "Latest Works",
  page: "Portfolio"
}
</script>
