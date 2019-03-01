<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="logo">
          <h1>CRUD Vue.js</h1>
        </div>
      </div>
    </header>
    <AppNav />
    <div class="content">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './components/layouts/Menu'

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>

<style src="./assets/sass/app.scss" lang="scss"></style>
