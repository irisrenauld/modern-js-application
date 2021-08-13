(async() => {
    const template = document.getElementsByTagName("template")[0];
    const target = document.getElementById("target");


    const server = await fetch("https://character-database.becode.xyz/characters");
    charVignette = await server.json();

    charVignette.forEach(({ image, name, shortDescription, id }) => {
        let character = template.content.cloneNode(true);
        console.log(image);
        character.querySelector("img").src = `data:image/png;base64, ${image}`;
        character.querySelector("h2").innerHTML = name;
        character.querySelector("p").innerHTML = shortDescription;
        character.querySelector("a").href = `singlecharacter.html?${id}`;

        target.appendChild(character);
    });
})();