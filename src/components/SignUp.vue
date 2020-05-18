<template>
    <div class="signup">
        <div v-if="submitted" class="alert alert-success">
            <strong>Success!</strong> Redirecting in 3 seconds..
        </div>
        <ValidationObserver ref="observer">
        <b-form slot-scope="{ validate }" @submit.prevent="validate().then(post)">
        <ValidationProvider rules="required" name="Name">
            <b-form-group slot-scope="{ valid, errors }" label="Name">
                <b-form-input
                type="text"
                v-model="account.name"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter name">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required|email" name="Email">
            <b-form-group 
            slot-scope="{ valid, errors }"
            label="Email">
                <b-form-input
                type="email"
                v-model="account.email"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter email">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required" name="Matric ID">
            <b-form-group 
            slot-scope="{ valid, errors }"
            label="NUS Matriculation ID">
                <b-form-input
                type="text"
                v-model="account.matric_id"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter NUS matriculation ID">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required" name="Password" vid="password">
            <b-form-group 
            slot-scope="{ valid, errors }"
            label="Password">      
                <b-form-input
                type="password"
                v-model="account.password"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter password">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required|confirmed:password" name="Confirm Password">
            <b-form-group 
            slot-scope="{ valid, errors }"
            label="Confirm Password">
                <b-form-input
                type="password"
                v-model="account.confirmation"
                :state="errors[0] ? false : (valid ? true : null)">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

        <b-button block type="submit" variant="primary">Submit</b-button>
        </b-form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    account:{
        name: '',
        email: '',
        matric_id: '',
        password: '',
        confirmation: '',
    },
    submitted : false
  }),
    methods: {
        post: function() {
            this.submitted = true;
            const axios = require('axios');
            axios.post('https://cors-anywhere.herokuapp.com/jsonplaceholder.typicode.com/posts', {
                // placeholder api, to be replaced with actual server
                user_id: 1,
                firstName: this.account.firstName,
                lastName: this.account.lastName,
                email: this.account.email,
                password: this.account.password,
            }).then(
                setTimeout(() => {this.$router.push('MealSelection'); }, 3000)
            )
        }
    }
}
</script>

<style lang="scss">
form {
   max-width: 500px;
   margin: 0 auto; 
   text-align: left;
}
.form-group > label {
    font-weight: 600;
}
</style>