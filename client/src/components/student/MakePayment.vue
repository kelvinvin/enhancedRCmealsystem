<template>
    <div class="container">
        <div v-if="submitted" class="alert alert-success">
        <strong>Success!</strong> Your consumption has been successfully recorded!
        </div>
<!-- Submit button -->
        <b-button @click.prevent="makePayment">Pay now!</b-button>
    </div>
</template>

<script>
import PaymentService from "@/services/PaymentService";

export default {
  name: "MakePayment",
  data() {
    return {
        submitted: false,
        error: null
      }
  },
  methods: {
    makePayment() {
      try {
          this.submitted = true;
          const authUser = this.$store.state.user;
          PaymentService.makePayment({
              UserId: authUser.id
          });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.checked {
  color: orange;
}

.error {
  color: red;
}
</style>
