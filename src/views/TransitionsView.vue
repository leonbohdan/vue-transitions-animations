<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>

<template>
  <div class="transitions">
    <h1>Transitions</h1>

    <div class="transitions__menu">
      <button v-wave class="transitions__menu-btn" @click="showMenu = !showMenu">
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
  </div>
</template>

<style lang="sass">
.transitions
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  &__menu
    min-height: 100%

  &__menu-btn
    padding: 10px 20px
    margin-bottom: 20px
    min-width: 200px

  &__list
    &.v-enter-active,
    &.v-leave-active
      transition: opacity 0.5s ease, transform 0.5s ease


    &.v-enter-from
      opacity: 0
      transform: translateY(-20px)

    &.v-leave-to
      opacity: 0
      transform: translateY(20px)

</style>