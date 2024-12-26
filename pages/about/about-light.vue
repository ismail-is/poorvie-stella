<template>
  <CommonLoading />
  <Navbar theme="light" />
  <PagesHeader imageLink="/img/slid/about.jpg">
    <template v-slot:title>
      Our dedicated team of creatives is bursting with talent, experience and
      passion for what we do.
    </template>
  </PagesHeader>
  <AboutIntro />
  <Services oStyle="4item" />
  <TestimonialsWithVideo />
  <SkillsCircle from="aboutPage" />
  <Team />
  <MinimalArea />
  <Clients theme="light" />
  <CallToAction />
  <Footer />
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import PagesHeader from '@/components/Headers/PagesHeader';
import AboutIntro from '@/components/AboutUs/AboutIntro';
import Services from '@/components/Services/Services1';
import TestimonialsWithVideo from '@/components/Testimonials/TestimonialsWithVideo';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import Team from '@/components/Team/Team1';
import MinimalArea from '@/components/Others/MinimalArea1';
import Clients from '@/components/Clients/Clients1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - About Light`
});
</script>