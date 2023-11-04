<template>
  <Transition
    enter-active-class="animate__animated animate__zoomInDown"
    leave-active-class="animate__animated animate__zoomOutDown"
  >
    <slot/>
  </Transition>
</template>
