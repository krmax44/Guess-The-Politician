<template>
  <v-flex class="text-xs-center">
    <div>
      <v-icon x-large>group</v-icon>
    </div>
    <div>Waiting for players to join...</div>
    <v-btn v-if="players.length > 1" @click="start">Start game!</v-btn>
  </v-flex>
</template>

<script>
export default {
  props: ['party', 'players'],
  methods: {
    start() {
      this.$socket.emit('startParty', {
        party: this.party.id
      });
    }
  }
};
</script>
