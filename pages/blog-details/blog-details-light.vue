<template>
  <CommonLoading />
  <div class="circle-bg">
    <div class="circle-color fixed">
      <div class="gradient-circle"></div>
      <div class="gradient-circle two"></div>
    </div>
  </div>
  <Navbar theme="light" />
  <PageHeader title="Blog Details." paragraph="All the most current news and events of our creative team." />
  <BlogDetails />
  <Footer />
</template>

<script setup>
//= Page components
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogDetails from '@/components/Blogs/BlogDetails';
import Footer from '@/components/Common/Footer';

//= Page Metadata
definePageMeta({
  layout: "light",
});

//= Page Head
useHead({
  titleTemplate: `%s - Blog Details Light`
});
</script>