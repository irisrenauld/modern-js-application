
(() => {
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


    document.getElementById("Savechanges").addEventListener("click", async() => {
        const inputs = Array.from(document.querySelectorAll(".data"));

        let values = inputs.map(({ value }) => {
            return value.trim();
        });

        if (values.some((value) => value === "")) {
            alert("Pls complete all forms");
            return;
        }
        
         
        let [name, shortDescription, description] = values;
        // let id ;

        console.log(
            `${name} ${shortDescription} ${description} ${image}`
        );
        if(confirm ('voulez vous ajouter ?')){
          let server = await fetch("https://character-database.becode.xyz/characters",{
              method: "POST",
              headers:{
              "Content-Type": "application/json",
          },
              body: JSON.stringify({ name, shortDescription, description, image:base64, }),
          });
          alert("personnage ajouté")
          window.location.href = "mainpage.html"
      }


        // (async () => {

        //   document.addEventListener("DOMContentLoaded", async function(){
        //       const response = await fetch("https://character-database.becode.xyz/characters");
        //       const character = await response.json();
  
        //       let queryString = location.search.substring(1);
        //       console.log(queryString);
  
        //       character.forEach(obj => {
        //           if (queryString === obj.id){
        //               document.getElementById("updateCharacter").addEventListener('click', async ()=>{
        //                   window.location.href =`create.html?${obj.id}`
        //               });
                  
        //           let img = document.querySelector("img");
        //               img.src = `data:image/png;base64, ${obj.image}`;
        //               img.alt = `picture of ${obj.name}`;
        //               document.getElementById("name").innerHTML = obj.name;
        //               document.getElementById("shortDescription").innerHTML = obj.shortDescription;
        //               document.getElementById("description").innerHTML = obj.description;
        //           }
        //       });

        console.log(server);
        console.log(server.json());
        console.log(image);
    });
})();
















// (async() => {
//   const template = document.getElementsByTagName("template")[0];
//   const target = document.getElementById("target");


//   const server = await fetch("https://character-database.becode.xyz/characters");
//   charVignette = await server.json();

//   charVignette.forEach(({ image, name, shortDescription, id }) => {
//       let character = template.content.cloneNode(true);
//       console.log(image);
//       character.querySelector("img").src = `data:image/png;base64, ${image}`;
//       character.querySelector("h2").innerHTML = name;
//       character.querySelector("p").innerHTML = shortDescription;
//       character.querySelector("button").href = `singlecharacter.html?${id}`;

//       target.appendChild(character);
//   });
// })();