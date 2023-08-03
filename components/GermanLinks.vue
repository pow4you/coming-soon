<template>
  <div 
  v-if="appConfig.ger_host"
  
  class="
    grid grid-rows-1 grid-cols-3
    gap-x-4 p-2 
    justify-center
    
  border-t-purple-100 border-t
  ">
    <NuxtLink
      to="/agb"
      active-class="font-bold"
      class="
        row-start-1 row-span-1
        col-start-2 col-span-1
        
        text-center text-xs
        
        transition-all duration-300 ease-in-out
        hover:underline decoration-dotted
      "
    >
      AGB
    </NuxtLink>
    
    <NuxtLink
      to="/impressum"
      active-class="font-bold"
      class="
        row-start-1 row-span-1
        col-start-1 col-span-1
        
        text-center text-xs
        
        transition-all duration-300 ease-in-out
        hover:underline decoration-dotted
      "
    >
      Impressum
    </NuxtLink>
    
    <NuxtLink
      to="/datenschutz"
      active-class="font-bold"
      class="
        row-start-1 row-span-1
        col-start-3 col-span-1
        
        text-center text-xs
        
        transition-all duration-300 ease-in-out
        hover:underline decoration-dotted
      "
    >
      Datenschutz
    </NuxtLink>
    
  </div>
</template>

<script setup>
  const appConfig = useAppConfig()
</script>



<style>

</style>
