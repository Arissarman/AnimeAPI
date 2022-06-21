async function ambil(){
   
    
    fetch('https://ghibliapi.herokuapp.com/films/')
        .then(response => response.json())
        .then(json => {
            let data = '';
            for (let i = 0; i < json.length; i++) {
                console.log(json[i].title);
                data = data + `
                <a href="#"><img class="poster" src="${json[i].image}" ></a>
                `;
            }
            console.log(json);
            document.getElementById("anime").innerHTML = data;
        })
}
ambil();