<script setup>
import { shuffleArray } from "@/helpers";
import { ref } from "vue";

const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

const colors = ref(Array.from({length: 25}, () => randomColor()));
</script>

<template>
  <div v-wave class="animations">
    <h1>Animations</h1>
    <button v-wave-trigger class="animations__btn" type="button" @click="shuffleArray(colors)">Shuffle</button>

    <div v-auto-animate v-wave class="animations__box-wrapper">
      <div
        v-for="(color, i) in colors"
        :key="color"
        class="animations__box"
        :style="{ backgroundColor: color }"
        @click="colors.splice(i, 1)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.animations {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__btn {
    padding: 10px 20px;
    margin: 10px;
    max-width: 520px;
    width: 100%;
  }

  &__box-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 550px;
    max-width: 550px;
    gap: 5px;
  }

  &__box {
    height: 100px;
    width: 100px;
    border: 1px solid gray;
  }
}
</style>