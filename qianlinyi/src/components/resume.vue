<template>
  <div class="resume">
    <Personal></Personal>
    <EducationalBackground></EducationalBackground>
    <InternshipExperience></InternshipExperience>
    <competitionExperience></competitionExperience>
  </div>
</template>

<script>
import Personal from './personalInfo'
import EducationalBackground from './educationalBackground'
import InternshipExperience from './internshipExperience'
import CompetitionExperience from './competitionExperience'

export default {
  name: 'HelloWorld',
  components: {CompetitionExperience, InternshipExperience, EducationalBackground, Personal},
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

/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/

/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/

a {
  color: #42b983;
}

.resume {
  display: block;
}
</style>
