var productData = {
    data: {
        uuid: 'b445a4a8-1258-4a3f-b8aa-ab6adfd347cd', //專屬 uuid ，供後端辨識
        products: [],
    },
    getData() {
        var vm = this;
        var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

        axios.get(url)
        .then(function (res){
        vm.data.products = res.data.data;
        vm.render();
        })
    },
    render() {
        var app = document.querySelector('#app');
        var prosucts = this.data.products;
        var str = '';
        prosucts.forEach(function(item){
            str +=`
            <div class="card">
                <img src=${item.imageUrl[0]}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">商品名稱 : ${item.title}</h5>
                    <p class="card-text">商品敘述 : ${item.content}</p>
                    <p class="card-text">售價 : $${item.price}</p>                
                </div>
            </div>
            `;
        });
        app.innerHTML = str;
    }
}

productData.getData();