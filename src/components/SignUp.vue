<template>
    <div class="signup">
        <div v-if="submitted" class="alert alert-success">
            <strong>Success!</strong> Redirecting in 3 seconds..
        </div>
        <ValidationObserver ref="observer">
        <b-form slot-scope="{ validate }" @submit.prevent="validate().then(register)">
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

        <ValidationProvider rules="required|domain" name="Email">
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

        <ValidationProvider rules="required|nusMatric" name="Matric ID">
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

        <ValidationProvider rules="required|customPassword" name="Password" vid="password">
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

        <ValidationProvider rules="required|confirmed:password|min:6" name="Confirm Password">
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

        <RegisterTnC @inputData="updateCheckBox" />

        <b-button block type="submit" variant="primary" value="submit">Submit</b-button>
        </b-form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import AuthenticationService from '@/services/AuthenticationService';
import RegisterTnC from './RegisterTnC';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    RegisterTnC
  },
  data: () => ({
    account:{
        name: '',
        email: '',
        matric_id: '',
        password: '',
        confirmation: '',
    },
    submitted : false,
    check: false
  }),
    methods: {
        async register() {
            const isValid = await this.$refs.observer.validate();
            if (!this.check) {
                alert('Please Read and Check the Terms and Conditions before submitting')
            }
            if (isValid && this.check) {
                this.submitted = true;
                AuthenticationService.register( {
                     name: this.account.name,
                      email: this.account.email,
                      matric_id: this.account.matric_id,
                      password: this.account.password
                 });
                  setTimeout(() => {this.$router.push('/'); }, 3000)
                }
            },
        updateCheckBox(variable) {
            this.check = variable;
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