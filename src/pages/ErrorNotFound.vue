<template>
  <q-page
    class="text-center bg-white"
    @mousemove="eyeMovement"
  >
    <div class="box__ghost">
      <div
        class="symbol"
        v-for="n in 6"
        :key="n"
      />
      <div class="box__ghost-container">
        <q-img
          width="100px"
          src="/svg/ghost.svg"
        />
        <div
          class="box__ghost-eyes"
          :style="style"
        >
          <div class="box__eye-left"/>
          <div class="box__eye-right"/>
        </div>
      </div>
      <div class="box__ghost-shadow"/>
      <div class="q-mt-lg">
        <h1 class="error">
          404
        </h1>
        <div>
          Page is not available
        </div>
        <q-btn
          class="q-mt-xl"
          color="primary"
          to="/"
          label="To Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue"
import { useMeta, useQuasar } from "quasar"

const style = ref('')
const $q = useQuasar()

const eyeMovement = (e) => {
  let pageX = $q.screen.width;
  let pageY = $q.screen.height;
  let mouseY
  let mouseX
  mouseY = e.pageY;
  let yAxis = (pageY/3-mouseY)/pageY*300;
  mouseX = e.pageX / -pageX;
  let xAxis = -mouseX * 100 - 100;
  style.value=`transform:translate(${xAxis}%,${yAxis*-1}%)`;
}

const metaData = {
  title: '404 | Kate Kurkina | Front-end developer`s portfolio',
  meta: {
    description: {
      name: 'description',
      content: 'Page is not available'
    }
  }
}

useMeta(metaData)
</script>

<style lang="scss">
@import "src/css/quasar.variables";

.error {
  margin: 0;
  font-weight: 700;
  font-size: 200px;
  line-height: 250px;
}

.box__ghost {
  padding: 15px 25px 25px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  & .symbol{
    &:nth-child(1) {
      opacity: .2;
      animation: shine 4s ease-in-out 3s infinite;
      &:before, &:after {
        content: '';
        width: 12px;
        height: 4px;
        background: $black;
        position: absolute;
        border-radius: 5px;
        bottom: 65px;
        left: 0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    &:nth-child(2) {
      position: absolute;
      left: -5px;
      top: 30px;
      height: 18px;
      width: 18px;
      border: 4px solid $black;
      border-radius: 50%;
      opacity: .2;
      animation: shine 4s ease-in-out 1.3s infinite;
    }
    &:nth-child(3) {
      opacity: .2;
      animation: shine 3s ease-in-out .5s infinite;
      &:before, &:after {
        content: '';
        width: 12px;
        height: 4px;
        background: $white;
        position: absolute;
        border-radius: 5px;
        top: 5px;
        left: 40px;
      }
      &:before {
        transform: rotate(90deg);
      }
      &:after {
        transform: rotate(180deg);
      }
    }
    &:nth-child(4) {
      opacity: .2;
      animation: shine 6s ease-in-out 1.6s infinite;
      &:before, &:after {
        content: '';
        width: 15px;
        height: 4px;
        background: $white;
        position: absolute;
        border-radius: 5px;
        top: 10px;
        right: 30px;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    &:nth-child(5) {
      position: absolute;
      right: 5px;
      top: 40px;
      height: 12px;
      width: 12px;
      border: 3px solid $black;
      border-radius: 50%;
      opacity: .2;
      animation: shine 1.7s ease-in-out 7s infinite;
    }
    &:nth-child(6) {
      opacity: .2;
      animation: shine 2s ease-in-out 6s infinite;
      &:before, &:after {
        content: '';
        width: 15px;
        height: 4px;
        background: $black;
        position: absolute;
        border-radius: 5px;
        bottom: 65px;
        right: -5px;
      }
      &:before {
        transform: rotate(90deg);
      }
      &:after {
        transform: rotate(180deg);
      }
    }
  }
  & .box__ghost-container {
    width: 100px;
    height: 100px;
    border-radius: 100px 100px 0 0;
    position: relative;
    margin: 0 auto;
    animation: up_down 3s ease-in-out infinite;
    & .box__ghost-eyes {
      position: absolute;
      left: 50%;
      top: 45%;
      height: 12px;
      width: 70px;
      & .box__eye-left {
        width: 12px;
        height: 12px;
        background: $white;
        border-radius: 50%;
        margin: 0 10px;
        position: absolute;
        left: 0;
      }
      & .box__eye-right {
        width: 12px;
        height: 12px;
        background: $white;
        border-radius: 50%;
        margin: 0 10px;
        position: absolute;
        right: 0;
      }
    }
  }
  & .box__ghost-shadow {
    height: 20px;
    box-shadow: 0 50px 15px 5px rgb(196, 111, 169);
    border-radius: 50%;
    margin: 0 auto;
    animation: small_big 3s ease-in-out infinite;
  }
}

@media (max-width: 600px) {
  .error {
    font-size: 100px;
  }
}

@keyframes up_down {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(5px);
  }
}

@keyframes small_big {
  0% {
    width: 90px;
  }
  50% {
    width: 100px;
  }
  100% {
    width: 90px;
  }
}

@keyframes shine {
  0% {
    opacity: .2;
  }
  25% {
    opacity: .1;
  }
  50% {
    opacity: .2;
  }
  100% {
    opacity: .2;
  }
}
</style>
