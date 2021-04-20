new Vue({
    el: '#desafio',
    data: {
        classe1: 'destaque',
        tamanho: 'tamanho',
        cor: 'cor',
        classe: 'box'
    },
    methods: {
        iniciarEfeito(){
            setInterval(() => {
                this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
            },1000)
        }
    }
})