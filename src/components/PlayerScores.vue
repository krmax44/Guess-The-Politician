<template>
  <v-layout align-center justify-space-around wrap>
    <v-badge overlap color="accent" v-for="player in players" :key="player.id" :title="player.name">
      <span slot="badge">{{ player.points }}</span>

      <v-avatar color="primary">
        <span class="white--text headline text-uppercase">{{ player.name.substring(0, 1) }}</span>
      </v-avatar>
    </v-badge>
  </v-layout>
</template>

<script>
export default {
  props: ['players']
};
</script>
