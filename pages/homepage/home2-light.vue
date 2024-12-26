<template>
  <CommonLoading />
  <Navbar theme="light" />
  <Header />
  <Services oStyle="4item" />
  <Video />
  <Portfolio :grid="3" filterPosition="center" />
  <FullTestimonials noPadding />
  <Team theme="light" />
  <Blogs />
  <CallToAction />
  <Footer />
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header2';
import Services from '@/components/Services/Services1';
import Video from '@/components/Others/Video';
import Portfolio from '@/components/Portfolio';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team2';
import Blogs from '@/components/Blogs/Blogs2';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Creative Agency Light`
});
</script>