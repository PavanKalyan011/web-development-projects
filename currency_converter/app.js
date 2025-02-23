// const Base_url="https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";
const Base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
 const dropdowns=document.querySelectorAll(".dropdown select");
 const btn=document.querySelector("button");
 const fromCurr=document.querySelector(".from select");
 const toCurr=document.querySelector(".to select");
 const msg=document.querySelector(".msg")
 for(let select of dropdowns){
    for(code in  countryList){
       // console.log( code,countryList[code]);
     let newOption=document.createElement("option")
     newOption.innerText=code;
     newOption.value=code;
     select.append(newOption)  
     if(select.name==="from" && code==="USD"){
        newOption.selected="selected"
     }else if(select.name==="to" && code==="INR"){
        newOption.selected="selected"
     }
     }
     select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
     })
 }
 const updateFlag= (element)=>{
   //  console.log(element);
   let currencyCode=element.value;
   // console.log(currencyCode)
   let countryCode=countryList[currencyCode];
   // console.log(countryCode)
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  // console.log(newSrc)
   let img=element.parentElement.querySelector("img");
  // console.log(img)
   img.src=newSrc;
 };

 const updateExchange= async()=>{
   let amount=document.querySelector(".amount input");
   let amtValue=amount.value
   if(amtValue===""||amtValue<1){
      amtValue=1;
      amount.value="1";
   }
   // console.log(amount)
   console.log(fromCurr.value ,toCurr.value)
   // const URL=`${Base_url}/${fromCurr.value}_${toCurr.value}.json`;
    let fromCode=fromCurr.value.toLowerCase()
    let toCode=toCurr.value.toLowerCase()
   const URL=`${Base_url}/${fromCode}.json`;
   ////console.log(URL)
   let response= await fetch(URL);
    //console.log(response)
   let data=await response.json();
   let curr=data[`${fromCode}`]
   let to=curr[`${toCode}`]
//  console.log(to)
   let rate=to;
   // console.log(rate)
   let finalAmount=amtValue*rate;
   // console.log(finalAmount)
   msg.innerText=`${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
 }

 btn.addEventListener("click",(evt)=>{
   evt.preventDefault();
   updateExchange();
 })

 window.addEventListener("load",()=>{
   updateExchange();
 })
