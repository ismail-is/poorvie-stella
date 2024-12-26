<template>
  <CommonLoading />
  <Navbar />
  <SliderHeader ref="fixedSlider" />
  <div class="main-content" ref="MainContent">
    <AboutUs />
    <Services />
    <Works />
    <FunFacts />
    <Testimonials />
    <SkillsCircle theme="light" />
    <Clients theme="light" />
    <Blogs />
    <CallToAction />
    <Footer />
  </div>
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs1';
import Services from '@/components/Services/Services1';
import Works from '@/components/Works/Works1';
import FunFacts from '@/components/FunFacts/FunFacts1';
import Testimonials from '@/components/Testimonials/TestimonialsWithVideo';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import Clients from '@/components/Clients/Clients1';
import Blogs from '@/components/Blogs/Blogs1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Main Demo Light`
});

const fixedSlider = ref();
const MainContent = ref();

onMounted(() => {
  if (fixedSlider.value && MainContent.value) {
    const slideHeight = fixedSlider.value.fixedSlider.offsetHeight;
    MainContent.value.style.marginTop = slideHeight + "px";
  }
});
</script>