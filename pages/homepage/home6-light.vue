<template>
  <CommonLoading />
  <Navbar />
  <SliderHeader ref="fixedSlider" />
  <div class="main-content" ref="MainContent">
    <Services serviceMB50 />
    <AboutUs />
    <FunFacts />
    <Works />
    <Testimonials />
    <Blogs />
    <CallToAction img="/img/patrn1.png" />
    <Footer />
  </div>
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import Services from '@/components/Services/Services4';
import AboutUs from '@/components/AboutUs/AboutUs4';
import FunFacts from '@/components/FunFacts/FunFacts1';
import Works from '@/components/Works/Works4';
import Testimonials from '@/components/Testimonials/FullTestimonials';
import Blogs from '@/components/Blogs/Blogs2';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Modern Agency Light`
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