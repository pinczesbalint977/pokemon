var pokemonResault = document.getElementById("pokemon-resault");

window.addEventListener("load", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);

            var pokemons = data.results;

            var output = "";

            for(var i in pokemons){

                output += `

                    <div>
                       <h4>${pokemons[i].name}</h4>
                       <a href="${pokemons[i].url}"> ${pokemons[i].url}</a>
                    </div>
                
                `;
            }

            pokemonResault.innerHTML = output;
        }
    }

    xhr.send();
})