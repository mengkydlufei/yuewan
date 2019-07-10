// components/waterfall_list/waterfall_list.js
Component({
  /**
   * Component properties
   */
  properties: {
    personList:{
      type:Array,
      value:[]
    }
  },

  /**
   * Component initial data
   */
  data: {
    
  },

  /**
   * Component methods
   */
  methods: {
    handleTapCard(event){
      const {currentTarget:{dataset:{id}}}=event
      this.triggerEvent('handleclick',id,event)
    }
  }
})
