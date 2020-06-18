import Api from '@/services/Api'

export default {
    getConsumption() {
        return Api().post('Consumption')
    },
    submitConsumption(ConsumptionContent) {
        return Api().post('Consumption', ConsumptionContent)
    }
}