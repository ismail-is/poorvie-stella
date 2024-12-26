<template>
  <CommonLoading />
  <Navbar />
  <FreelanceHeader />
  <Services />
  <Works />
  <AboutUs />
  <FullTestimonials showHead />
  <Blogs />
  <ContactForm noLine />
  <Footer />
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import FreelanceHeader from '@/components/Headers/FreelanceHeader';
import Services from '@/components/Services/Services5';
import Works from '@/components/Works/Works5';
import AboutUs from '@/components/AboutUs/AboutUs5';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Blogs from '@/components/Blogs/Blogs2';
import ContactForm from '@/components/Contact/ContactFormS';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Freelancer Dark`
});
</script>