<template>
  <v-app dark>
    <v-toolbar app color="primary">
      <v-toolbar-title>Guess The Politician</v-toolbar-title>
      <v-spacer/>
      <span v-if="party.id !== null && party.started === false">Join the party: {{ party.id }}</span>
    </v-toolbar>

    <v-content>
      <v-container fill-height>
        <v-layout
          align-center
          justify-space-around
          style="flex-direction: column; align-items: normal"
        >
          <template v-if="party.started" style="width: 100%; height: 100%">
            <PlayerScores :players="playersOrdered"/>
            <FactDisplay v-if="scene === 'fact'" :fact="fact"/>
            <SolutionDisplay v-if="scene === 'solution'" :solution="solution"/>
            <GuessInput v-if="scene === 'fact'"/>
            <GameOver v-if="scene === 'gameOver'" :winner="playersOrdered[0]"/>
          </template>

          <template v-if="!party.started">
            <PlayerScores v-if="party.id !== null" :players="playersOrdered"/>
            <EnterParty v-if="party.id === null"/>
            <WaitingForPlayers v-if="party.id !== null" :party="party" :players="players"/>
          </template>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import EnterParty from './components/EnterParty';
import WaitingForPlayers from './components/WaitingForPlayers';
import PlayerScores from './components/PlayerScores';
import GuessInput from './components/GuessInput';
import FactDisplay from './components/FactDisplay';
import SolutionDisplay from './components/SolutionDisplay';
import GameOver from './components/GameOver';

function initialState() {
  return {
    party: {
      id: null,
      started: false
    },
    player: {
      id: null,
      name: null,
      points: 0
    },
    players: [],
    fact: {
      mediatype: null,
      content: null,
      additionalcontent: null
    },
    solution: {
      answer: null,
      winner: null
    },
    scene: null
  };
}

export default {
  name: 'App',
  components: {
    EnterParty,
    WaitingForPlayers,
    PlayerScores,
    GuessInput,
    FactDisplay,
    SolutionDisplay,
    GameOver
  },
  data() {
    return initialState();
  },
  computed: {
    playersOrdered() {
      const players = this.players;
      return players.sort((a, b) => (a.points > b.points ? -1 : 1));
    }
  },
  sockets: {
    updateData(data) {
      this.party = data.party;
      this.players = data.players;
    },
    playerUpdate(data) {
      this.player = data;
    },
    nextTick(data) {
      this.scene = 'fact';
      this.fact = data;
    },
    correctPolitician(data) {
      this.scene = 'solution';
      this.solution = data;
    },
    gameOver() {
      this.scene = 'gameOver';
    },
    exitGame() {
      this.$data = initialState();
    }
  }
};
</script>
