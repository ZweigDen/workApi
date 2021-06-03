import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.11/vue.esm-browser.js';

const app = createApp({
    data() {
        return {
            data: {
                chartNum: 0
            },
            products: [
                {
                    title: "湯",
                    id: "1",
                    imageUrl: "assets/images/product_info_01@2x.jpeg",
                    price: "100",
                    unit: "碗",
                    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    num: 0
                },
                {
                    title: "小菜",
                    id: "2",
                    imageUrl: "assets/images/product_info_02@2x.jpeg",
                    price: "50",
                    unit: "碟",
                    description: "lead-in to additional content. This content is a little bit longer.",
                    num: 0
                }, {
                    title: "飯",
                    id: "3",
                    imageUrl: "assets/images/product_info_06@2x.jpeg",
                    price: "100",
                    unit: "碗",
                    description: "This is a wider card with  text below as a natural lead-in to additionala little bit longer.",
                    num: 0
                },
                {
                    title: "茶",
                    id: "4",
                    imageUrl: "assets/images/product_info_12@2x.jpeg",
                    price: "20",
                    unit: "杯",
                    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    num: 0
                },

            ],
            chartList: [],
            customer: {
                name: "九五二七",
                phone: "0952799888",
                address: "苗栗市xx街22號",
                email: "test@yahoo.com.tw",
                total: 0,
            },
            // 金流
            payment: {
                url: "https://ssl.smse.com.tw/ezpos_test/mtmk_utf.asp",
                rvg2c: "1",
                dcvc: "107",
                od_sob: "123456",
                invoice_name: "訊航科技股份有限公司",
                invoice_num: "80129529",
                roturl: "https://zweigden.github.io/teachWeb/"
            },
            invoice: {

            }
        }
    },
    methods: {
        addChart(item) {
            this.data.chartNum++;
            item.num++;
        },
        // 更新購物車
        checkChart() {
            this.chartList = [];
            this.products.forEach(item => {
                if (item.num > 0) {
                    this.chartList.push(item);
                }
            });
            console.log(this.chartList)
        },
        // 付款方式
        payCheck(pay) {
            let url = `${this.payment.url}?Rvg2c=${this.payment.rvg2c}&Dcvc=${this.payment.dcvc}&Od_sob=${this.payment.od_sob}&Amount=${this.customer.total}&Pur_name=${this.customer.name}&Tel_number=037376006&Mobile_number=${this.customer.phone}&Address=${this.customer.address}&Email=service@smse.com.tw&Invoice_name=訊航科技股份有限公司&Invoice_num=80129529&Remark=備註&Roturl=${this.payment.roturl}&Pay_zg=${pay}`;
            window.location.href = url;
        },
        // 計算總金額
        totals() {
            let total = 0;
            this.chartList.forEach(item => {
                total += item.num * item.price;
            });
            this.customer.total = total;
        }
    }
});
app.mount('#app');