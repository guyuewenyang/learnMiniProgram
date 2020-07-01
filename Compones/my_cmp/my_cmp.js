// Compones/my_cmp/my_cmp.js
Component({

externalClasses:["titleclass"],

  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我是默认值',
      observer:function(newValue,oldValue){
        console.log(newValue,oldValue)
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
