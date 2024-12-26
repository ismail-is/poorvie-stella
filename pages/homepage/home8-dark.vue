<template>
  <CommonLoading />
  <NavbarArch />
  <Header />
  <AboutUs />
  <Services />
  <Works />
  <CaseStudy />
  <Team />
  <TestimonialsArcho />
  <LatestNews />
  <ContactArcho />
  <FooterArch />
</template>

<script setup>
//= Page components
import NavbarArch from '@/components/Common/NavbarArch';
import Header from '@/components/Headers/Header5';
import AboutUs from '@/components/AboutUs/AboutUs6';
import Services from '@/components/Services/Services6';
import Works from '@/components/Works/Works6';
import Team from '@/components/Team/Team3';
import CaseStudy from '@/components/Others/CaseStudy';
import TestimonialsArcho from '@/components/Testimonials/TestimonialsArcho';
import LatestNews from '@/components/Others/LatestNews';
import ContactArcho from '@/components/Contact/ContactArcho';
import FooterArch from '@/components/Common/FooterArch';

//= Page Metadata
definePageMeta({
  layout: "arch-dark",
});

//= Page Head
useHead({
  titleTemplate: `%s - Architecture Dark`,
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
    },
  ]
});
</script>