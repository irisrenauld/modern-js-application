
    // (() => {
    //     document.getElementById('updateCharacter').addEventListener('click', async ()=>{
    //         const reponse = await fetch("https://character-database.becode.xyz/characters");
    //         const heros = await reponse.json();
     
    //         const target = document.getElementById('target')
    //         const template = document.querySelector("#tpl-hero")
            
    //         heros.forEach(hero => {
                
    //             let clone = template.content.cloneNode(true);
               
    //             const name = clone.querySelector(".name")
    //             const alterEgo = clone.querySelector(".alter-ego")
    //             const pouvoir = clone.querySelector(".powers")
               
    //             name.innerHTML = hero.name
    //             alterEgo.innerHTML = hero.alterEgo
    //             pouvoir.innerHTML = hero.abilities
    //             target.appendChild(clone);//appendChild ajoute au target les enfants de clone
    //         });
            
    //         console.log(heros)
            
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
                    window.location.href = "mainpage.html"
                }else{
                    alert('supprimé de l api');
                }
            });

        });
    })();









     // await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                        //     method: `PUT`,
                        //     headers: {
                        //         "Content-Type": "application/json",
                        //     body: JSON.stringify({
                        //         description:`${text}`,
                        //         shortDescription:`${preface}`,
                        //         id:`${id}`,
                        //         name:`${name}`,
                        //         image:`${base64}`
                        //     })
                        //     },
                        // });


            