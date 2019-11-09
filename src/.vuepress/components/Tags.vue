<template>
  <div>
      <a v-for="tag in Object.keys($tags._metaMap)":href="tag">{{tag}}</a>
  </div>
</template>