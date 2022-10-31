<template>

    <h1 class="ErrorMesssage">
        Nothing to find here :(
    </h1>

</template>

<script>
    export default {
      created () {
        document.title = "404 Page not found"
      }
    }
</script>

<style scoped>
    .ErrorMesssage{
        text-align: center;
    }
</style>