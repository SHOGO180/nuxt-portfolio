<template>
  <h1 class="text-3xl my-8">
    Blog Posts
  </h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quos omnis, neque eligendi quis corrupti voluptatem
    similique atque quidem, cupiditate, ipsum possimus? Rem perferendis ipsa voluptatum ut recusandae, quia quo?
  </p>
  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <BlogPost :posts="posts"></BlogPost>
  </section>
</template>

<script setup> 
const { data: posts } = await useAsyncData('posts', () => {
return queryContent('/blog').find();
});

</script>