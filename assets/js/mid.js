let names=['Aditya_Sati', 'Anand_Mahala', 'Arihant_Satpathy', 'Divi_Pothukuchi', 'Divyaman_Pal', 'Harshul_Kamboj', 'Jaiveer_Sabharwal', 'Kishor_Kunal', 'Ravi_Arora', 'Vedant_Shekhar_Tiwari']
let cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\Y23\\${names[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href="https://me-qr.com/mobile/pdf/19887120";
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    pos.innerText="SENATOR BT/BS Y23";
    manifesto.appendChild(click);
    pop.appendChild(manifesto);
    imageDiv.appendChild(image);
    imageDiv.appendChild(pop);
    description.appendChild(identity);
    description.appendChild(pos);
    imageDiv.appendChild(description);
    card.appendChild(imageDiv);
    cardContainingDiv.appendChild(card);
}