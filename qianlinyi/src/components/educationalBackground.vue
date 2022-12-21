<template>
  <div class="educationalBackground">
    <div class="title">
      <b>教育背景</b>
    </div>
    <div class="separateLine"></div>
    <div class="content">
      <div>
        <b>河海大学计算机与信息学院 计算机科学与技术 本科 2018-2022</b>
      </div>
      <div>
        <b>河海大学计算机与信息学院 计算机科学与技术 硕士 2022-至今</b>
      </div>
      <ul>
        <li><b>绩点：</b></li>
        <li><b>外语证书:</b> CET-4 (562)，CET-6 (572) </li>
        <li><b>个人荣誉：</b>学业优秀奖学金，科技进步奖学金</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationalBackground'
}
</script>

<style scoped>
.educationalBackground {
  text-align: left;
  line-height: 1.5rem;
  padding: 10px;
}

.educationalBackground .title {
  font-size: 1.5rem;
  padding-bottom: 10px;
}

.educationalBackground .content {
  padding: 10px;
}

.separateLine {
  height: 1px;
  border: 1px solid black;
}
</style>
