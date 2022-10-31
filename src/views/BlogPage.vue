<template>
  <div>
      <MockFromSameClass v-if="id === 2" />
      <SecondBlog v-if="id === 1" />
      <!-- <div v-html="htmlText"></div>-->
  </div>
</template>
  
<script>
import Prism from "prismjs";
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-csharp';
import "./prism-tomorrow-own.css"; // custom css 
import MockFromSameClass from "@/components/blogs/MockFromSameClassCsharp.vue"



export default {
  components:{
    MockFromSameClass,
},
  props: {
    id: Number
  },
  data(){
    return{
    }
  },
  methods: {

  },
  beforeMount(){
  },
  mounted() {
    Prism.highlightAll(); // highlight your code on mount
  },
}


</script>

<style>
 .code-block{
  padding-right: 20%;
  padding-left: 20%;
 }

</style>