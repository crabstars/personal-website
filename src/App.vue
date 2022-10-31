<template id="app">
  <html>
    <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/51996192?s=400&u=619b0e7658044411906fa674068b22685133bcda&v=4">
      <div class="container">
      <ul>
        <li>
          <a v-if="$route.path == '/about'" href='/about' target="_self"><u>About</u></a>
          <a v-else href='/about' target="_self">About</a>
        </li>
        <li>
          <a v-if="$route.path == '/blog'" href='/blog' class="hoverAnimation col-md-3" target="_self"><u>Blog</u></a>
          <a v-else href='/blog' class="hoverAnimation col-md-3" target="_self">Blog</a>
        </li>
        <li>
          <a v-if="$route.path == '/projects'" href='/projects' class="hoverAnimation col-md-3"  target="_self"><u>Projects</u></a>
          <a v-else href='/projects' class="hoverAnimation col-md-3"  target="_self">Projects</a>
        </li>
        <li><a href='https://github.com/crabstars' class="hoverAnimation col-md-3" target="_blank">Github</a></li>
        <li><a href='https://www.linkedin.com/in/daniel-w%C3%A4chtler-6b2422241/' target="_blank">LinkedIn</a></li>
      </ul>
    </div>

    <div class="flex" id="checkbox">
          <div class="mode-toggle"  @click="modeToggle()" :class="darkDark">
              <div class="toggle">
                  <div id="dark-mode" type="checkbox" ></div>
              </div>
          </div>
    </div>

    <div id="app">
  My name is <input v-model="name" >

</div>

    <router-view />
  </html>
</template>
<script>
    import router from "@/router"

export default {


  name: 'StartSite',
  props: ['msg'],
  data(){
    return{
      active: 0,
      router: router,
      darkMode: false,
      name: ""
    }
  },

  methods:{
    log(){
      console.log(this.darkMode)
    },
    dark() {
        console.log("dark")
        document.querySelector('body')?.classList.add('dark-mode')
        document.querySelector('.about')?.classList.add('dark-mode')
        },

    light() {
        console.log("light")
        document.querySelector('body')?.classList.remove('dark-mode')
        document.querySelector('.about')?.classList.remove('dark-mode')

        this.darkMode = false
        this.$emit('light')
    },
    modeToggle() {
        if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
            this.light()
        } else {
            this.dark()
        }

        const checkbox = document.getElementById('checkbox')
        checkbox.addEventListener('change', () => {
          document.body.classList.toggle('dark')
        })
    }
  },
  computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
  },
  mounted() {
    if (localStorage.darkMode) {
      console.log("mounted mode")
      this.darkMode = localStorage.darkMode;
    }
    if (localStorage.name) {
      console.log("mounted name")
      this.name = localStorage.name;
    }
  },
  watch: {
    name(newName) {
      console.log(newName)
      localStorage.name = newName;
    },
    darkMode(mode) {
      console.log(mode)
      localStorage.darkMode = mode;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  a, a:visited, a:hover, a:active {
  color: inherit;
}
$mode-toggle-bg: #2f3146;

.hoverAnimation{
  
  text-decoration:none;
  transition: all 0.6s;
  &.active{ 
    opacity: 1 !important;
  }
  &.inactive{ 
    opacity: 0.3;
  }
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

.flex {
    position:absolute;
    top: 20px;
  right: 20px;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  body {
    transition: background 0.2s linear;
    background-color: rgb(252, 250, 250);
  }

  body.dark-mode{
    background-color: rgb(27, 27, 27);
    .mode-toggle {
        background-color: lighten($mode-toggle-bg, 5%);

        .toggle {
            transform: translateX(19px);

            #dark-mode {
                &:before {
                    border-radius: 50%;
                    width: 150%;
                    height: 85%;
                    left: 40%;
                    transform: translate(-10%, -40%), rotate(-35deg);
                }
            }
        }
    }
  }

// _mode-toggle.scss
.mode-toggle {
    position: relative;
    //margin: auto .5rem .5rem auto;
    padding: 0;
    width: 44px;
    height: 24px;
    min-width: 36px;
    min-height: 20px;
    background-color: $mode-toggle-bg;
    border: 0;
    border-radius: 24px;
    outline: 0;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;
    -webkit-tap-highlight-color: rgba(248, 247, 247, 0);
    -webkit-touch-callout: none;
    appearance: none;
    transition: background-color .5s ease;

    .toggle {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid transparent;
        box-shadow: inset 0 0 0 2px #a5abba;
        overflow: hidden;
        transition: transform .5s ease;

        #dark-mode {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 50%;

            &:before {
                content: '';
                position: relative;
                width: 100%;
                height: 100%;
                left: 50%;
                float: left;
                background-color: #a5abba;
                transition: border-radius .5s ease, width .5s ease, height .5s ease, left .5s ease, transform .5s ease;
            }
   
        }
    }
}

</style>


<style lang="scss" scoped>
  a, a:visited, a:hover, a:active {
  color: inherit;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', Arial, sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  list-style: none;
}

a {
  position: relative;
  display: block;
  margin: 0 10px;
  padding: 5px 10px;
  color: #333;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
}

a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  top: 50%;
  transform: translateY(-50%);
  left: -100%;
  background-color: tomato;
}

a:hover:before {
  animation: line 0.5s linear forwards;
}

@keyframes line {
  0% {
    left: -100%;
    height: 4px;
  }
  50% {
    left: 0;
    height: 4px;
  }
   100% {
    left: 0;
    height: 100%;
    z-index: -1;
  }
}

a:hover {
  color: white;
}
</style>