<template>
    <html>
    <div class="pagination">
      <span class="pagination__number-indicator"></span>
      <button span v-if="showPreviousLink()" class="pagination__arrow" v-on:click="updatePage(currentPage-1)">
        <span class="pagination__arrow-half"></span>
        <span class="pagination__arrow-half"></span>
      </button>

      <button class="pagination__number" v-for="n in totalPages()" :key="n">
    <h1 class="pagination__number pagination__number--active" v-if="n===currentPage+1">{{n}}</h1>
    <h1 class="pagination__number" v-on:click="updatePage(n-1)" v-else>{{n}}</h1>
    </button>


      <button v-if="showNextLink()" class="pagination__arrow pagination__arrow--right" v-on:click="updatePage(currentPage+1)">
        <span class="pagination__arrow-half"></span>
        <span class="pagination__arrow-half"></span>
      </button>
    </div>
    </html>
</template>

<script>

export default {
    name: 'PaginationBar',
    props: ['entries', 'currentPage', 'pageSize'],
    methods: {
        updatePage(pageNumber){
            this.$emit('page:update', pageNumber)
        },
        totalPages(){
            return Math.ceil(this.entries.length / this.pageSize)
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


<style scoped lang="scss">
.pagination-btn{
    cursor: pointer;
}

$arrow-height: 9px;
$arrow-width: 2px;
$interactive-color: #000000;
$black-color: #111827;

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.pagination {
  display: flex;
  flex-direction: row;
  padding: 5px;
  border-radius: 6px;

  position: relative;

  &__number:hover {
    transition: all 0.6s;
    color:#4b94e7
  }

  &__number {
    font-weight: 600;
    font-size: 16px;
    color: #D1D5DB;
  }

  &__number--active {
    color: $black-color;
    position: relative;
  }

  &__number,
  &__arrow  {
    padding: 16px;
  }

  &__arrow--right {
    transform: scaleX(-1);
  }

  &__arrow:hover &__arrow-half:first-child {
    transform: translateY(#{$arrow-width / 4}) rotate(-30deg);
  }
  &__arrow:hover &__arrow-half:last-child {
    transform: translateY(#{-$arrow-width / 4}) rotate(30deg);
  }

  &__arrow:active &__arrow-half:first-child,
  &__arrow--disabled &__arrow-half:first-child {
    transform: translateY(0) rotate(0);
  }
  &__arrow:active &__arrow-half:last-child,
  &__arrow--disabled &__arrow-half:last-child {
    transform: translateY(0) rotate(0);
  }


  &__arrow-half {
    width: $arrow-height;
    height: $arrow-width;
    border-radius: $arrow-width / 2;
    background-color: $interactive-color;
    display: inline-block;
    position: absolute;
    transform-origin: 0px;
    opacity: 1;
    transition: transform .1s ease-in-out, opacity .2s ease-in-out;
  }
  
  &__arrow-half:first-child {
    transform: translateY(#{$arrow-width / 4}) rotate(-45deg);
  }

  &__arrow-half:last-child {
    transform: translateY(#{-$arrow-width / 4}) rotate(45deg);
  }
}


</style>