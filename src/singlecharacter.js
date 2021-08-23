

    // (async () => {

    //     document.addEventListener("DOMContentLoaded", async function(){
    //         const response = await fetch("https://character-database.becode.xyz/characters");
    //         const character = await response.json();

    //         let queryString = location.search.substring(1);
    //         console.log(queryString);

    //         character.forEach(obj => {
    //             if (queryString === obj.id){
    //                 document.getElementById("updateCharacter").addEventListener('click', async ()=>{
    //                     window.location.href =`edit.html?${obj.id}`
    //                 });
                
    //             let img = document.querySelector("img");
    //                 img.src = `data:image/png;base64, ${obj.image}`;
    //                 img.alt = `picture of ${obj.name}`;
    //                 document.getElementById("name").innerHTML = obj.name;
    //                 document.getElementById("shortDescription").innerHTML = obj.shortDescription;
    //                 document.getElementById("description").innerHTML = obj.description;
    //             }
    //         });

            


    //         document.getElementById("Deletecharacter").addEventListener("click", async () => {
    //             if(confirm ('voulez vous supprimer ?')){
    //                 await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
    //                     method: 'DELETE',
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                 });
    //                 alert("personnage supprimé")
    //                 window.location.href = "../index.html"
    //             }else{
    //                 alert('supprimé de l api');
    //             }
    //         });

    //     });
    // })();


//     // fetch character
// const responseToCharacter = async() =>{
//         const response = await fetch("https://character-database.becode.xyz/characters");
//         return character = await response.json();

// }
// const DeleteCharacter = async() =>{
//     if(confirm ('voulez vous supprimer ?')){
//         await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         alert("personnage supprimé")
//         window.location.href = "../index.html"
//     }else{
//         alert('supprimé de l api');
//     }
// };
// const fontction = ()=>{
//   const queryString = location.search.substring(1);

// document.addEventListener("DOMContentLoaded", async function() {

//     await responseToCharacter();


//     // give an id to the url
//     character.forEach(obj => {
//         if (queryString === obj.id) {
//             document.getElementById("updateCharacter").addEventListener('click', async() => {
//                 window.location.href = `edit.html?${obj.id}`
//             });

//             let img = document.querySelector("img");
//             img.src = `data:image/png;base64, ${obj.image}`;
//             img.alt = `picture of ${obj.name}`;
//             document.getElementById("name").innerHTML = obj.name;
//             document.getElementById("shortDescription").innerHTML = obj.shortDescription;
//             document.getElementById("description").innerHTML = obj.description;
//         }

//     });

//     document.getElementById("Deletecharacter").addEventListener("click", async() => {
//         await DeleteCharacter();
//     });

// });
// }
// export default responseToCharacter();
// export default DeleteCharacter();
// export default fontction();

// FETCH JSON
export const responseToCharacter = async() => {
    const response = await fetch("https://character-database.becode.xyz/characters");
    return await response.json();
}

// DELETE CHARACTER
export const queryString = location.search.substring(1);
export const deleteChar = async() => {
    if (confirm('voulez vous supprimer ?')) {
        await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert("personnage supprimé")
        window.location.href = "../index.html"
    } else {
        alert('supprimé de l api');
    }
}




// GIVE AN ID TO THE URL
export const charId = (test) => {
    test.forEach(obj => {
        if (queryString === obj.id) {
            document.getElementById("updateCharacter").addEventListener('click', async() => {
                window.location.href = `edit.html?${obj.id}`
            });

            let img = document.querySelector("img");
            img.src = `data:image/png;base64, ${obj.image}`;
            img.alt = `picture of ${obj.name}`;
            document.getElementById("name").innerHTML = obj.name;
            document.getElementById("shortDescription").innerHTML = obj.shortDescription;
            document.getElementById("description").innerHTML = obj.description;
        }

    })
};