

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



    (async () => {

        document.addEventListener("DOMContentLoaded", async function(){
            const response = await fetch("https://character-database.becode.xyz/characters");
            const character = await response.json();

            let queryString = location.search.substring(1);
            console.log(queryString);

            character.forEach(obj => {
                if (queryString === obj.id){
                    document.getElementById("updateCharacter").addEventListener('click', async ()=>{
                        window.location.href =`edit.html?${obj.id}`
                    });
                
                let img = document.querySelector("img");
                    img.src = `data:image/png;base64, ${obj.image}`;
                    img.alt = `picture of ${obj.name}`;
                    document.getElementById("name").innerHTML = obj.name;
                    document.getElementById("shortDescription").innerHTML = obj.shortDescription;
                    document.getElementById("description").innerHTML = obj.description;
                }
            });

            


            document.getElementById("Deletecharacter").addEventListener("click", async () => {
                if(confirm ('voulez vous supprimer ?')){
                    await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    alert("personnage supprimé")
                    window.location.href = "../index.html"
                }else{
                    alert('supprimé de l api');
                }
            });

        });
    })();
