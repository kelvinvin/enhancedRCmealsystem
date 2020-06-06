<template>
    <div class="container">
        <div>
            <ValidationObserver ref="observer">
            <b-form slot-scope="{ validate }" @submit.prevent="validate().then(addSemYear)">

                <!-- Semester input -->
            <ValidationProvider rules="semester" name="Name">
                <b-form-group slot-scope="{ valid, errors }" label="Enter Semester Year - Format: YYYY Sem 1/2">
                    <b-form-input
                    type="text"
                    v-model="semYear"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="eg: 2019 Sem 1">
                    </b-form-input>
                    <b-form-invalid-feedback>
                    {{ errors[0] }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </ValidationProvider>
                
                <!-- Total weeks with recess week -->
            <ValidationProvider rules="totalWeeks" name="Name">"
                <b-form-group slot-scope="{ valid, errors }" label="Total weeks (with Recess Week)">
                    <b-form-input
                    type="text"
                    v-model="withRecWeek"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="eg: 15">
                    </b-form-input>
                    <b-form-invalid-feedback>
                    {{ errors[0] }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </ValidationProvider>

                <!-- Total weeks without recess week -->
            <ValidationProvider rules="totalWeeks" name="Name">
                <b-form-group slot-scope="{ valid, errors }" label="Total weeks (without Recess Week)">
                    <b-form-input
                    type="text"
                    v-model="withoutRecWeek"
                    :state="errors[0] ? false : (valid ? true : null)"
                    placeholder="eg: 13">
                    </b-form-input>
                    <b-form-invalid-feedback>
                    {{ errors[0] }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </ValidationProvider>


            <b-button block type="submit" variant="primary" 
            value="submit">Submit</b-button>
            </b-form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import SemesterYear from '@/services/SemesterYear'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

extend('semester', {
  validate: value => {
    var semesterValidation = /^\d{4} Sem (1|2)$/;
    return semesterValidation.test(value);
  },
  message: 'Format is incorrect'
});

extend('totalWeeks', {
  validate: value => {
    var semesterValidation = /^1\d$/;
    return semesterValidation.test(value);
  },
  message: 'Please enter a valid input'
});

export default {
    name: 'AddSemester',
    data() {
        return {
            semYear: null,
            error: null,
            withRecWeek: null,
            withoutRecWeek: null
        }
    },
    components: {
            ValidationObserver,
            ValidationProvider,
    },
    methods: {
        async addSemYear() {
            try {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                SemesterYear.addSemester({
                    semesterYear: this.semYear,
                    totalWeeksWithRecWeek: this.withRecWeek,
                    totalWeeksWithoutRecWeek: this.withoutRecWeek
                })
                window.location.reload()
            } 
            } catch (error) {
                this.error = 'Unable to add academic year, Please ensure that you have input all the necessary details'
                console.log(this.error)
            }
        }
    }
}
</script>

<style scoped> 
</style>