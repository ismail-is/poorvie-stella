<template>
  <CommonLoading />
  <Navbar grLogo="1" />
  <Header />
  <Brands />
  <Services />
  <Features />
  <Screenshots />
  <Process />
  <TeamVid />
  <Pricing />
  <Testimonials />
  <CallToAction />
  <Blog />
  <Footer />
</template>

<script setup>
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/Header';
import Brands from '@/components/Mobile-app/Brands';
import Services from '@/components/Mobile-app/Services';
import Features from '@/components/Mobile-app/Features';
import Screenshots from '@/components/Mobile-app/Screenshots';
import Process from '@/components/Mobile-app/Process';
import TeamVid from '@/components/Mobile-app/TeamVid';
import Pricing from '@/components/Mobile-app/Pricing';
import Testimonials from '@/components/Mobile-app/Testimonials';
import CallToAction from '@/components/Mobile-app/CallToAction';
import Blog from '@/components/Mobile-app/Blog';
import Footer from '@/components/Mobile-app/Footer';

//= Page Metadata
definePageMeta({
  layout: "mobile-app-dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Mobile App Dark`
});
</script>
