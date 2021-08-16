
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
        console.log(server);
        console.log(server.json());
        console.log(image);
    });
})();