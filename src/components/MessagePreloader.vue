<template>
  <div class="preloader">
    <span class="preloader__spinner"></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  &__spinner {
    display: block;
    width: 50px;
    height: 50px;
    background-image: url('../assets/preloader.gif');
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
