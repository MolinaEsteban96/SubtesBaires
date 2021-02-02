const app = new Vue({

    el: "#app",

    data: {
        control: 0,
        line: null,
        linesJson: null
    },

    methods: {

    },
    
    mounted: function () {
        fetch("/api")
        .then(response => response.json())
        .then(data => {

            

            this.linesJson = data;
            console.log(this.linesJson);
            
            this.linesJson.forEach(element => {
                
                element.Linea.Estaciones[0].departure.time = new Date(element.Linea.Estaciones[0].departure.time * 1000).toLocaleTimeString();
                element.Linea.Estaciones[0].arrival.time = new Date(element.Linea.Estaciones[0].arrival.time * 1000).toLocaleTimeString();
                
                element.Linea.Estaciones[element.Linea.Estaciones.length -1].arrival.time = new Date(element.Linea.Estaciones[element.Linea.Estaciones.length -1].arrival.time * 1000).toLocaleTimeString();
                element.Linea.Estaciones[element.Linea.Estaciones.length -1].departure.time = new Date(element.Linea.Estaciones[element.Linea.Estaciones.length -1].departure.time * 1000).toLocaleTimeString();
                console.log(element)
            });

            
        })
    
    }
})