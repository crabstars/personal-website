<template>
  <html >
    <div class="about">
    <div class="aboutParagraphs">
      <img src="@/assets/me2.png" alt="Avatar">

      <h2>About this blog</h2>
      <p>Welcome to my blog, mainly projects about Rust, C# and Python are presented here.</p>
      <h2>About me</h2>
      <p>I am currently working at Relaxdays (e-commerce) as a backend developer with C#.</p>
      <h2>Contact</h2>
      <p>Feel free to reach out to me at <a class="eml-protected" href="mailto:danielwaechtler@protonmail.com">danielwaechtler@protonmail.com</a></p>
    </div>
  </div>

  </html>
</template>

<script>
export default {
  created () {
    document.title = "About"
  }
}
</script>

<style scoped lang="scss">
h2 { font-weight: normal; }
p {  color: rgb(79, 79, 82);}
.about{
  
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 1%;
  background-color: #ffffff;
  border-radius: 12px 12px 12px 12px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 50%);
  font-family: Times New Roman, Helvetica, sans-serif;
}
.about.dark-mode{
  background-color: #131111;
}


.aboutParagraphs{
  font-family: Times New Roman, Helvetica, sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 1%;
  padding-top: 1%;
  width: 80% ;
}
img {
  display: block;
  margin-left: 50%;
  margin-right: auto;
  border-radius: 50%;
  max-width:10%;
  max-height:10%;
  position:fixed;
}


</style>