<script setup>
import { computed, ref } from "vue";
import { shuffleArray } from "@/helpers";
import { gsap } from "gsap";

const pokemon = ref([]);
const search = ref('');
const matches = computed(() => {
  return pokemon.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()));
});

fetch('https://pokeapi.co/api/v2/pokemon?limit=7').then(async (res) => {
  pokemon.value = (await res.json()).results;
});

function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.1,
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.1,
    onComplete: done,
  });
}

const add = () => {
  pokemon.value = [...pokemon.value, {name: `${new Date().getTime()}`}];
};
</script>

<template>
  <div class="welcome">
    <h1>
      Home
    </h1>

    <input v-model="search" type="search">

    <div v-if="pokemon.length">
      <TransitionGroup
        tag="ul"
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
      >
        <li
          v-for="(creature, i) in matches"
          :key="creature.name"
          :data-index="i"
        >
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
