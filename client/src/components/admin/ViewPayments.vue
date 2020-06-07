<template>
    <div class="container">
      <v-data-table
      :headers="headers"
      :items="payments"
      :items-per-page="10"
      :sort-by="['payment_id']"
      :sort-desc="[false]"
      class="elevation-1"
      ></v-data-table>
      <br>
      {{ payments }}
    </div>
</template>

<script>
import PaymentService from '@/services/PaymentService'
// var moment = require('moment');

export default {
    name: "ViewPayments",
    async mounted() {
        this.payments = (await PaymentService.getPayment()).data
        // for (var i = 0 ; i < this.paymentData.length; i++) {
        //   var paymentObj = this.paymentData[i];         
        //   paymentObj.createdAt = moment(paymentObj.createdAt).format('MM/DD/YYYY');
        //   paymentObj.breakfastOrDinner = paymentObj.breakfastOrDinner ? "Dinner" : "Breakfast";
        //   this.payments.push(paymentObj);
        // }
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
          { text: 'User_id', value: 'UserId'}
        ],
        payments: [
        ],
      }
    }
}
</script>