
async function heroesWithN() {
    // busca o heroi na url da api
    const get = await fetch('https://akabab.github.io/superhero-api/api/all.json', {
        method: 'GET'
    });

    // pega o json de herois que buscou da url
    const heroes = await get.json();

    // filtra os herois onde a primeira letra do nome for N
    const heroesWithN = heroes.filter((hero) => {
        if(hero.name.charAt(0) === 'N') {
            return hero;
        }
    });

    //exibe no console os herois filtrados
    console.log (heroesWithN);

    const heroesDc = heroesWithN.filter((hero) => {
        if(hero.biography.publisher === 'DC Comics') {
            return hero;
        }
    });
    console.log(heroesDc);
}

heroesWithN();