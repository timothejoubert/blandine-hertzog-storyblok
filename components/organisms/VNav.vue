<script setup lang="ts">
import {getMainMenu} from "~/utils/mainMenu";

const navItems = getMainMenu()
</script>

<template>
  <nav :class="$style.root">
    <ul :class="$style.list">
      <li v-for="item in navItems" :key="item.id" :class="$style.item">
        <NuxtLink :to="item.url" :class="$style.link">{{item.label}}
          <div :class="$style.icon"></div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" module>
.root {
}

.list {
  display: flex;
}

.item {
  flex-grow: 1;
  padding: rem(6) rem(14);
}

.link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  width: rem(12);
  aspect-ratio: 1;
  background-color: color(black);
}
</style>
