<template>
  <div class="
    flex justify-center w-screen
    
    pt-16 pb-6 px-4
  ">
    <div class="
      
      max-md:w-full md:w-5/6 lg:w-2/3 h-fit
      flex flex-col
      rounded-lg frosted-glass shadow-xl
      border-purple-100 border-2
    ">
      <SocialLinks />
      
      <div class="
        w-full
        transition-all duration-300 ease-in-out
        py-6
        max-md:px-2 md:px-6 xl:px-12
      "> 
        <slot />
      </div>
      
      <GermanLinks />
    </div>
    
  </div>
</template>

<script setup>

</script>

<style>
</style>
