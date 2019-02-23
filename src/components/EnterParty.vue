<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-text>
        <v-text-field
          placeholder="Username"
          v-model="username"
          @submit.prevent="enter"
          @keyup.enter="enter"
        />
        <v-text-field
          placeholder="Party ID (leave empty to create a new one)"
          v-model="partyId"
          @submit.prevent="enter"
          @keyup.enter="enter"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn block flat @click="enter">Enter</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      partyId: ''
    };
  },
  methods: {
    enter() {
      if (this.partyId) {
        this.$socket.emit('joinParty', {
          name: this.username,
          party: this.partyId
        });
      } else {
        this.$socket.emit('createParty', {
          name: this.username
        });
      }
    }
  }
};
</script>
