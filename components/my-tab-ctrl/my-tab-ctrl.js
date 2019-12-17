// components/my-tab-ctrl/my-tab-ctrl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    item_click: function(event) {
      console.log("item_click ", event);
      this.setData({
        curIndex: event.currentTarget.dataset.index
      });

      this.triggerEvent('item_selected', {index: this.data.curIndex, name: this.data.list[this.data.curIndex]}, {});
    }
  }
})
