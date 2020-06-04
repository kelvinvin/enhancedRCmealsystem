<template>
     <div class="container">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Day</th>
                <th scope="col">Breakfast</th>
                <th scope="col">Dinner</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Monday</th>
                <td><div class="mealCheck" value="breakfastMonday" >-</div></td>
                <td><div class="mealCheck" value="dinnerMonday" >-</div></td>
                </tr>
                <tr>
                <th scope="row">Tuesday</th>
                <td><div class="mealCheck" value="breakfastTuesday" >-</div></td>
                <td><div class="mealCheck" value="dinnerTuesday" >-</div></td>
                </tr>
                <tr>
                <th scope="row">Wednesday</th>
                <td><div class="mealCheck" value="breakfastWednesday" >-</div></td>
                <td><div class="mealCheck" value="dinnerWednesday" >-</div></td>
                </tr>
                <tr>
                <th scope="row">Thursday</th>
                <td><div class="mealCheck" value="breakfastThursday" >-</div></td>
                <td><div class="mealCheck" value="dinnerThursday" >-</div></td>
                </tr>
                <tr>
                <th scope="row">Friday</th>
                <td><div class="mealCheck" value="breakfastFriday" >-</div></td>
                <td><div class="mealCheck" value="dinnerFriday" >-</div></td>
                </tr>
                <tr>
                <th scope="row">Saturday</th>
                <td><div class="mealCheck" value="breakfastSaturday" >-</div></td>
                <td><div class="mealCheck" value="dinnerSaturday" >-</div></td>
                </tr>
                <tr>
                <th scope="row">Sunday</th>
                <td><div class="mealCheck" value="breakfastSunday" >-</div></td>
                <td><div class="mealCheck" value="dinnerSunday" >-</div></td>
                </tr>  
            </tbody>
        </table>
        <h4>
        You have {{myMealPlan.extraCredit}} meal credits left.
        {{myMealPlan.dinnerFriday}}
        </h4>
        <!-- link to user in database -->
    </div>
</template>

<script>
import StudentMealPlanService from '@/services/StudentMealPlanService'

export default {
    name: "MyMealPlan",
    data() {
        return {
            myMealPlan: null,
        };
    },
    async mounted() {
        this.myMealPlan = (await StudentMealPlanService.getStudentMealPlan({userID: this.$store.state.user.id})).data[0]
        setTimeout(function () {
            var x = document.querySelectorAll(".mealCheck"), i;
            for (i=0; i < x.length; i++) {
                var mealValue = x[i].attributes.value.value;
                if (this.myMealPlan[mealValue]) {
                    x[i].innerHTML = "<img src=\"tick.jpg\">";
                }
            }
        }.bind(this), 1);
    }
}
</script>

<style>

</style>
