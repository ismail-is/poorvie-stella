<template>
  <CommonLoading />
  <Navbar />
  <SliderHeader ref="fixedSlider" />
  <div class="main-content" ref="MainContent">
    <AboutUs />
    <Services lines />
    <Portfolio grid="2" filterPosition="left" />
    <Testimonials />
    <Clients theme="light" length="4" />
    <Team />
    <Blogs />
    <SContactForm />
    <Footer hideBGCOLOR />
  </div>
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs2';
import Services from '@/components/Services/Services1';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials/TestimonialsWithVideo';
import Clients from '@/components/Clients/Clients2';
import Team from '@/components/Team/Team1';
import Blogs from '@/components/Blogs/Blogs4';
import SContactForm from '@/components/Contact/ContactFormS';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Business One Page Light`
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