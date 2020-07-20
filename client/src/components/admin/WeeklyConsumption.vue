<template>
  <v-simple-table height="560px">
    <template v-slot:default>
      <thead>
        <tr>
          <th >Breakfast</th>
          <th >Registered</th>
          <th >Dinner</th>
          <th >Registered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td> {{ fetchedData.bfMon }} </td>
          <td>Monday</td>
          <td> {{ fetchedData.diMon }} </td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td> {{ fetchedData.bfTue }} </td>
          <td>Tuesday</td>
          <td> {{ fetchedData.diTue }} </td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td> {{ fetchedData.bfWed }} </td>
          <td>Wednesday</td>
          <td> {{ fetchedData.diWed }} </td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td> {{ fetchedData.bfThu }} </td>
          <td>Thursday</td>
          <td> {{ fetchedData.diThu }} </td>
        </tr>
        <tr>
          <td>Friday</td>
          <td> {{ fetchedData.bfFri }} </td>
          <td>Friday</td>
          <td> {{ fetchedData.diFri }} </td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td> {{ fetchedData.bfSat }} </td>
          <td>Sunday</td>
          <td> {{ fetchedData.diSun }} </td>
        </tr>
      </tbody>
      <br>
      <thead>
        <tr>
          <th >Recess Week</th>
          <th >Registered</th>
          <th >Dietary Requirement</th>
          <th >Registered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>With recess week</td>
          <td> {{fetchedData.totalRec}} </td>
          <td>None</td>
          <td> {{fetchedData.none}} </td>
        </tr>
        <tr>
          <td>Without recess week</td>
          <td> {{fetchedData.totalNoRec}} </td>
          <td>Halal</td>
          <td> {{fetchedData.halal}} </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Vegetarian</td>
          <td> {{fetchedData.vegetarian}} </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import StudentMealPlanService from '@/services/StudentMealPlanService'

  export default {
    data () {
      return {
        fetchedData: null,
      }
    },
    async mounted() {
      this.fetchedData = (await StudentMealPlanService.getRegistered()).data
      console.log(this.fetchedData)
    }
  }
</script>

<style>

</style>