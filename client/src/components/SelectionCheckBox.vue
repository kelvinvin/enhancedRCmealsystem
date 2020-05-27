<template>
    <div class="checkbox"> 
        <header><h1>Meal Selection</h1></header>
        <p>Please indicate the days and meals that you require this semester.
            <br>
            Note that you have to choose at least 7 meals/ week.
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
                <td><input type="checkbox" @change="updateCount" name="meal" value="sundayBreakfast" /></td></tr>

                <tr><td><p><strong>Dinner</strong></p></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="mondayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="tuesdayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="wednesdayBreakfast" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="thursdayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="fridayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name="meal" value="saturdayDinner" /></td>
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

            <p>Are you vegetarian?</p>
            <input type="radio" name="options_veg" id="veg" @click="updateCount"> 
            <label for="yes">Yes</label>
            <input type="radio" @change="updateCount" name="options_veg" id="noVeg"> 
            <label for="no">No</label>


            <p> Total amount: {{returnCost}} </p>
            
        </form>

        <MealPlanTnC />
        
        <button type="submit" form="form1" value="Submit" @click.prevent="canSubmit">Submit</button>
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
        }
    },
    methods: {
        updateCount() {
            var recessToggle = document.getElementById("recess").checked;
            var noOfMeals = document.querySelectorAll('input[name=meal]:checked').length;
            if (recessToggle) {
                this.cost = this.costPerMeal * noOfMeals+ this.costRecessWeek;
            } else {
                this.cost = this.costPerMeal * noOfMeals;
            }
        },
        canSubmit() {
            var mealsSelected = document.querySelectorAll('input[name=meal]:checked').length;
            var recessCheck = document.getElementById('recess').checked;
            var recessNoCheck = document.getElementById('norecess').checked;
            var veg = document.getElementById('veg').checked;
            var noVeg = document.getElementById('noVeg').checked;
            var termsAndCond = document.getElementById('agree').checked;

            if (mealsSelected < 7) {
                alert('Please ensure that you have indicated at least 7 meals/ week')
                console.log("can't");
            } else if (!recessCheck && !recessNoCheck) {
                alert('Please ensure that you have indicated recess week meal plan')
                console.log("can't")
            } else if (!veg && !noVeg) {
                alert('Please indicate if you need vegetarian dietary requirement')
            
            } else if (!termsAndCond) {
                alert('Please ensure that you have read the terms and conditions above')
                console.log("can't")
            } else {
                this.$router.push('HomePage')
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
        padding: 30px;
    }

</style>