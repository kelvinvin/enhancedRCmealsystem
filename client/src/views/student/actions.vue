<template>
    <div id="app">
        <div class="container"> 
            <div class="Consumption"><Consumption/></div>
            <div class="MakePayment"><MakePayment/></div>
        </div>
    </div>
</template>

<script>
import Consumption from '@/components/student/Consumption'
import MakePayment from '@/components/student/MakePayment'

export default {
  name: 'actions',
  components: {
    Consumption,
    MakePayment,
  }
}
</script>

<style scoped>
    .container {
      max-width: 960px;
      margin: auto;
    }
</style>