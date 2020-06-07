import Api from '@/services/Api'

export default {
    getConsumption() {
        return Api().get('Consumption')
    },
    submitConsumption(ConsumptionContent) {
        return Api().post('Consumption', ConsumptionContent)
    }
}