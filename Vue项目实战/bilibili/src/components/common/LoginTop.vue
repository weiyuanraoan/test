<template>
  <div class="NavTop">
    <!-- 实现flex组件 -->
    <div></div>
    <div>{{Text}}</div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Text"]
};
</script>


<style scoped lang="less">
.NavTop {
  height: 12.889vw;
  background-color: white;
  display: flex;

  div {
    // vw布局
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>