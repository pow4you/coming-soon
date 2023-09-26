<template>
  <div 
    class="
      fixed top-0 left-0 z-10
      w-full
      p-1
      
      frosted-glass shadow-lg
      
      grid gap-4 place-content-center
    "
  >
    
    <NuxtLink
      v-for="link of navigation"
      :key="link._path"
      :to="link._path"
      active-class="font-bold"
      class="
        row-start-1 row-span-1
        col-start-auto col-span-1
        
        vertical-align-middle text-sm
        
        px-4 py-2 frosted-glass rounded-lg shadow-sm
        
        transition-all duration-300 ease-in-out
        hover:bg-opacity-70 hover:shadow-lg hover:border-purple-500 hover:border-opacity-7
      "
    >
      {{ link.title }}
    </NuxtLink>
  </div>
</template>

<script setup>
  const { navigation } = useContent()
  const appConfig = useAppConfig()
</script>



<style>

</style>
