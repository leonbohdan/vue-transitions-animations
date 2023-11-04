<script setup>
import { useTransitionStore } from "@/stores/useTransitionStore";

const transitionStore = useTransitionStore();
</script>

<template>
  <Transition duration="1400">
    <div v-if="transitionStore.showModal" class="modal__wrapper">
      <div class="modal__bg" @click="transitionStore.toggleModal()"/>

      <div class="modal">
        <button class="modal__close" @click="transitionStore.toggleModal()">X</button>
        <div class="modal__content">
          <h2>Hello World</h2>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="sass">
.modal
  position: relative
  background: #ffffff
  padding: 20px
  z-index: 2
  border-radius: 16px
  min-height: 200px
  min-width: 400px

  &__wrapper,
  &__bg
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    display: flex
    align-items: center
    justify-content: center

  &__bg
    background: rgba(0,0,0,0.4)

  &__close
    position: absolute
    top: 5px
    right: 5px
    font-size: 20px
    appearance: none
    background: none
    border: none
    cursor: pointer

.modal,
.modal__bg
  transition: all 1s ease

.v-enter-active .modal
  transition-delay: .4s

.v-leave-active .modal__bg
  transition-delay: .4s


.v-enter-from .modal__bg,
.v-leave-to .modal__bg
  opacity: 0

.v-enter-from .modal,
.v-leave-to .modal
  opacity: 0
  transform: translateY(-30px)
</style>