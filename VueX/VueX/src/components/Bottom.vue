<template>
	<div id="bottom">
		<p>我是Bottom组件</p>
<div ><span>直接获取 state.num :</span>{{getCount}}.  
			<span>通过getters 获取state.num: </span>{{getResult}}.    
			<span>通过mapState获取state.num：</span>{{mapStateNum}}
			<span>通过mapGetters获取state.num：</span>{{getAdd20}}
		</div>
		<p>对数据进行操作</p>
		<span>每次增加1</span>
		<button @click='addNum1()'>增加后的数值: {{getResult}}</button>
		<button @click='setAdd1()'>增加后的数值: {{getResult}}</button>
		<span>每次增加100，这个100同过传参 实现增加</span>
		<button @click='addAddNum()'>增加后的数值: {{getResult}}</button>
		<span>关于action点这里</span>
		<button @click='startSearch'>开始搜索</button>
		<div>搜索结果是: {{searchResult}}</div>
		
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  data: function () {
    return {
      count: 1,
      searchResult: ''
    }
  },
  computed: {
    getResult () {
      return this.$store.getters.getAdd10
    },
    getCount () {
      return this.$store.state.Common.num
    },
    ...mapState({
      storeNum (state) {
        return state.Common.num
      }
    }),
    ...mapGetters([
      'getAdd20', 'getAdd30'
    ])
  },
  methods: {
    addNum1 () {
      this.$store.commit('setAdd1')
    },
    addAddNum () {
      this.$store.commit('setAddNum', 100)
    },
    ...mapMutations([
      'setAdd1', 'setAdd2'
    ]),
    startSearch () {
      this.$store.dispatch('search', '我是传过去的数据').then(res => {
        this.searchResult = res.data.data.focus
      })
    }
  }
}
</script>

<style>
#bottom{
	height: 300px;
	border: 1px solid #e3e3e3;
	overflow: hidden;
}
</style>
