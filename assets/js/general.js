let names=['Dhruv_Misra', 'Jayant_Nagar', 'Sushant_Faujdar', 'Utkarsh_Gupta', 'Vikash_Soni', 'Yogesh_Singh', 'Vaibhav_Kadiyan', 'Lakshay_Gupta', 'Hardik_Agrawal'];
let POSITION = ['PRESIDENT', 'PRESIDENT', 'GENERAL SECRETARY', 'GENERAL SECRETARY', 'GENERAL SECRETARY', 'GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY','GENERAL SECRETARY'];
let COUNCIL = ['STUDENT\'S GYMKHANA', 'STUDENT\'S GYMKHANA', 'UG CAREER AND ACADEMICS', 'UG CAREER AND ACADEMICS', 'PG CAREER AND ACADEMICS', 'PG CAREER AND ACADEMICS', 'GAMES AND SPORTS', 'MEDIA AND CULTURE', 'SCIENCE AND TECHNOLOGY']
let cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv executive";
document.querySelector("body").appendChild(cardContainingDiv);
let idx = 0;
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
    image.src=`assets\\images\\executives\\Executive 24\\${names[name].replace("_"," ")}.jpeg`;
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
    let position = document.createElement("p");
    position.className="position";
    position.innerText = POSITION[idx];
    let council = document.createElement("p");
    council.className="council";
    council.innerText = COUNCIL[idx];
    idx = idx+1;
    manifesto.appendChild(click);
    pop.appendChild(manifesto);
    imageDiv.appendChild(image);
    imageDiv.appendChild(pop);
    description.appendChild(identity);
    description.appendChild(position);
    description.appendChild(council);
    imageDiv.appendChild(description);
    card.appendChild(imageDiv);    
    cardContainingDiv.appendChild(card);
}


// let senCand = document.createElement('h1');
// senCand.innerText = "SENATOR CANDIDATES";
// document.querySelector("body").appendChild(senCand);















let names23=['Aditya_Sati', 'Anand_Mahala', 'Arihant_Satpathy', 'Divi_Pothukuchi', 'Divyaman_Pal', 'Harshul_Kamboj', 'Jaiveer_Sabharwal', 'Kishor_Kunal', 'Ravi_Arora', 'Vedant_Shekhar_Tiwari']
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsY23";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names23){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names23[name]}popup`).className="hoverPopUp showPopUp";
        console.log("show");
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names23[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\Y23\\${names23[name].replace("_"," ").replace("_"," ")}.jpg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names23[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href="https://me-qr.com/mobile/pdf/19887120";
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names23[name].replace("_"," ").replace("_"," ");
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












names22=['Aditya_Raj_Mishra', 'Shiva_Rath', 'Chiranshu_Kataria', 'Nikant_Yadav', 'Pratham_Sharma', 'Yash_Giri', 'Vikram_Kumar', 'Ujjawal_Agarwal']
cardContainingDiv=document.createElement("div");
cardContainingDiv.className="enclosingDiv SenatorsY22";
document.querySelector("body").appendChild(cardContainingDiv);
for (let name in names22){
    let card=document.createElement("div");
    card.className="profileCard";
    let imageDiv=document.createElement("div");
    imageDiv.className="imgSenator";
    imageDiv.addEventListener("mouseenter",()=>{
        document.querySelector(`#${names22[name]}popup`).className="hoverPopUp showPopUp";
        image.style.boxShadow="2px 2px 2px 2px white";
    })
    imageDiv.addEventListener("mouseleave",()=>{
        document.querySelector(`#${names22[name]}popup`).className="hoverPopUp hide";
        image.style.boxShadow="";
    })
    let image=document.createElement("img");
    image.src=`assets\\images\\senators\\Y22\\${names22[name].replace("_"," ").replace("_"," ")}.jpeg`;
    let description = document.createElement("div");
    description.className = "desc";
    let pop=document.createElement("div");
    pop.id=`${names22[name]}popup`;
    pop.className="hoverPopUp hide";
    let manifesto=document.createElement("a");
    manifesto.href="https://me-qr.com/mobile/pdf/19887120";
    manifesto.target="_blank";
    let click=document.createElement('p');
    click.innerText="Click Here to see Manifesto";
    let identity = document.createElement("p");
    identity.className="identity";
    identity.innerText=names22[name].replace("_"," ").replace("_"," ");
    let pos = document.createElement("p");
    pos.className="position";
    pos.innerText="SENATOR BT/BS Y22";
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






let execSpan = document.querySelector(".Executive");
execSpan.addEventListener("click", ()=>{
    document.querySelector(".Executive").className = "active Executive";
    document.querySelector(".Y23").className = "inactive Y23";
    document.querySelector(".Y22").className = "inactive Y22";

    document.querySelector(".executive").className="enclosingDiv executive showPopUp";
    document.querySelector(".SenatorsY23").className="enclosingDiv SenatorsY23 hide";
    document.querySelector(".SenatorsY22").className="enclosingDiv SenatorsY22 hide";

})

let Span23 = document.querySelector(".Y23");
Span23.addEventListener("mousedown", ()=>{
    document.querySelector(".Executive").className = "inactive Executive";
    document.querySelector(".Y23").className = "active Y23";
    document.querySelector(".Y22").className = "inactive Y22";

    document.querySelector(".executive").className="enclosingDiv executive hide";
    document.querySelector(".SenatorsY23").className="enclosingDiv SenatorsY23 showPopUp";
    document.querySelector(".SenatorsY22").className="enclosingDiv SenatorsY22 hide";
})

let Span22 = document.querySelector(".Y22");
Span22.addEventListener("click", ()=>{
    document.querySelector(".Executive").className = "inactive Executive";
    document.querySelector(".Y23").className = "inactive Y23";
    document.querySelector(".Y22").className = "active Y22";

    document.querySelector(".executive").className="enclosingDiv executive hide";
    document.querySelector(".SenatorsY23").className="enclosingDiv SenatorsY23 hide";
    document.querySelector(".SenatorsY22").className="enclosingDiv SenatorsY22 showPopUp";
})