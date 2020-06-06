<template>
    <v-row justify="space-around">
        <v-date-picker
        v-model="picker"
        :landscape="landscape"
        :reactive="reactive"
        :full-width="fullWidth"
        :show-current="showCurrent"
        :type="month ? 'month' : 'date'"
        :multiple="multiple"
        :readonly="readonly"
        :disabled="disabled"
        :events="enableEvents ? functionEvents : null"
        @click:date="menuOnDate"
        ></v-date-picker>
  </v-row>
</template>

<script>
import MealsService from '@/services/MealsService'

export default {
    name: 'MealCalendar',
    data() {
        return {
            meals: null,
            thereIsMeal: false,
            picker: new Date().toISOString().substr(0, 10),
            landscape: false,
            reactive: false,
            fullWidth: true,
            showCurrent: true,
            month: false,
            multiple: false,
            readonly: false,
            disabled: false,
            enableEvents: false,
        }
    },
    methods: {
        menuOnDate(event) {
            // to reset thereIsMeal to false everytime page loads
            this.thereIsMeal = false
            // check meal database if menu exists
            this.meals.forEach(meal => {
                if (event == meal.date) {
                    this.thereIsMeal = true
                    return window.open(meal.PDFUrl);
                }
            })
            // if meal does not exist throw an alert
            if (!this.thereIsMeal) {
                alert('Dining hall is closed on this date')
                this.thereIsMeal = false
            }
        },
    },
    async mounted() {
        this.meals = (await MealsService.getMeals()).data
    }
}
</script>

<style scoped>
    .table {
        margin-top: 50px;
    }
</style>