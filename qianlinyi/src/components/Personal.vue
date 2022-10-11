<template>
  <div class="personal">
    <div class="name">
      <b>钱霖奕</b>
    </div>
    <div class="info">
      <div>电话：(+86)15189172699</div>
      <div>
        电子邮件：
        <a href="mailto:qianlinyi@hhu.edu.cn">
          qianlinyi@hhu.edu.cn
        </a>
      </div>
      <div>南京市江宁区秣陵街道佛城西路8号河海大学</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped>
.personal {
  line-height: 1.5rem; /*行距*/
  float: left;
  text-align: left;
}

.personal .name {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.personal .info {
  font-size: 1rem;
}
</style>
