async function my_fetch(url){
    const reponse = await fetch(url)
    let parsedResponse = await reponse.json()
    console.log(parsedResponse)
}
my_fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528")
