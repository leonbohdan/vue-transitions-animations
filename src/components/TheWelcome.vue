<script setup>
import { shuffleArray } from "@/helpers";
import { ref } from "vue";

const pokemon = ref([]);

fetch('https://pokeapi.co/api/v2/pokemon?limit=7').then(async (res) => {
  pokemon.value = (await res.json()).results;
});

const add = () => {
  pokemon.value = [...pokemon.value, {name: `${new Date().getTime()}`}];
};
</script>

<template>
  <div class="welcome">
    <h1>
      Home
    </h1>

    <div v-if="pokemon.length">
      <TransitionGroup tag="ul">
        <li v-for="(creature, i) in pokemon" :key="creature.name">
          {{ creature.name }}
          <button @click="pokemon.splice(i, 1)">X</button>
        </li>
      </TransitionGroup>
      <button @click="shuffleArray(pokemon)">Shuffle</button>
      <button @click="add()">Add</button>
    </div>
  </div>
</template>

<style lang="sass">
.welcome
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  .v-move,
  .v-enter-active,
  .v-leave-active
    transition: all 0.5s ease

  .v-enter-from,
  .v-leave-to
    opacity: 0
    transform: translateX(30px)
    
  .v-leave-active
    position: absolute
</style>
