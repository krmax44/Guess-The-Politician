<template>
  <div class="guess-input">
    <v-text-field
      solo
      label="Take an educated guess..."
      append-icon="send"
      v-model="guess"
      :success="right"
      :error="wrong"
      :class="{ wrong }"
      @keyup.enter="enter"
      @click:append="enter"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      guess: '',
      right: false,
      wrong: false
    };
  },
  methods: {
    enter() {
      this.$socket.emit('takeGuess', {
        guess: this.guess
      });
    }
  },
  sockets: {
    inputRight() {
      this.right = true;
      setTimeout(() => {
        this.right = false;
      }, 300);
    },
    inputWrong() {
      this.wrong = true;
      setTimeout(() => {
        this.wrong = false;
        this.guess = '';
      }, 300);
    }
  }
};
</script>

<style scoped>
.guess-input {
  position: fixed;
  bottom: -28px;
  left: 0;
  right: 0;
}

@keyframes shake {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  25%,
  75% {
    transform: translate3d(-10px, 0, 0);
  }

  50% {
    transform: translate3d(10px, 0, 0);
  }
}

.wrong >>> div {
  animation-name: shake;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
</style>