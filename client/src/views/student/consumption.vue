<template>
    <div id="app">
        <div class="container"> 
            <div class="Consumption"><Consumption/></div>
        </div>
    </div>
</template>

<script>
import Consumption from '@/components/student/Consumption'

export default {
  name: 'consumption',
  components: {
    Consumption
  }
}
</script>

<style scoped>
    .container {
      max-width: 960px;
      margin: auto;
    }
</style>