<template>
  <div>
      <FirstBlog v-if="id === 1" />
      <SecondBlog v-if="id === 2" />
      <!-- <div v-html="htmlText"></div>-->
  </div>
</template>
  
<script>
import Prism from "prismjs";
import 'prismjs/components/prism-rust';
import "./prism-tomorrow-own.css"; // custom css 
import FirstBlog from "@/components/FirstBlog.vue"
import SecondBlog from "@/components/SecondBlog.vue"


export default {
  components:{
    FirstBlog,
    SecondBlog,
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