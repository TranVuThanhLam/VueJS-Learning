new Vue({
    el: '#vue-app',
    data: {
        name : 'Tran Vu Thanh Lam',
        website: 'https://www.youtube.com'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name + '!';
        }
    }
}); 