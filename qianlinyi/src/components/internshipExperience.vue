<template>
  <div class="internshipExperience">
    <div class="title">
      <b>实习经历</b>
    </div>
    <div class="separateLine"></div>
    <div class="content">
      <div><b>公司：</b>
        <a href="https://cn.horizon.ai/">地平线</a>
      </div>
      <div>
        <b>职位：</b>软件开发工程师
      </div>
      <div>
        <b>工作时间：</b>2021.12 - 2022.03
      </div>
      <div>
        <b>工作内容：</b>
        <ul>
          <li>负责智能座舱相关软件的开发工作</li>
          <li>参与负责数据处理相关流程建设与完善工作</li>
          <li>保证软件在自研芯片上的稳定、高性运行，且具备相当的可扩展性</li>
          <li>与其它各子系统工程师协同完成集成测试、系统测试</li>
          <li>参与软件质量控制工作，保证软件版本质量</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'internshipExperience'
}
</script>

<style scoped>
.internshipExperience {
  text-align: left;
  line-height: 1.5rem;
  padding: 10px;
}

.internshipExperience .title {
  font-size: 1.5rem;
  padding-bottom: 10px;
}

.separateLine {
  height: 1px;
  border: 1px solid black;
}

.internshipExperience .content {
  padding: 10px;
}
</style>
