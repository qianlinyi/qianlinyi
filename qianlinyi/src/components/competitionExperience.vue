<template>
  <div class="competitionExperience">
    <div class="title">
      <b>比赛经历</b>
    </div>
    <div class="separateLine"></div>
    <div class="content">
      <div>
        <b>全国大学生数学竞赛(非数学类) 二等奖 2019.11</b>
      </div>
      <div>
        <b>蓝桥杯 C++组程序设计大学 A 组 全国二等奖 2020.11</b>
      </div>
      <div>
        <b>2021 中国高校计算机大赛-团体程序设计天梯赛 全国三等奖 2021.04</b>
      </div>
      <div>
        <b>2021 中国高校计算机大赛-团体程序设计天梯赛 个人二等奖 2021.04</b>
      </div>
      <div>
        <b>蓝桥杯 Python 组程序设计大学 A 组 全国二等奖 2021.06</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competitionExperience"
}
</script>

<style scoped>
.competitionExperience {
  text-align: left;
  line-height: 1.5rem;
  padding: 10px;
}

.competitionExperience .title {
  font-size: 1.5rem;
  padding-bottom: 10px;
}

.separateLine {
  height: 1px;
  border: 1px solid black;
}

.competitionExperience .content{
  padding: 10px;
}
</style>
