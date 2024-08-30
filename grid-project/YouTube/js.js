async function youtube(){
    let Json=await fetch("./json.json");
    let val=await Json.json();
    console.log(val);

    let playbox=document.getElementById("PlayBox");
    console.log(playbox.innerHTML);

    let playlist=document.getElementById("PlayList");
    console.log(playlist);
    console.log(playbox);

    for(let i of val)
    {
        console.log(i);

        let div=document.createElement("div");

        div.innerHTML=`
                       <img src="${i.thumbnail}">
                       <h1>${i.title}</h1> <br>
                        `
        console.log(div);
        
        playlist.appendChild(div);
        div.addEventListener("click",()=>{
            playbox.innerHTML=`
                              <video src="${i.video}" controls autoplay></video>
            `
        })
    }
}
youtube();