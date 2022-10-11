<template>
  <div class="resume">
    <Personal></Personal>
    <EducationalBackground></EducationalBackground>
  </div>
</template>

<script>
import Personal from './Personal'
import EducationalBackground from './EducationalBackground'

export default {
  name: 'HelloWorld',
  components: {EducationalBackground, Personal},
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
