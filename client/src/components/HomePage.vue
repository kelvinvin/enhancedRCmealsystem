<template>
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col-6">
                 <v-calendar is-expanded :attributes='attrs' 
                 @dayclick="test"/>
            </div>
            <div class="col">
                <router-link to="/MealSelection">Register Meal Plan</router-link>
                <h4 class="totalmeal">Total Meals     : </h4>
                <h4>Meals Consumed : </h4>
                <h4>Meals Left     : </h4>
            </div>
            <v-btn @click="logout">
                Log Out
            </v-btn>
        </div>
        <!-- <TableMenu class="table" v-if="dayClicked"></TableMenu>    -->
        
    </div>
</template>

<script>
// import TableMenu from './TableMenu.vue'
import MealsService from '@/services/MealsService'

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
            meals: null
            // noMeal: false
        };
    },
    methods: {
        test(event) {
            this.meals.forEach(meal => {
                if (event.id == meal.date) {
                    return window.open(meal.link);
                }
            })
        },
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push('/')
        }
    },
    // components: {
    //     TableMenu
    // }
    async mounted() {
        this.meals = (await MealsService.getMeals()).data
    }
}
</script>

<style>
    .table {
        margin-top: 50px;
    }

    h4 {
        float: left;
    }

    .totalmeal {
        padding-top: 10px;
        margin-top: 10px;
    }
</style>