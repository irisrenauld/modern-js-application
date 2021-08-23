// (async() => {
//     const template = document.getElementsByTagName("template")[0];
//     const target = document.getElementById("target");


//     const server = await fetch("https://character-database.becode.xyz/characters");
//     charVignette = await server.json();

//     charVignette.forEach(({ image, name, shortDescription, id }) => {
//         let character = template.content.cloneNode(true);
//         console.log(image);
//         character.querySelector("img").src = `data:image/png;base64, ${image}`;
//         character.querySelector("h2").innerHTML = name;
//         character.querySelector("p").innerHTML = shortDescription;
//         character.querySelector("a").href = `/character-manager-js/html/singlecharacter.html?${id}`;

//         target.appendChild(character);
//     });
// })();

const characterAppender = (image, name, shortDescription, id)=>{
    let charImage=image;
    let charName=name;
    let charShortDescription=shortDescription;
    let charId=id;
    const template = document.getElementsByTagName("template")[0];
    const target = document.getElementById("target");
    let character = template.content.cloneNode(true);
    
        character.querySelector("img").src = `data:image/png;base64, ${charImage}`;
        character.querySelector("h2").innerHTML = charName;
        character.querySelector("p").innerHTML = charShortDescription;
        character.querySelector("a").href = `html/singlecharacter.html?${charId}`;

        target.appendChild(character);
}

 export const  fetchMainPage = async() => {
    
    const server = await fetch("https://character-database.becode.xyz/characters");
    const charVignette = await server.json();

    charVignette.forEach(({ image, name, shortDescription, id }) => {
        characterAppender(image, name, shortDescription, id);
      
    });
};
