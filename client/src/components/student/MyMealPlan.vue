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
                <td>-</td>
                <td>-</td>
                </tr>
                <tr>
                <th scope="row">Tuesday</th>
                <td>-</td>
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
        You have 10 meal credits left. {{myMealPlan}}
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
            myMealPlan: null
        };
    },
    async mounted() {
        this.myMealPlan = (await StudentMealPlanService.getStudentMealPlan({UserId: this.$store.state.user.id})).data
    }
}
</script>

<style>

</style>

