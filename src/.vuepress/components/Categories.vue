<template>
  <div>
    <ul v-for="category in Object.keys($categories._metaMap)">
      <h3><a :href="$categories._metaMap[category].path">{{ category }}</a></h3>
      <li v-for="post in $categories._metaMap[category].posts">
          <a :href="post.path">{{post.title}}</a>
      </li>
    </ul>
  </div>
</template>