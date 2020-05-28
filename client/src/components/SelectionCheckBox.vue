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
                <td><input type="checkbox" @change="updateCount" name="meal" value="mondayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name="meal" value="tuesdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name="meal" value="wednesdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name="meal" value="thursdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name="meal" value="fridayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name="meal" value="saturdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name="meal" value="sundayBreakfast" disabled/></td></tr>

                <tr><td><p><strong>Dinner</strong></p></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="mondayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="tuesdayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="wednesdayBreakfast" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="thursdayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="fridayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="saturdayDinner" disabled/></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="sundayDinner" /></td></tr>
            </table>

            Please indicate if you would like to consume during recess week.
            Note that you have to opt for full-week meals in this category.
            <br>
            <p>I would like to opt for recess week consumption: </p>
            <input type="radio" name="options" id="recess" @click="updateCount"> 
            <label for="yes">Yes</label>
            <input type="radio" @change="updateCount" name="options" id="norecess"> 
            <label for="no">No</label>

            <br>
            <div>
                <p>Do you have any dietary requirement:</p>
                <b-form-select v-model="dropDownSelect" 
                :options="dropDownOptions">
                </b-form-select>
            </div>
            <br>
            <div>
                <p>Extra Credits:</p>
                <b-form-select v-model="dropDownExtra" 
                :options="dropDownExtraOptions" @change="extraCredits">
                </b-form-select>
            </div>
            <br>

            <p> Total amount: {{returnCost}} </p>
            
        </form>

        <MealPlanTnC />
        <br>
        <div class="error" v-html="error"/>
        <br>
        <button type="submit" class="btn btn-primary" form="form1" value="Submit" @click.prevent="canSubmit">
            Register Meal Plan
        </button>
    </div>
</template>


<script>
import MealPlanTnC from './MealPlanTnC.vue';

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
            dropDownSelect: null,
            dropDownOptions: [
                { value: 'none', text: 'No Dietary Requirements' },
                { value: 'halal', text: 'Halal' },
                { value: 'vegetarian', text: 'Vegetarian' },
            ],
            dropDownExtra: null,
            dropDownExtraOptions: [
                { value: '0', text: 'No extra credits needed' },
                { value: '5', text: '5' },
                { value: '10', text: '10' },
                { value: '15', text: '15' },
                { value: '20', text: '20' },
                { value: '25', text: '25' },
            ],
        }
    },
    methods: {
        updateCount() {
            var recessToggle = document.getElementById("recess").checked;
            var noOfMeals = document.querySelectorAll('input[name=meal]:checked').length;
            if (recessToggle) {
                this.cost = this.costPerMeal * noOfMeals + this.costRecessWeek;
            } else {
                this.cost = this.costPerMeal * noOfMeals;
            }
        },
        extraCredits() {
            this.updateCount();
            this.cost += this.dropDownExtra * 4.50;
        },
        canSubmit() {
            
            var mealsSelected = document.querySelectorAll('input[name=meal]:checked').length;
            var recessCheck = document.getElementById('recess').checked;
            var recessNoCheck = document.getElementById('norecess').checked;
            var termsAndCond = document.getElementById('agree').checked;

            if (mealsSelected <= 9) {
                this.error = 'Please ensure that you have indicated at least 9 meals/ week'
    
            } else if (!recessCheck && !recessNoCheck) {
                this.error = 'Please ensure that you have indicated recess week meal plan'   
            } else if (this.dropDownSelect == null) {
                this.error = 'Please indicate if you have any dietary requirement'
            } else if (!termsAndCond) {
                this.error = 'Please ensure that you have read the terms and conditions above'
            } else if (this.error != null) {
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