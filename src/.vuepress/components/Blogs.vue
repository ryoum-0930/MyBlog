<template>
  <div v-for="post in posts">
    <a href="post.path">{{post.title}}</a>
  </div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(page => page.type === 'post');
            }
        }
    }
</script>