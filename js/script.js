const { createApp } = Vue

createApp({
    data() {
        return {
            discs: [],
            isClicked: false,
            cardSelected: '',
            
        }
    },
    mounted() {
        axios
            .get('http://localhost:8888/Boolean%20Server%20Fake/php-dischi-json/server.php')
            .then(response => {
                this.discs = response.data.results;
                console.log(this.discs);
            })
    },
    methods: {
        showDetails(index) {
            this.isClicked = true;
            this.cardSelected = this.discs[index];
        },
        close(){
            this.isClicked = false;

        }
    }
    

}).mount('#app')