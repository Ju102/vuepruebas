<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/halloween">Halloween</router-link></li>
      <li><router-link to="/christmas">Navidad</router-link></li>
      <li><router-link to="/newyear">Año Nuevo</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
</style>