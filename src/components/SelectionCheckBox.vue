<template>
    <div class="checkbox"> 
        <header><h1>Meal Selection</h1></header>
        <p>Please indicate the days and meals that you require this semester.
            <br>
            Note that you have to choose at least 7 meals/ week.
        </p>

        <form action="/action_page.php" method="get" id="form1">
            I would like to consume every:
            <table>
                <tr><th>&nbsp;</th>
                    <th><p>Monday</p></th>
                    <th><p>Tuesday</p></th>
                    <th><p>Wednesday</p></th>
                    <th><p>Thursday</p></th>
                    <th><p>Friday</p></th></tr>
            
                <tr><td><p>Breakfast</p></td>
                <td><input type="checkbox" @change="updateCount" name = "meal" value="mondayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name = "meal" value="tuesdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name = "meal" value="wednesdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name = "meal" value="thursdayBreakfast" /></td>
                <td><input type="checkbox" @change="updateCount" name = "meal" value="fridayBreakfast" /></td></tr>
                
                <tr><td><p>Dinner</p></td>
                    <td><input type="checkbox" @change="updateCount" name = "meal" value="mondayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name = "meal" value="tuesdayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name = "meal" value="wednesdayBreakfast" /></td>
                    <td><input type="checkbox" @change="updateCount" name = "meal" value="thursdayDinner" /></td>
                    <td><input type="checkbox" @change="updateCount" name = "meal" value="fridayDinner" /></td></tr>
            </table>

            Please indicate if you would like to consume during recess week.
            Note that you have to opt for full-week meals in this category.
            <br>
            <p>I would like to opt for recess week consumption: </p>
            <input type="radio" name="options" @change="updateCountRecWeek"> 
            <label for="yes">Yes</label>
            <input type="radio" name="options">
            <label for="no">No</label>

            <p> Total amount: {{updateCost}} </p>
            <button type="submit" form="form1" value="Submit">Submit</button>
        </form>
    </div>
</template>


<script>
export default {
    name: "SelectionCheckBox",
    data() {
        return {
            cost : 0,
            costPerMeal: 200,
            meals: [
                {name: 'Monday'},
                {name: 'Tuesday'},
                {name: 'Wednesday'},
                {name: 'Thursday'},
                {name: 'Friday'}
            ],

        }
    },
    methods: {
        updateCount() {
            this.cost = this.costPerMeal * document.querySelectorAll('input[name=meal]:checked').length;
        },

        updateCountRecWeek() {
            this.cost = this.cost + 300;
        }
    },
    computed: {
        updateCost() {
            return this.cost;
        }
    }
}

</script>

<style scoped>
    table {
        /* margin-left:35%;
        margin-right:35%; */
        border: 2px solid black;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 40px;
        /* width: 70%; */
    }

    .checkbox {
        border: 5px solid black;
        padding: 30px;
    }

</style>