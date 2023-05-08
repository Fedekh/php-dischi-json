const { createApp } = Vue

createApp({
    data() {
        return {
            discs: [],
            isClicked: false,       //variabile per mostrare i dettagli del disco
            cardSelected: {},   //oggetto vuoto che conterrà i dati del disco selezionato

        }
    },
    mounted() {
        axios
            .get('http://localhost:8888/Boolean%20Fake%20Server/php-dischi-json/server.php')
            .then(response => {
                this.discs = response.data.results;
            })
    },
    methods: {
        showDetails(index) {        //funzione per mostrare i dettagli del disco
            this.isClicked = true;
             axios
            .get('http://localhost:8888/Boolean%20Fake%20Server/php-dischi-json/server.php',
            {params:{
                choise:index
            }})
            .then(response => {       
                this.cardSelected= response.data.results
            })
            
        },
       
    }


}).mount('#app')