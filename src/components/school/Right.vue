<template>
    <el-table :data="tableData" height="250" style="width: 100%">
      <el-table-column prop="classname" label="班级名称" width="180" />
      <el-table-column prop="chineseTeacher.name" label="语文老师" width="180" />
      <el-table-column prop="mathTeacher.name" label="数学老师" />
      <el-table-column prop="englishTeacher.name" label="英语老师" />
    </el-table>
  </template>
  
  <script>
import { getNvrTreeNodeList } from '../../apis/apis.js';

export default {
  components: {},
  data() {
    return {
        tableData : []
    }
  },


  mounted () {
    const that = this;
    this.getSchoolClassAll();

//     axios
//       .post('http://localhost:5197/School/SchoolClass/All')
//       .then(function (response) {
//     console.log(response.data.data);
//     that.tableData = response.data.data;
//     console.log(that.tableData);
//   })
//       .catch(function (error) { // 请求失败处理
//         console.log(error);
//       });
      
  },
  methods: {

    getSchoolClassAll() {
      getNvrTreeNodeList();
        //var data = 
  //console.log(data);
    }

    // getNvrTreeNodeList() {
    //   getNvrTreeNodeList().then(res => {
    //     console.log(res);
    //     if (res.status === 200) {
	// 	    tableData=res.value;
    //         console.log(tableData);
    //     }
    //   })
    // }
}
}
  </script>
  