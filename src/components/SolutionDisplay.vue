<template>
  <v-card>
    <v-img :src="solution.image" class="media-image"/>
    <v-card-text>
      <p>The solution is {{ solution.answer }}.</p>
      <p>{{ solution.winner ? `${solution.winner} got it right and therefore gains a point!` : `Noone correctly guessed this round. In order to win, you need to guess correctly. See how this works? Moving on. Positivity!` }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['solution']
};
</script>
