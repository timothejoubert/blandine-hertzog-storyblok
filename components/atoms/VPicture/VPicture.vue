<script  lang="ts" setup>
// https://image.nuxt.com/providers/storyblok#storyblok-modifiers

interface StoryblokFilter {
  blur?: string | number
  grayscale?: string // ''
  round_corner? : string // 'value,r,g,b,alpha' = '3000,255,255,255,1'
}
interface StoryblokMedia {
  alt: string
  copyright: string
  fieldtype: string
  filename: string
  focus: string
  id: number
  is_external_url: boolean
  is_private: string
  meta_data: {}
  name: string
  source: string
  title: string
}

interface VPictureProps {
  image: StoryblokMedia
  provider?: string
  quality?: string
  loading?: 'lazy' | 'eager'
  filters?: StoryblokFilter
}

defineProps<VPictureProps>()
</script>

<template>
  <NuxtPicture
      format="webp"
      densities="1"
      :provider="provider || 'storyblok'"
      :quality="quality || 75"
      :src="image.filename"
      :modifiers="filters ? { filters } : undefined"
      :loading="loading || 'lazy'"
      :class="$style.root"
  />
</template>

<style lang="scss" module>
.root {
  display: inline-block;

  img {
    width: 100%;
    height: auto;
  }
}
</style>

<!--<script setup lang="ts">-->

<!--interface StoryblokMedia {-->
<!--  alt: string-->
<!--  copyright: string-->
<!--  fieldtype: string-->
<!--  filename: string-->
<!--  focus: string-->
<!--  id: number-->
<!--  is_external_url: boolean-->
<!--  is_private: string-->
<!--  meta_data: {}-->
<!--  name: string-->
<!--  source: string-->
<!--  title: string-->
<!--}-->

<!--interface VPictureProps {-->
<!--  image?: StoryblokMedia-->
<!--  src?: string-->
<!--  sizes?: string-->
<!--  crop?: string-->
<!--  ratio?: number-->
<!--  provider?: string-->
<!--  quality?: string-->
<!--  format?: string-->
<!--  loading?: 'lazy' | 'eager'-->
<!--  blur?: string | number-->
<!--  radius?: string-->
<!--}-->

<!--type VPictureKeyProp = keyof VPictureProps-->

<!--const props = withDefaults(defineProps<VPictureProps>(), {-->
<!--  provider: 'storyblok',-->
<!--  format: 'webp',-->
<!--  quality: '70'-->
<!--})-->

<!--const src = computed(() => props.image?.filename || props.src)-->

<!--const storyblokModfifierList = ['crop', 'quality', 'format', 'blur', 'radius']-->
<!--const storyblokFilters = ['quality', 'format', 'blur', 'radius']-->

<!--const modifiers = computed(() => {-->
<!--  return storyblokModfifierList.reduce((acc: Record<VPictureKeyProp, any>, key: VPictureKeyProp) => {-->
<!--    const propValue = props?.[key]-->
<!--    if (propValue) acc[key] = propValue-->
<!--    return acc-->
<!--  }, {})-->
<!--})-->


<!--const storyblokUrlParams = computed(() => {-->
<!--  const modifierKeys = Object.keys(modifiers.value)-->
<!--  if (props.provider !== 'storyblok' || !modifierKeys.length) return-->

<!--  let params = ''-->

<!--  // TODO: When use storyblok crop modifier all generated sizes urls keep cropped size-->
<!--  // should be proportional to current size-->
<!--  if (modifiers.value?.crop) params += modifiers.value.crop-->

<!--  const filters = Object.keys(modifiers.value).filter(key => storyblokFilters.includes(key))-->
<!--  if (filters.length < 1) return params-->
<!--  else if (!!params) params += '/'-->

<!--  Object.entries(modifiers.value).filter(([key]) => storyblokFilters.includes(key)).forEach(([key, value], i) => {-->
<!--    if (i === 0) params += 'filters'-->
<!--    params += `:${key}(${value})`-->
<!--  })-->

<!--  return `/${params}`-->
<!--})-->


<!--const srcFinal = computed(() => {-->
<!--  if(!storyblokUrlParams.value) return src.value-->

<!--  return `${src.value}/m${storyblokUrlParams.value}`-->
<!--})-->

<!--const parentAttrs = useAttrs()-->

<!--const width = computed(() => props.crop?.split('x')?.[0] || parentAttrs.width)-->
<!--const height = computed(() => props.crop?.split('x')?.[1] || parentAttrs.height)-->

<!--console.log(width.value, height.value)-->

<!--const img = useImage()-->
<!--const formattedSizes =-->
<!--    typeof props.sizes === 'string' ? props.sizes.split(' ') : props.sizes && Object.values(props.sizes)-->
<!--const webpSizes = img.getSizes(src.value, { provider:'storyblok', sizes: props.sizes, modifiers: modifiers.value }, formattedSizes)-->

<!--console.log(src.value, { provider:'storyblok',sizes: props.sizes, modifiers: modifiers.value }, formattedSizes)-->
<!--console.log(formattedSizes, webpSizes)-->

<!--const attrs = computed(() => {-->
<!--  const attrs: Record<string, unknown> = {}-->

<!--  if (!props.sizes) attrs.sizes = 'xs:100vw lg:100vw hd:100vw'-->
<!--  if (!props.loading) attrs.loading = 'lazy'-->
<!--  if (props.crop && !parentAttrs.width && !parentAttrs.height) {-->
<!--    const [w, h] = props.crop.split('x')-->
<!--    attrs.width = w-->
<!--    attrs.height = h-->
<!--  }-->

<!--  if(props.image?.alt) attrs.alt = props.image?.alt-->

<!--  return attrs-->
<!--})-->

<!--const style = computed(() => {-->
<!--  const style: Record<string, unknown> = {}-->

<!--  if (width.value && height.value || props.ratio) {-->
<!--    style['&#45;&#45;v-picture-aspect-ratio'] = props.ratio || Number(width.value) / Number(height.value) + ''-->
<!--  }-->

<!--    return style-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <NuxtPicture :class="$style.root" v-bind="attrs" :src="srcFinal" :style="style" densities="1"/>-->
<!--</template>-->

<!--<style lang="scss" module>-->
<!--.root {-->
<!--  position: relative;-->
<!--  display: inline-block;-->
<!--  aspect-ratio: var(&#45;&#45;v-picture-aspect-ratio);-->

<!--  img {-->
<!--    //width: 100%;-->
<!--    //height: auto;-->
<!--  }-->
<!--}-->
<!--</style>-->
