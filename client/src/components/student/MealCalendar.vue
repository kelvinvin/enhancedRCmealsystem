<template>
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col-6">
                <div>
                    <v-calendar is-expanded :attributes='attrs' 
                    @dayclick="menuOnDate"/>
                </div>
                 <div class="mealAttr">
                 </div>
            </div>
            <div class="col">
            </div>
        </div>
    </div>
</template>

<script>
import MealsService from '@/services/MealsService'

export default {
    name: 'MealCalendar',
    data() {
        return {
            attrs: [
                {
                key: 'today',
                highlight: true,
                popover: {
                    label: "Today's date"
                },
                dates: new Date(),
                },
            ],
            meals: null,
            thereIsMeal: false
        };
    },
    methods: {
        menuOnDate(event) {
            // to reset thereIsMeal to false everytime page loads
            this.thereIsMeal = false
            // check meal database if menu exists
            this.meals.forEach(meal => {
                if (event.id == meal.date) {
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

<style>
    .table {
        margin-top: 50px;
    }

    .mealAttr {
        margin-top: 10px;
        padding: 10px;
    }
</style>