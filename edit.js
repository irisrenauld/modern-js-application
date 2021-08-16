
    let base64 = ""

    let previewFile = () => {
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.onload = function () {
          preview.src = reader.result;
          base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
        };
      
        if (file) {
          reader.readAsDataURL(file);
        }
}
document.getElementById("uploadFile").addEventListener("change", previewFile);

(async() => {
    let current = window.location.href;
    let splittedCurrent = current.split(`?`);
    let idSplit = splittedCurrent[1];

    let server = await fetch(`https://character-database.becode.xyz/characters/${idSplit}`);
    let charCard = await server.json();

    base64 = charCard.image;
    document.getElementById("image").src = `data:image/png;base64,${charCard.image}`;
    document.getElementById("heroName").value = charCard.name;
    document.getElementById("heroShortDescription").value = charCard.shortDescription;
    document.getElementById("heroDescription").value = charCard.description;

    document.getElementById("Savechanges").addEventListener("click", async () => {
        let inputs = Array.from(document.querySelectorAll(".data"));

        let values = inputs.map(({ value })=>{
            return value.trim();
        });

        if (values.some((value) => value === "")) {
            alert("svp remplissez tous les champs")
            return;
        }
        

        let [name, shortDescription, description, image] = values;
        
        if(confirm ('voulez vous ajouter la modification ?')){
            const postData = await fetch(`https://character-database.becode.xyz/characters/${idSplit}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    shortDescription:shortDescription,
                    description:description,
                    image: base64,
                })
            })
            alert("modification ajouté")
            window.location.href = "mainpage.html"
        }
    });
    document.getElementById("Deletecharacter").addEventListener("click", async () => {
        if(confirm ('voulez vous supprimer ?')){
            await fetch(`https://character-database.becode.xyz/characters/${idSplit}`, {
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
})();