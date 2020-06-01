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
                <td><img src="tick.jpg"></td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Tuesday</th>
                <td v-if="breakfastTuesday=='1'"><img src="tick.jpg"></td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Wednesday</th>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Thursday</th>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Friday</th>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Saturday</th>
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Sunday</th>
                <td>-</td>
                <td>-</td>
                </tr>  
            </tbody>
        </table>
        <h4>
        You have {{myMealPlan[0].extraCredit}} meal credits left.
        {{myMealPlan}}
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
            breakfastMonday: this.myMealPlan[0].breakfastMonday,
            breakfastTuesday: this.myMealPlan[0].breakfastTuesday,
            breakfastWednesday: this.myMealPlan[0].breakfastWednesday,
            breakfastThursday: this.myMealPlan[0].breakfastThursday,
            breakfastFriday: this.myMealPlan[0].breakfastFriday,
            breakfastSaturday: this.myMealPlan[0].breakfastSaturday,
            dinnerSunday: this.myMealPlan[0].dinnerSunday,
            dinnerMonday: this.myMealPlan[0].dinnerMonday,
            dinnerTuesday: this.myMealPlan[0].dinnerTuesday,
            dinnerWednesday: this.myMealPlan[0].dinnerWednesday,
            dinnerThursday: this.myMealPlan[0].dinnerThursday,
            dinnerFriday: this.myMealPlan[0].dinnerFriday,
        };
    },
    async mounted() {
        this.myMealPlan = (await StudentMealPlanService.getStudentMealPlan({userID: this.$store.state.user.id})).data[0]
    }
}
</script>

<style>

</style>
