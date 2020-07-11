<template>
    <v-col>
      <v-data-table
      :headers="headers"
      :items="payments"
      :items-per-page="10"
      :sort-by="['payment_id']"
      :sort-desc="[false]"
      class="elevation-1"
      ></v-data-table>
      <br>
    </v-col>
</template>

<script>
import PaymentService from '@/services/PaymentService'
var moment = require('moment');
export default {
    name: "ViewPayments",
    async mounted() {
        this.payments = (await PaymentService.getPayment()).data
        console.log(this.payments);
          for (var i = 0 ; i < this.payments.length; i++) {
            var paymentsObj = this.payments[i];         
            paymentsObj.createdAt = moment(paymentsObj.createdAt).format('MM/DD/YYYY');
          }
    },
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'payment_id',
          },
          { text: 'Paid on', value: 'createdAt' },
          { text: 'Amount', value: 'amount' },
          { text: 'Paid?', value: 'paymentMade' },
          { text: 'MatricID', value: 'User.matric_id'}
        ],
        payments: [
        ],
      }
    }
}
</script>