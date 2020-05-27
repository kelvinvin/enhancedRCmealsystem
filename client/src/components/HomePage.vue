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
                    <h4>Total Meals: </h4>
                    <h4>Meals Consumed: </h4>
                    <h4>Meals Left: </h4>
                 </div>
                <div>
                 <Feedback />
                </div>
            </div>
            <div class="col">
                <router-link to="/MealSelection">Register Meal Plan</router-link>
                
            </div>
        </div>
        <!-- <TableMenu class="table" v-if="dayClicked"></TableMenu>    -->
    </div>
</template>

<script>
// import TableMenu from './TableMenu.vue'

import MealsService from '@/services/MealsService'
import Feedback from '../components/Feedback'

export default {
    name: 'HomePage',
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
            // res: null
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
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push('/')
        }
    },
    components: {
        Feedback
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