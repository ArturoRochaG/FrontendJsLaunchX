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

    let est=data.stats;
        let hp=est[0].base_stat;    let attack=est[1].base_stat;    let defense=est[2].base_stat;    let spattack=est[3].base_stat;    let spdefense=est[4].base_stat;    let speed=est[5].base_stat;

        graphicstats(hp,attack,defense,spattack,spdefense,speed);
}