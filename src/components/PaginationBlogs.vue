<template>
    <html>
        <div class="pagination-wrapper">
            <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage-1)"> &lt; </span>
            {{ currentPage + 1}} of {{ totalPages() }}
            <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage+1)"> &gt; </span>
        </div>
    </html>
</template>

<script>

export default {
    name: 'PaginationBlogs',
    props: ['blogs', 'currentPage', 'pageSize'],
    methods: {
        updatePage(pageNumber){
            this.$emit('page:update', pageNumber)
        },
        totalPages(){
            return Math.ceil(this.blogs.length / this.pageSize)
        },
        showPreviousLink(){
            return this.currentPage == 0 ? false : true
        },
        showNextLink(){
            return this.currentPage == (this.totalPages()-1) ? false : true
        }
    }
}
</script>


<style scoped>
.pagination-btn{
    cursor: pointer;
}

</style>