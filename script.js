let main=document.getElementById("main");
// main.innerHTML="welcome"/
let arr=[
 "https://i.pinimg.com/736x/09/88/cd/0988cd9b6a30240bde07fc610d74fb67.jpg",
"https://i.pinimg.com/736x/da/aa/88/daaa88bafd6cdf1bab73e6387cd17434.jpg",
"https://i.pinimg.com/736x/f5/cc/e5/f5cce5cdfcf1f2f5b7e2103997778555.jpg",
"https://i.pinimg.com/736x/0d/e6/37/0de637512bf1d4e1961fa1177117ef58.jpg",
"https://i.pinimg.com/736x/c0/21/d3/c021d3f6e176795f34ec4280daffbd46.jpg",
"https://i.pinimg.com/736x/5c/59/d8/5c59d87b409bca25712eedd3b5c26abb.jpg",
"https://i.pinimg.com/736x/71/0e/ec/710eecd36ea6afa0b39f046cd041e22c.jpg",
"https://i.pinimg.com/736x/23/09/e7/2309e7bac8f5a6d43b02f59f9d2521e2.jpg",
"https://i.pinimg.com/736x/cd/20/50/cd20504cde3db0d678c5e300e331cbc3.jpg",
"https://i.pinimg.com/736x/dc/36/38/dc3638b1d6371848c41976e30d4bfe7c.jpg"];

let s="";
for(let i=1; i<=10;i++){
    let r=Math.floor(Math.random()*arr.length)
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;

