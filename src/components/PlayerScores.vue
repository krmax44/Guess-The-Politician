<template>
  <v-layout align-center justify-space-around wrap>
    <v-badge
      overlap
      color="accent"
      v-for="player in playersOrdered"
      :key="player.id"
      :title="player.name"
    >
      <span slot="badge">{{ player.points }}</span>

      <v-avatar color="primary">
        <span class="white--text headline text-uppercase">{{ player.name.substring(0, 1) }}</span>
      </v-avatar>
    </v-badge>
  </v-layout>
</template>

<script>
export default {
  props: ['players'],
  computed: {
    playersOrdered() {
      const players = this.players;
      return players.sort((a, b) => (a.points > b.points ? -1 : 1));
    }
  }
};
</script>
