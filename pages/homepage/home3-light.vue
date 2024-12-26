<template>
  <CommonLoading />
  <Navbar theme="light" />
  <Header />
  <Services />
  <Works />
  <FunFacts />
  <FullTestimonials withIMG="/img/testim-img.jpg" />
  <Team />
  <Blogs />
  <Footer hideBGCOLOR />
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header3';
import Services from '@/components/Services/Services2';
import FunFacts from '@/components/FunFacts/FunFacts2';
import Works from '@/components/Works/Works2';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team1';
import Blogs from '@/components/Blogs/Blogs3';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Corporate Business Light`
});
</script>