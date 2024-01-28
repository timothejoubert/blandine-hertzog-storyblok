<script setup lang="ts">

const route = useRoute()
const story = await useAsyncStoryblok('home', { version: 'draft' })
const api = useStoryblokApi()

useHead({
  title: story.value.name,
})

console.log(api)
</script>

<template>
    <div :class="$style.root">
      <h1>Page content: {{story.content.title }}</h1>
      <VPicture
          width="337"
          :image="story.content.media"
          sizes="xs:100vw md:25vw lg:25vw hd:25vw"
          :class="$style.media"
      />
      <div class="text-h2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto aspernatur dolores laudantium magnam nobis non odio officiis totam voluptatum! Accusantium delectus deserunt dignissimos eius expedita mollitia officiis provident quisquam reiciendis repellendus suscipit, ullam, voluptas voluptate? Nisi tenetur veniam voluptatum.
      </div>

      <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<style lang="scss" module>
.root {
  position: relative;
}

.media {
  width: 30%;
}
</style>
