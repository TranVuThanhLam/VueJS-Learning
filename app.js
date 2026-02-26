new Vue({
    el: '#vue-app',
    data: {
        age : 25,
        x: 0,
        y: 0,
    },
    methods: {
        add: function(year) {
            this.age+= year;
        },
        subtract: function(year) {
            this.age-= year;
        },
        updateXY: function(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
}); 