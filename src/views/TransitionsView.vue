<script setup>
import { ref } from "vue";
import { useTransitionStore } from "@/stores/useTransitionStore";
import GsapTransition from "@/components/GsapTransition.vue";

const transitionStore = useTransitionStore();

const showMenu = ref(false);
const showGsap = ref(false);
</script>

<template>
  <div class="transitions">
    <h1>Transitions</h1>

    <button v-wave class="transitions__btn" @click="transitionStore.toggleModal(true)">
      Show Modal
    </button>

    <button v-wave class="transitions__btn" @click="showGsap = !showGsap">
      Show GSAP
    </button>

    <div class="transitions__menu">
      <button v-wave class="transitions__btn" @click="showMenu = !showMenu">
        {{ showMenu ? 'Hide' : 'Show'}} Menu
      </button>

      <Transition>
        <ul v-if="showMenu" class="transitions__list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Transition>
    </div>

    <GsapTransition>
      <div v-if="showGsap" class="transitions__circle"/>
    </GsapTransition>
  </div>
</template>

<style lang="sass">
.transitions
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  &__btn
    padding: 10px 20px
    margin-bottom: 20px
    min-width: 200px

  &__menu
    min-height: 100%

  &__list
    position: absolute
    bottom: 0

    &.v-enter-active,
    &.v-leave-active
      transition: opacity 0.5s ease, transform 0.5s ease


    &.v-enter-from
      opacity: 0
      transform: translateY(-20px)

    &.v-leave-to
      opacity: 0
      transform: translateY(20px)

  &__circle
    position: absolute
    bottom: -100px
    background-color: green
    width: 150px
    min-height: 150px
    border-radius: 50%
</style>