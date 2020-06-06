<template>
    <div class="container">   
        <div class="jumbotron">
            <!-- Select Semester drop down -->
            <p>Select Academic Year:</p>
            <b-form-select v-model="AcadYear" 
            :options="AcadYearOptions" @change="fetchWeeks">
            </b-form-select>

            <!-- Data fetched from database -->
            <h1 class="display-4">{{AcadYear}}</h1>
            <p class="lead">Breakfast Cost/ meal: {{fetchedBreakfastCost}}</p>
            <p class="lead">Dinner Cost/ meal: {{fetchedDinnerCost}}</p>
            <p class="lead">Total weeks with recess week: {{recWeeks}}</p>
            <p class="lead">Total weeks without recess week: {{noRecWeeks}}</p>
            <hr class="my-4">

            <!-- Initialize -->
            <v-btn class="primary" id="initializeBtn" dark 
            @click.prevent="initializeCost">INITIALIZE COST</v-btn> 
            <v-btn class="primary" id="initializeBtn" dark 
            @click.prevent="initializeSemester">INITIALIZE NEW SEMESTER</v-btn>

            <div class="updateCostForm" v-if="initialize">
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
            </div>
            <div id="semesterID" v-if="semester">
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
            initialize: false,
            semester: false,
            error: null,
            AcadYear: null,
            AcadYearOptions: [],
            fetchedBreakfastCost: null,
            fetchedDinnerCost: null,
            recWeeks: null,
            noRecWeeks: null,
        }
    },
    methods: {
        initializeCost() {
            this.semester = false
            this.initialize = !this.initialize
        },
        initializeSemester() {
            this.initialize = false
            this.semester = !this.semester
        },
        updateBreakfastCost() {
            CostService.updateBreakfastCost({
                breakfastOrDinner: '0',
                cost: this.breakfastCost
            })
            window.location.reload()
        },
        updateDinnerCost() {
            CostService.updateDinnerCost({
                breakfastOrDinner: '1',
                cost: this.dinnerCost
            })
            window.location.reload()
        },
        async fetchWeeks(value) {
            const weeks = (await SemesterYear.getWeeks({semesterYear: value})).data
            this.recWeeks = weeks.totalWeeksWithRecWeek
            this.noRecWeeks = weeks.totalWeeksWithoutRecWeek
        }
    },
    async mounted() {
        this.AcadYearOptions = (await SemesterYear.getSemesters()).data
            .map(element => element.semesterYear);
        const cost = (await CostService.getCosts()).data
            .map(element => element.cost)
        this.fetchedBreakfastCost = cost[0]
        this.fetchedDinnerCost = cost[1]
    }
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