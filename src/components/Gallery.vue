<template>
  <div>  
    <masonry :cols="{default: 3, 768: 2, 480: 1}" :gutter="5">
      <div><img v-img:group src="../assets/images/photo-001.png"></div>
      <div><img v-img:group src="../assets/images/photo-002.png"></div>
      <div><img v-img:group src="../assets/images/photo-003.png"></div>
      <div><img v-img:group src="../assets/images/photo-004.png"></div>
      <div><img v-img:group src="../assets/images/photo-005.png"></div>
      <div><img v-img:group src="../assets/images/photo-006.png"></div>
      <div><img v-img:group src="../assets/images/photo-007.png"></div>
      <div><img v-img:group src="../assets/images/photo-008.png"></div>
      <div><img v-img:group src="../assets/images/photo-009.png"></div>
      <div><img v-img:group src="../assets/images/photo-010.png"></div>
      <div><img v-img:group src="../assets/images/photo-011.png"></div>
      <div><img v-img:group src="../assets/images/photo-012.png"></div>
    </masonry>
  </div>
</template>

<style lang="scss">
  @import '../assets/styles/variables.scss';
  @import '../assets/styles/gallery.scss';
</style>