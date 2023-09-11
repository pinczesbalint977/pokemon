const input = document.getElementById("pokemon-name");
img = document.getElementById("pokemon-img");
h3 = document.getElementById("pokemon");
btn = document.getElementById("btn");


btn.addEventListener("click", function(){

    var api = "https://pokeapi.co/api/v2/pokemon/" + input.value.toLowerCase();

    var xhr = new XMLHttpRequest();

    xhr.open("GET", api, true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
            

            h3.innerText = data.name;
            img.setAttribute("src", data.sprites.front_default);
            


        }
    }

    xhr.send();
})