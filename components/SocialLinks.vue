<template>
  <div class="
    p-2
    grid grid-rows-1 gap-2
  border-b-purple-100 border-b
  ">
    <NuxtLink
      v-for="social of appConfig.socials"
      :key="social.name"
      :to="social.url"
      
      class="
        row-start-1 row-span-1
        col-start-auto col-span-1
        grid grid-rows-3 grid-cols-1
        
        p-2 text-center
        
        frosted-glass rounded-lg  shadow-sm
        
        transition-all duration-300 ease-in-out
        hover:bg-opacity-70 hover:shadow-lg hover:border-purple-500 hover:border-opacity-7
      "
      
    >
      <Icon size="1.75rem" :name="social.icon" 
        class="
          row-start-1 row-span-2
          col-start-1 col-span-1
          w-full
        "
      />
      <div 
        class="
          row-start-3 row-span-1
          col-start-1 col-span-1
          w-full
          text-xs
        "
      >{{ social.name }}</div>
    </NuxtLink>
    
  </div>
</template>

<script setup>
  const appConfig = useAppConfig()
</script>



<style>

</style>
