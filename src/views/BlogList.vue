<template>
<div>
  <ul class="tilesWrap">
    <li class="blog-list" v-for="item in blogList" :key="item.id"  @click.once="loadBlock(item.id)" >
      <h2>{{item.id}}</h2>
      <h3> {{ item.name }} </h3>
      <p>
        {{item.description}}
      </p>
      <button @click.once="loadBlock(item.id)">Read blog</button>
    </li>
  </ul>

</div>
</template>
    
<script>
    import blogList from "@/configs/blogList";
    import router from "@/router"

  export default {
    props: {
      msg: String
    },
    data(){
      return{
        items: [],
        blogList: blogList.reverse(),
        router: router
      }
    },
    methods: {
        loadBlock(itemId){
            console.log(itemId)
            this.router.push({name: 'BlogExample', params: {id: itemId}})
        }
    },
    beforeMount(){

    },
  }
</script>
  
<style scoped>

    .code-block{
    padding-right: 20%;
    padding-left: 20%;
    }
    .blog-list{
        cursor: pointer;
        text-align: center;
    }


.tilesWrap {
	padding: 0;
	margin-left: 15%;
  margin-right: 15%;
	list-style: none;
	text-align: center;
}
.tilesWrap li {
	display: inline-block;
	width: 20%;
	min-width: 200px;
	max-width: 230px;
	padding: 80px 20px 40px;
	position: relative;
	vertical-align: top;
	margin: 10px;
	font-family: 'helvetica', san-serif;
	min-height: vh;
	background: #163f4b;
	border: 1px solid #252727;
	text-align: left;
}
.tilesWrap li h2 {
	font-size: 114px;
	margin: 0;
	position: absolute;
	opacity: 0.2;
	top: 50px;
	right: 10px;
	transition: all 0.3s ease-in-out;
  color: #b7b7b7;
}
.tilesWrap li h3 {
	font-size: 20px;
	color: #b7b7b7;
	margin-bottom: 5px;
}
.tilesWrap li p {
	font-size: 16px;
	line-height: 18px;
	color: #b7b7b7;
	margin-top: 5px;
}
.tilesWrap li button {
	background: transparent;
	border: 1px solid #b7b7b7;
	padding: 10px 20px;
	color: #b7b7b7;
	border-radius: 3px;
	position: relative;
	transition: all 0.3s ease-in-out;
	transform: translateY(-40px);
	opacity: 0;
	cursor: pointer;
	overflow: hidden;
}
.tilesWrap li button:before {
	content: '';
	position: absolute;
	height: 100%;
	width: 120%;
	background: #b7b7b7;
	top: 0;
	opacity: 0;
	left: -140px;
	border-radius: 0 20px 20px 0;
	z-index: -1;
	transition: all 0.3s ease-in-out;
	
}
.tilesWrap li:hover button {
	transform: translateY(5px);
	opacity: 1;
}
.tilesWrap li button:hover {
	color: #262a2b;
}
.tilesWrap li button:hover:before {
	left: 0;
	opacity: 1;
}
.tilesWrap li:hover h2 {
	top: 0px;
	opacity: 0.6;
}

.tilesWrap li:before {
	content: '';
	position: absolute;
	top: -2px;
	left: -2px;
	right: -2px;
	bottom: -2px;
	z-index: -1;
	background: #fff;
	transform: skew(2deg, 2deg);
}
.tilesWrap li:after {
	content: '';
	position: absolute;
	width: 40%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(255, 255, 255, 0.02);
}
.tilesWrap li:nth-child(1):before {
	background: #C9FFBF;
background: -webkit-linear-gradient(to right, #FFAFBD, #C9FFBF);
background: linear-gradient(to right, #FFAFBD, #C9FFBF);
}
.tilesWrap li:nth-child(2):before {
	background: #f2709c;
background: -webkit-linear-gradient(to right, #ff9472, #f2709c);
background: linear-gradient(to right, #ff9472, #f2709c);
}
.tilesWrap li:nth-child(3):before {
	background: #c21500;
background: -webkit-linear-gradient(to right, #ffc500, #C9FFBF);
background: linear-gradient(to right, #ffc500, #C9FFBF);
}
.tilesWrap li:nth-child(4):before {
	background: #FC354C;
background: -webkit-linear-gradient(to right, #0ABFBC, #FC354C);
background: linear-gradient(to right, #0ABFBC, #FC354C);
}

</style>