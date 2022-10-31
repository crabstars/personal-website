<template>
    <div>
        <VaultRust v-if="id === 1" />
        <!-- <div v-html="htmlText"></div>-->
    </div>
  </template>
    
  <script>
  import Prism from "prismjs";
  import 'prismjs/components/prism-rust';
  import "./prism-tomorrow-own.css"; // custom css 
  import VaultRust from "@/components/projects/VaultRust.vue";
  
  
  export default {
    components:{
    VaultRust
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