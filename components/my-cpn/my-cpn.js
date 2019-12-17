// components/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "我是标题"
    },
    content: {
      type: String,
      value: "我是内容"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputvalue: null,
    list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    oninput: function(event) {
      console.log(event);
      this.data.label = event.detail.value;
    },
    ontap: function(event) {
      console.log("ontap");
      // this.triggerEvent("commit", event);
      if (this.data.label) {
        var list = this.data.list;
        console.log(list);
        list.push(this.data.label);
        this.setData({
          list: list
        });
        this.data.label = null;
      }
    }
  }
})
