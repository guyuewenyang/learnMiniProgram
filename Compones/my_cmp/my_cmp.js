// Compones/my_cmp/my_cmp.js
Component({
  

externalClasses:["titleclass"],

  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:['你','我','他']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curentIndex:0,
    num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrentIndexFunction(num){
      const index = parseInt(num)
      if (index>2) return
      this.setData({
        curentIndex:num
      })
    },

    handleClickAction (event){
      console.log(event)
      const index = event.currentTarget.dataset.index
      const title = event.currentTarget.dataset.title
      this.setData({
        curentIndex: index
      })
      this.triggerEvent("handleClickAction",{title:title},{})
    }
  }
})
