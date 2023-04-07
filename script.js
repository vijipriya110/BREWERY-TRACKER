var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","state");
input.placeholder="new york";
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.style.color="blue";
button.addEventListener("click",foo);

let name=document.createElement("div");
name.setAttribute("id","name");

let brewery_type=document.createElement("div");
brewery_type.setAttribute("id","brewery_type");

let address_1=document.createElement("div");
address_1.setAttribute("id","address_1");

let website_url=document.createElement("div");
website_url.setAttribute("id","website_url");

let phone=document.createElement("div");
phone.setAttribute("id","phone");

div.append(input,button,name,brewery_type,address_1,website_url,phone);
document.body.append(div);

async function foo(){
    var res=document.getElementById("state").value;
    console.log(res); 

    var url=`https://api.openbrewerydb.org/v1/breweries?by_state=${res}`;
    
    var res1=await fetch(url);
    var res2=await res1.json();
    console.log(res2);
    try{
    let index=res2.length-1;
    console.log(res2[index]);
    console.log(res2[index].name);
    console.log(res2[index].brewery_type);
    console.log(res2[index].address_1);
    console.log(res2[index].website_url);
    console.log(res2[index].phone);

    name.innerHTML=`The Brewery name:${res2[index].name}`;
    address_1.innerHTML=`The Brewery Address:${res2[index].address_1}`;
    brewery_type.innerHTML=`The Brewery Type:${res2[index].brewery_type}`;
    website_url.innerHTML=`The Brewery website-URL:${res2[index].website_url}`;
    phone.innerHTML=`The Brewery Phone Number:${res2[index].phone}`;
  
}
   
      catch(error){
     console.log(error);
      
    }
  }

 
  
  
