<template>
  <CommonLoading />
  <div class="circle-bg">
    <div class="circle-color fixed">
      <div class="gradient-circle"></div>
      <div class="gradient-circle two"></div>
    </div>
  </div>
  <Navbar theme="light" />
  <PageHeader classText="sub-bg" title="Our News."
    paragraph="All the most current news and events of our creative team." />
  <BlogListed />
  <Footer />
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogListed from '@/components/Blogs/BlogListed';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Blog List Light`
});
</script>