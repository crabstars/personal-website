<template id="app">
  <html>

      <div class="container">
      <ul>
        <li><a href='/about' class="hoverAnimation col-md-3" :class="{'active':(active===1), 'inactive':(active)}" @mouseover="setActive(1)" @mouseleave="setActive(0)" target="_self">About</a></li>
        <li>|</li>
        <li><a href='/blog' class="hoverAnimation col-md-3" :class="{'active':(active===2), 'inactive':(active)}" @mouseover="setActive(2)" @mouseleave="setActive(0)" target="_self">Blog</a></li>
        <li>|</li>
        <li><a href='https://github.com/LamaKami' class="hoverAnimation col-md-3" :class="{'active':(active===3), 'inactive':(active)}" @mouseover="setActive(3)" @mouseleave="setActive(0)" target="_blank">Github</a></li>
        <li>|</li>
        <li><a href='https://www.linkedin.com/in/daniel-w%C3%A4chtler-6b2422241/' class="hoverAnimation col-md-3" :class="{'active':(active===4), 'inactive':(active)}" @mouseover="setActive(4)" @mouseleave="setActive(0)" target="_blank">LinkedIn</a></li>
      </ul>
    </div>

    <div class="flex">
          <div class="mode-toggle" @click="modeToggle()" :class="darkDark">
              <div class="toggle">
                  <div id="dark-mode" type="checkbox" ></div>
              </div>
          </div>
    </div>

    <router-view />
  </html>
</template>
<script>

export default {
// TODO dark mode, example: https://codepen.io/moso/pen/MxLwbE

  name: 'StartSite',
  props: {
    msg: String
  },
  data(){
    return{
      active: 0,
      darkMode: false
    }
  },
  methods:{
    setActive(value){ 
      this.active = value;
    },
    dark() {
            document.querySelector('body').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },

    light() {
        document.querySelector('body').classList.remove('dark-mode')
        this.darkMode = false
        this.$emit('light')
    },
    modeToggle() {
        if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
            this.light()
        } else {
            this.dark()
        }
    },
    testLog(){
      console.log("test")
    }
  },
  computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
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
    background: rgb(209, 228, 231) !important;
  }

$mode-toggle-bg: #2f3146;
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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

body.dark-mode {
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
</style>


<style lang="scss" scoped>
  a, a:visited, a:hover, a:active {
  color: inherit;
}
ul {
  list-style: none;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 50%);
  background: radial-gradient(circle at 17% 98%, #869fa7, #2eb2da);
  font-size: 20px;
  color: #000000;
}

ul li {
  float: left;
  
  margin: 10px;
}
</style>