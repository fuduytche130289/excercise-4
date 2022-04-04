import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

Vue.filter('formatDate', function (date) {
    const arr = date.split("-");
    arr[0] = "Ngày " + arr[0];
    arr[1] = "Tháng " + arr[1];
    arr[2] = "Năm " + arr[2];

    return arr.join(" ");
})

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    let formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY'
    });
    return formatter.format(value);
});
