<template id="app">
  <html>
    <div class="container">
    <ul>
      <li><a href='/about' class="hoverAnimation col-md-3" :class="{'kek':(active===1), 'inactive':(active)}" @mouseover="setActive(1)" @mouseleave="setActive(0)" target="_self">About</a></li>
      <li>|</li>
      <li><a href='/blog' class="hoverAnimation col-md-3" :class="{'kek':(active===2), 'inactive':(active)}" @mouseover="setActive(2)" @mouseleave="setActive(0)" target="_self">Blog</a></li>
      <li>|</li>
      <li><a href='https://github.com/LamaKami' class="hoverAnimation col-md-3" :class="{'kek':(active===3), 'inactive':(active)}" @mouseover="setActive(3)" @mouseleave="setActive(0)" target="_blank">Github</a></li>
      <li>|</li>
      <li><a href='https://www.linkedin.com/in/daniel-w%C3%A4chtler-6b2422241/' class="hoverAnimation col-md-3" :class="{'kek':(active===4), 'inactive':(active)}" @mouseover="setActive(4)" @mouseleave="setActive(0)" target="_blank">LinkedIn</a></li>
    </ul>
  </div>
    <router-view />
  </html>
</template>
<script>

export default {
// TODO make config with path and routename auch mit router push wir in BlogList

  name: 'StartSite',
  props: {
    msg: String
  },
  data(){
    return{
      active: 0,
    }
  },
  methods:{
    setActive(value){ 
      this.active = value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  a, a:visited, a:hover, a:active {
  color: inherit;
}

.hoverAnimation{
  
  text-decoration:none;
  transition: all 0.6s;
  &.kek{ 
    opacity: 1 !important;
  }
  &.inactive{ 
    opacity: 0.3;
  }
}


ul {
  list-style: none;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 50%);
  background: radial-gradient(circle at 17% 98%, #49889b, #163f4b);
  font-size: 20px;
  color: #b7b7b7;
}

ul li {
  float: left;
  
  margin: 10px;
}


.container {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  height: 100%;
  
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  body {
    background: rgb(209, 228, 231) !important;
  }

</style>