<template>
<div v-if="Testimonials">
  <div class="about">
    <h1>This is an about page</h1>
  <div v-for="test in Testimonials" >
    <h2>{{ test.name }}</h2>
  </div>
  </div>
</div>

<div v-if="Me">
<h2>{{ Me.me }}</h2>
</div>
</template>

<script>
export default {
  computed : {
    Testimonials() {
      console.log("hello")
      return this.$store.state.Testimonials
    },
    Me() {
      return this.$store.state.About
    }
  }
}
</script>

