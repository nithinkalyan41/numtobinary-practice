let ans=document.createElement("p")
document.getElementById("convert").addEventListener("click", 
function convert(){
    
    let gi = document.getElementById("none").value;
    const number = parseInt(gi);
    const result = number.toString(2);
   
    ans.innerText=result;
    document.getElementById("result").appendChild(ans);

}
);

