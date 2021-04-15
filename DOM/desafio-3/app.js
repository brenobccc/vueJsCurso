new Vue({
    el: '#desafio',
    data: {
        contador: 0
    },
    computed: {
        resultado() {
            return this.contador == 37 ? 'Valor igual ' : 'Valor diferente'
        }
    },
    watch: {
        contador(novo, old) {
            setTimeout(() => {
                this.contador = 0
            }, 5000)
        }
    },
    methods: {
        /* somar(){
            this.contador++;
        } */

    }
})