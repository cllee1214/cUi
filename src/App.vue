<template>
  <div>
      <c-button @click="testBtnClick">默认</c-button>
      <c-button @click="testBtnClick" type='success'>成功</c-button>
      <c-button @click="testBtnClick" type='warning' disabled>警告</c-button>
      <c-button @click="testBtnClick" type='danger' disabled>危险</c-button>
      <c-button @click="testBtnClick" type='primary' disabled>主要的</c-button>

      <c-button icon='c-icon-user'>用户</c-button>
      <c-button icon='c-icon-delete'>删除</c-button>
      <c-button icon='c-icon-delete' type='danger'>删除</c-button>
  </div>

  <div>
    <c-radio v-model="radio" label='选1'>选项一</c-radio>
    <c-radio v-model="radio" label='选2'>选项二</c-radio>

    <c-radio v-model="r2" label='1'>1</c-radio>
    <c-radio v-model="r2" label='2'>2</c-radio>

  </div>

  <div style="width: 220px">
    <c-input v-model="input" placeholder='请输入密码' type='text' prefix-icon='c-icon-date' clearable></c-input>
  </div>

  <div style="width: 130px">
    <c-select v-model="select">
      <c-option v-for="item in options" :key="item.label" :label='item.label' :value='item.value'></c-option>
    </c-select>
  </div>

<div></div>
</template>

<script>
import './assets/icon.css'
import {ref, watch, watchEffect, reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    const radio = ref('选2')
    const r2 = ref(2)
    const input = ref('6666')

    const select = ref('2')
    const options = reactive([
      {
        value:'1',
        label: '选项一'
      },
       {
        value:'2',
        label: '选项二'
      },
       {
        value:'3',
        label: '选项三'
      }
    ])

    watchEffect(() => {
      console.log(input.value)
      console.log(select.value)
    })
    return {
      radio,
      r2,
      input,
      options,
      select
    }
  },
  methods: {
    testBtnClick(e) {
      debugger
      console.log(e)
    }
  },
  watch: {
    radio: function(n,o) {
      console.log(n,o)
    }
  }
}
</script>
