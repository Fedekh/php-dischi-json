const { createApp } = Vue

createApp({
    data() {
        return {
            discs: [],
        }
    },methods:{
        getImgPath(name) {
            return new URL(`../img/Flags/${name}.svg`, import.meta.url).href;
        }
    },
    mounted() {
        axios
            .get('http://localhost:8888/Boolean%20Server%20Fake/php-dischi-json/server.php')
            .then(response => {
                this.discs = response.data.results;
                console.log(this.discs);
            })
    }
}).mount('#app')