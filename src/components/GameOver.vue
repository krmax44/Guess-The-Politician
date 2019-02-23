<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-text>
        <p>Game's up! The winner is {{ winner.name }} with {{ winner.points }} points! Congrats!</p>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['winner']
};
</script>
