new Vue({
    el: '#desafio',
    data: {
        SEU_NOME: "Breno",
        IDADE: 20,
        img: "https://super.abril.com.br/wp-content/uploads/2019/12/reproducao_pokemon_episodio_pokemon_centenas_criancas_hospital.jpg",
        nome: "Brito"
    },
    methods: {
        multIdade(){
            return this.IDADE*3
        },

        randomNum(){
            return Math.random(0,1);
        }

    }
})
