<template>
  <div class="
    flex justify-center w-screen
  ">
    <div class="
      
      w-2/3 h-fit
      grid
      rounded-lg frosted-glass shadow-xl
      border-purple-100 border-2
    ">
      <SocialLinks />
      
      <div class="
        transition-all duration-300 ease-in-out
        max-md:p-2 md:px-6 xl:px-14 
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
