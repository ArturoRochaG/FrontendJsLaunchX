async function fetchData(){
    const inputPokemon = document.getElementById("pokemon").value;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`);
    const json = await data.json();

    document.getElementById("number").innerText = json.id;
    document.getElementById("name").innerText = json.name;
    document.getElementById("height").innerText = json.height + " m.";
    document.getElementById("weight").innerText = json.weight + " Kg.";
    document.getElementById("foto").src = json.sprites.other.home.front_shiny;
    console.log(data.json)
