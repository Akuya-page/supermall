<template>
  <TabBar>
    <TabBarItem path="/home" active-color="blue">
      <img src="../assets/img/tabBar/all.svg" slot="item-icon">
      <img src="../assets/img/tabBar/all-active.svg" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category"  active-color="blue">
      <img src="../assets/img/tabBar/goods.svg" slot="item-icon">
      <img src="../assets/img/tabBar/goods-active.svg" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart"  active-color="blue">
      <img src="../assets/img/tabBar/cart.svg" slot="item-icon">
      <img src="../assets/img/tabBar/cart-active.svg" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile"  active-color="blue">
      <img src="../assets/img/tabBar/mine.svg" slot="item-icon">
      <img src="../assets/img/tabBar/mine-active.svg" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "@/components/TabBar/TabBar";
import TabBarItem from "@/components/TabBar/TabBarItem";
export default {
name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>

</style>