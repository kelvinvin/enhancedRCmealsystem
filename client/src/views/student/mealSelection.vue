<template>
    <div class="mealSelectForm">
        <SelectionCheckBox/>
    </div>
</template>

<script>
import SelectionCheckBox from '@/components/student/SelectionCheckBox'

export default {
  name: 'mealSelection',
  components: {
    SelectionCheckBox
  }
}
</script>

<style scoped>
    .mealSelectForm {
        margin: auto;
        max-width: 960px;
        border: 5px solid black;
        padding: 30px;
    }
</style>