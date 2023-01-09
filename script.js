let card= document.querySelector(".box");
 async function artworks(){
    try{
        let url ="https://api.artic.edu/api/v1/artworks"
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        for(let i=0;i<data.data.length;i++){
    card.innerHTML+=`
    <div class="container">
    <section class="title">Art Title : ${data.data[i].title}</section>
    <section class="date">Date of start : ${data.data[i].date_start} Date of end : ${data.data[i].date_end} Date of display : ${data.data[i].date_display}</section>
    <section class="title">Artist : ${data.data[i].artist_display}</section>
    <section class="title">Place of origin : ${data.data[i].place_of_origin}</section>
    <section class="title">Medium of Display : ${data.data[i].medium_display}</section>
    <section class="title">Credit : ${data.data[i].credit_line}</section>
    <section class="title">Dimensions : ${data.data[i].dimensions}</section> 
    </div>
    `
        }
    }
   catch(error){
    console.log(error);
   }
 }
 artworks();
