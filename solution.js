var prouction_date=document.querySelectorAll(".lbl-licitacao")[0].innerText.split(":")

console.log(prouction_date[0]+" : "+prouction_date[1]);

var bidding_date=document.querySelectorAll(".lbl-licitacao")[5].innerText.split(":")
console.log(bidding_date[0]+" : "+bidding_date[1]);

var obj=document.querySelectorAll(".lbl-licitacao")[1].innerText
var msg=document.querySelectorAll(".lbl-licitacao")[1].nextSibling.nextSibling.innerText;

console.log(obj+" :\n "+msg);


var link=document.querySelectorAll("a");
for(let i=0;i<link.length;i++)console.log(link[i].innerText);
