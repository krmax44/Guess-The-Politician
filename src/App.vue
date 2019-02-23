<template>
  <v-app dark>
    <v-toolbar app color="primary">
      <v-toolbar-title>Guess The Politician</v-toolbar-title>
      <v-spacer/>
      <span v-if="party.id !== null && party.started === false">Join the party: {{ party.id }}</span>
    </v-toolbar>

    <PlayerScores v-if="started" :players="players"/>

    <v-content>
      <v-container fill-height>
        <v-layout align-center>
          <EnterParty v-if="party.id === null"/>
          <WaitingForPlayers
            v-if="party.id !== null && party.started === false"
            :party="party"
            :players="players"
          />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import EnterParty from './components/EnterParty';
import WaitingForPlayers from './components/WaitingForPlayers';

export default {
  name: 'App',
  components: {
    EnterParty,
    WaitingForPlayers
  },
  data() {
    return {
      party: {
        id: null,
        started: false
      },
      player: {
        id: null,
        name: null
      }
    };
  },
  computed: {
    started() {
      return this.party.id !== null && this.party.started === false;
    }
  },
  sockets: {
    dataUpdate(data) {
      this.party = data.party;
      this.player = data.player;
      this.players = data.players;
    }
  }
};
</script>
