<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-img v-if="fact.mediatype === 'image'" :src="fact.content" class="media-image"/>
      <v-card-text>
        <p>{{ fact.mediatype !== 'image' ? fact.content : fact.additionalcontent }}</p>

        <p v-if="fact.additionalcontent && fact.mediatype !== 'image'">{{ fact.additionalcontent }}</p>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['fact']
};
</script>

<style scoped>
.media-image {
  background-color: #fff;
  max-height: 40vh;
}
</style>
