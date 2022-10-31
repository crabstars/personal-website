<template>
    <div>
      <ul class="tilesWrap">
        <li class="project-list" v-bind:currentPage="currentPage" v-for="item in visibleProjects" :key="item.id" @click.once="loadBlock(item.id)">
          <article class="projectlist__profile">
            <img :src=item.image_link class="projectlist__picture">
            <span class="projectlist__name">{{ item.name }}</span>
            <span class="projectlist__description">{{item.description}}</span>
            <span class="projectlist__date">{{ item.last_modified }}</span>
          </article>
        </li>
        <pagination-bar class="pagination" v-bind:entries="projectList" v-bind:currentPage="currentPage" v-bind:pageSize="pageSize" v-on:page:update="updatePage"></pagination-bar>
      </ul>
    </div>
    </template>
        
    <script>
        import projectList from "@/configs/projectList";
        import router from "@/router"
        import PaginationBar from "@/components/PaginationBar.vue";
      export default {
        components: {
            PaginationBar
        },
        data(){
          return{
            projectList: projectList.reverse(),
            router: router,
            currentPage: 0,
            pageSize: 3,
            visibleProjects: []
          }
        },
        created () {
        document.title = "Projects"
        },
        methods: {
            loadBlock(itemId){
                console.log(itemId)
                this.router.push({name: 'ProjectSelected', params: {id: itemId}})
            },
            updatePage(pageNumber) {
              this.currentPage = pageNumber;
              this.updateVisibleProjects();
            },
            updateVisibleProjects(){
              this.visibleProjects = this.projectList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
            }
        },
        beforeMount(){
          this.updateVisibleProjects();
        },
      }
    </script>
      
    <style scoped lang="scss">
        ul {
          list-style: none;
          padding-left: 20%;
          padding-right: 20%;
        }
    
        ul li {
          float: none !important;
          margin: 10px;
        }
    
    .pagination{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .projectlist {
    
      max-width: 490px;
      width: 100%;
      border-radius: 12px;
    
      header {
        --start: 15%;
    
        height: 130px;
        background-image: repeating-radial-gradient(
            circle at var(--start),
            transparent 0%,
            transparent 10%,
            rgba(54, 89, 219, 0.33) 10%,
            rgba(54, 89, 219, 0.33) 17%
          ),
          linear-gradient(to right, #5b7cfa, #3659db);
        color: #fff;
        position: relative;
        border-radius: 12px 12px 0 0;
        overflow: hidden;
      }
    
      
    
      &__profile {
        font-family: Times New Roman, Helvetica, sans-serif;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;
        padding: 10px 30px 10px 10px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
        cursor: pointer;
        transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
          box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
        background-color: #fff;
    
        &:hover {
          transform: scale(1.2);
          box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
        }
      }
    
      &__picture {
        max-width: 100%;
        width: 60px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #ebeef3, 0 0 0 22px #f3f4f6;
      }
    
      &__description {
        font-family: Times New Roman, Helvetica, sans-serif;
      }
    
      &__name {
        color: #979cb0;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.64px;
        margin-left: 12px;
      }
    
    
    }
    
    // bare minimuu styles
    
    body {
      margin: 0;
      background-color: #eaeaea;
      display: grid;
      height: 100vh;
      place-items: center;
      font-family: "Source Sans Pro", sans-serif;
    }
    
    
    </style>