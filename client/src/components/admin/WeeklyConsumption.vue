<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Meal</th>
          <th class="text-left">Student(s) Registered</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in fetchedData" :key="item.meal">
          <td>{{ item.meal }}</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        fetchedData: [
          
        ],
      }
    },
  }
</script>

<style>

</style>