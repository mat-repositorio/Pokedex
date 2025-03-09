var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
   pegaPokemon(quantidade.value);
})



pegaPokemon(151);
function pegaPokemon(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];


        

        allpokemon.results.map((val)=>{

            
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {

                const tipos = pokemonSingle.types.map(type=>type.type.name).join('/') 


               

                pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default,numero:pokemonSingle.id,tipo:tipos});

                pokemons.sort((a, b) => a.numero - b.numero);

                


                if(pokemons.length ==quantidade){


                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";
                     
                    pokemons.map(function(val){
                        pokemonBoxes.innerHTML+=`
                        <div class="pokemon-box">
                        <p style="font-weight: bold ;text-allign:center; color:red">`+val.numero+`</p>
                        <img src="`+val.imagem+`"/>
                        <p style="font-weight: bold">`+val.nome+`</p>
                        <p style="border: 1px solid black; background-color:gray; color:white; margin-right: 5px">`+val.tipo+`</>
                        

                        `

                        


                        


                    })

                    


                }

                

            })



        })

        pokemons.map((val)=>{

            console.log(val.nome)

            



        })





    })

}