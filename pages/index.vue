<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">😁Hello, I'm Shogo Uenaka!</h1>
    <p class="text-base text-gray-900 p-2 italic">Vue Developer at 180 Inc.</p>
  </section>

  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">My Story</h2>
      <p class="text-lg py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio, velit esse nihil nulla
        vero ratione maxime voluptatum. Cumque dolorem earum, dolores porro atque facilis neque et necessitatibus quae
        doloremque!</p>
      <p class="text-lg py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio, velit esse nihil nulla
        vero ratione maxime voluptatum. Cumque dolorem earum, dolores porro atque facilis neque et necessitatibus quae
        doloremque!</p>
    </div>
    <img src="~/assets/images/IMG_8983 copy.jpg" class=" md:max-w-sm mx-auto">
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10 mb-8">
      <BlogPost :posts="posts"></BlogPost>
    </div>
  </section>
</template>

<script setup>
  const { data: posts } = await useAsyncData('latest-posts', () => {
    return queryContent('/blog')
      .sort({ data: 1})
      .limit(3)
      .find()
  });

</script>

<style scoped></style>