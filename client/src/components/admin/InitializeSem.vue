<template>
    <div class="container">   
        <div class="jumbotron">
            <!-- Select Semester drop down -->
            <p>Select Academic Year:</p>
            <b-form-select v-model="AcadYear" 
            :options="AcadYearOptions">
            </b-form-select>

            <!-- Data fetched from database -->
            <h1 class="display-4">Academic Year: {{AcadYear}}</h1>
            <p class="lead">Breakfast Cost/ meal: (fetch cost here)</p>
            <p class="lead">Dinner Cost/ meal: (fetch cost here)</p>
            <p class="lead">Total weeks with recess week: (fetch here)</p>
            <p class="lead">Total weeks without recess week: (fetch here)</p>
            <hr class="my-4">

            <!-- Initialize -->
            <v-btn class="primary" id="initializeBtn" dark @click.prevent="initialize">INITIALIZE COST AND WEEKS</v-btn> 
            <br> 
            <v-btn class="primary" id="initializeBtn" dark @click.prevent="semester">INITIALIZE NEW SEMESTER</v-btn>
            <div class="updateCostForm" v-if="openInitialize">
            <div>
                <v-text-field label="Enter breakfast cost to be updated" 
                v-model="breakfastCost"
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateBreakfastCost">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter dinner cost to be updated" 
                v-model="dinnerCost"
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateDinnerCost">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter total semester weeks including recess week" 
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="RecessTotalWeeks">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter total semester weeks excluding recess week" 
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="NoRecessTotalWeeks">Update</v-btn>
            </div> 
        </div>
            <div id="semesterID" v-if="semesterYear">
                <AddSemester/> 
            </div>
        </div>
      
    </div>
</template>

<script>
import CostService from '@/services/CostService'
import SemesterYear from '@/services/SemesterYear'
import AddSemester from './AddSemester'

export default {
    name: 'InitializeSem',
    components: {
        AddSemester
    },
    data() {
        return {
            breakfastCost: null,
            dinnerCost: null,
            openInitialize: false,
            semesterYear: false,
            error: null,
            AcadYear: null,
            AcadYearOptions: [],
        }
    },
    methods: {
        initialize() {
            this.openInitialize = !this.openInitialize;
        },
        semester() {
            this.semesterYear = !this.semesterYear;
        },
        updateBreakfastCost() {
            CostService.updateBreakfastCost({
                breakfastOrDinner: '0',
                cost: this.breakfastCost
            })
        },
        updateDinnerCost() {
            CostService.updateDinnerCost({
                breakfastOrDinner: '1',
                cost: this.dinnerCost
            })
        },
    },
    async mounted() {
        this.AcadYearOptions = (await SemesterYear.getSemesters()).data
            .map(element => element.semesterYear)
    }
    // Todo: Add methods for updateBreakfast and updateDinner 
}
</script>

<style scoped>
    .ma-2 {
        margin-top: 15px;
    }

    .updateCostForm {
        max-width: 70%;
    }

    #initializeBtn {
        margin: 10px;
    }

    #semesterID {
        margin-top: 50px;
    }

</style>