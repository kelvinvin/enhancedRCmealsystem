<template>
    <div class="checkbox"> 
        <header><h1>Meal Selection</h1></header>
        <p>Please indicate the days and meals that you require this semester.
            <br>
            Note that you have to choose at least 9 meals/ week.
        </p>

        <form action="#" method="get" id="form1">
            I would like to consume every:
            <table>
                <tr><th>&nbsp;</th>
                    <th><p>Monday</p></th>
                    <th><p>Tuesday</p></th>
                    <th><p>Wednesday</p></th>
                    <th><p>Thursday</p></th>
                    <th><p>Friday</p></th>
                    <th><p>Saturday</p></th>
                    <th><p>Sunday</p></th>
                </tr>
            
            <tr><td><p><strong>Breakfast</strong></p></td>
                <td><input type="checkbox" @change="updateCount" v-model="mondayBreakfast" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="tuesdayBreakfast" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="wednesdayBreakfast" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="thursdayBreakfast" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="fridayBreakfast" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="saturdayBreakfast" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="sundayBreakfast" name="meal" disabled/></td></tr>

            <tr><td><p><strong>Dinner</strong></p></td>
                <td><input type="checkbox" @change="updateCount" v-model="mondayDinner" name="meal"></td>
                <td><input type="checkbox" @change="udateCount" v-model="wednesdayDinner" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="thursdayDinner" name="meal"></td>
                <td><input type="checkbox" @change="updateCoupdateCount" v-model="tuesdayDinner" name="meal"></td>
                <td><input type="checkbox" @change="upnt" v-model="fridayDinner" name="meal"></td>
                <td><input type="checkbox" @change="updateCount" v-model="saturdayDinner" name="meal" disabled/></td>
                <td><input type="checkbox" @change="updateCount" v-model="sundayDinner" name="meal"></td></tr>
            </table>
            

            Please indicate if you would like to consume during recess week.
            Note that you have to opt for full-week meals in this category.
            <br>
            <div>
                <p>I would like to opt for recess week consumption: </p>
                <b-form-select v-model="recessSelect" 
                :options="recessOptions">
                </b-form-select>
              
            </div>
            <br>
            <div>
                <p>Do you have any dietary requirement:</p>
                <b-form-select v-model="dietaryReqSelect" 
                :options="dietaryReqOptions">
                </b-form-select>
                
            </div>
            <br>
            <div>
                <p>Extra Credits:</p>
                <b-form-select v-model="creditSelect" 
                :options="creditOptions" @change="extraCredits">
                </b-form-select>
            </div>
            <br>
            <p> Total amount: {{returnCost}} </p>            
        </form>

        <MealPlanTnC />
        <br>
        <div class="error" v-html="error"/>
        <br>
        <button type="submit" class="btn btn-primary" form="form1" value="Submit" @click.prevent="registerMealPlan">
            Register Meal Plan
        </button>
    </div>
</template>


<script>
import MealPlanTnC from './MealPlanTnC.vue';
import StudentMealPlan from '@/services/StudentMealPlanService'

export default {
    name: "SelectionCheckBox",
    components: {
        MealPlanTnC
    },
    data() {
        return {
            cost: 0,
            costPerMeal: 200,
            costRecessWeek: 500,
            error: null,
            recessSelect: false,
            recessOptions: [
                { value: 'false', text: 'No' },
                { value: 'true', text: 'Yes' },
            ],
            dietaryReqSelect: null,
            dietaryReqOptions: [
                { value: 'none', text: 'No Dietary Requirements' },
                { value: 'halal', text: 'Halal' },
                { value: 'vegetarian', text: 'Vegetarian' },
            ],
            creditSelect: null,
            creditOptions: [
                { value: '0', text: 'No extra credits needed' },
                { value: '5', text: '5' },
                { value: '10', text: '10' },
                { value: '15', text: '15' },
                { value: '20', text: '20' },
                { value: '25', text: '25' },
            ],
            mondayBreakfast: false,
            mondayDinner: false,
            tuesdayBreakfast: false,
            tuesdayDinner: false,
            wednesdayBreakfast: false,
            wednesdayDinner: false,
            thursdayBreakfast: false,
            thursdayDinner: false,
            fridayBreakfast: false,
            fridayDinner: false,
            saturdayBreakfast: false,
            saturdayDinner: false,
            sundayBreakfast: false,
            sundayDinner: false,
        }
    },
    methods: {
        updateCount() {
            var noOfMeals = document.querySelectorAll('input[name=meal]:checked').length;
            if (this.recessSelect) {
                this.cost = this.costPerMeal * noOfMeals + this.costRecessWeek;
            } else {
                this.cost = this.costPerMeal * noOfMeals;
            }
        },
        extraCredits() {
            this.updateCount();
            this.cost += this.creditSelect * 4.50;
        },
        registerMealPlan() {
            var mealsSelected = document.querySelectorAll('input[name=meal]:checked').length;
            var termsAndCond = document.getElementById('agree').checked;
            if (mealsSelected < 9) {
                this.error = 'Please ensure that you have indicated at least 9 meals/week'
            } else if (this.recessSelect == null) {
                this.error = 'Please ensure that you have indicated recess week meal plan'   
            } else if (this.dietaryReqSelect == null) {
                this.error = 'Please indicate if you have any dietary requirement'
            } else if (!termsAndCond) {
                this.error = 'Please ensure that you have read the terms and conditions above'
            } else {
                const authUser = this.$store.state.user
                StudentMealPlan.registerMealPlan({
                    recessWeek: this.recessSelect,
                    dietaryRequirement: this.dietaryReqSelect,
                    breakfastMonday: this.mondayBreakfast,
                    breakfastTuesday: this.tuesdayBreakfast,
                    breakfastWednesday: this.wednesdayBreakfast,
                    breakfastThursday: this.thursdayBreakfast,
                    breakfastFriday: this.fridayBreakfast,
                    breakfastSaturday: this.saturdayBreakfast,
                    dinnerSunday: this.sundayDinner,
                    dinnerMonday: this.mondayDinner,
                    dinnerTuesday: this.tuesdayDinner,
                    dinnerWednesday: this.wednesdayDinner,
                    dinnerThursday: this.thursdayDinner,
                    dinnerFriday: this.fridayDinner,
                    extraCredit: this.creditSelect,
                    id: authUser.id
                })
                this.$router.push('/HomePage')
                alert('Meal Registeration successful')
            }
        }
    },
    computed: {
        returnCost() {
            return this.cost;
        }
    }
}
</script>

<style scoped>
    table {
        border: 2px solid black;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 40px;
        margin-left:-100px;
        width: 150%;
        align-self:center;
        text-align:center;
    }
    

    .checkbox {
        border: 5px solid black;
        margin: 30px;
        padding: 30px;
    }

    .error {
        color: red;
    }

</style>