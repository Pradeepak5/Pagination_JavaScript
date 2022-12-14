var baseURL="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
var apiURL = `${baseURL}`;
var apiData=[];
let pageSize=10;
let currentPage=1;

async function renderTable(){
    await getData();
    var userData="";

    apiData.filter((row, index)=>{
        let start=(currentPage-1)*pageSize;
        let end=currentPage*pageSize;
        if(index>=start && index<end) return true;
    }).forEach(data=>{
        userData+="<tr>"
        userData+=`<td>${data.id}</td>`
        userData+=`<td>${data.name}</td>`
        userData+=`<td>${data.email}</td>`
    })
    document.getElementById("tbl").innerHTML=userData;
}
renderTable();

var count=1;
var countBreak=1;
function previousPage(){
    var link=document.getElementsByClassName("link");
    if(currentPage>1){
        currentPage--;
        count--;
        if(count<countBreak){
            document.getElementById("li1").innerHTML=count;
            document.getElementById("li2").innerHTML=count+1;
            document.getElementById("li3").innerHTML=count+2;
            document.getElementById("li4").innerHTML=count+3;
            document.getElementById("li5").innerHTML=count+4;
            if(count>=1 && count<=5){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[0].classList.add("active");
            }
            countBreak--;
        }else{
            if(count==6){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[0].classList.add("active");
            } 
            if(count==7){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[1].classList.add("active");
            } 
            if(count==8){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[2].classList.add("active");
            } 
            if(count==9){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[3].classList.add("active");
            } 
        }
        renderTable();
    }
}
function nextPage(){
    var link=document.getElementsByClassName("link");
    if((currentPage*pageSize)<apiData.length){
        currentPage++;
        if(count<=pageSize-5){
            document.getElementById("li1").innerHTML=count+1;
            document.getElementById("li2").innerHTML=count+2;
            document.getElementById("li3").innerHTML=count+3;
            document.getElementById("li4").innerHTML=count+4;
            document.getElementById("li5").innerHTML=count+5;
            count++;
            countBreak++; 
        }else{
            document.getElementById("li1").innerHTML=countBreak;
            document.getElementById("li2").innerHTML=countBreak+1;
            document.getElementById("li3").innerHTML=countBreak+2;
            document.getElementById("li4").innerHTML=countBreak+3;
            document.getElementById("li5").innerHTML=countBreak+4;
            if(count==5){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[0].classList.add("active");
            } 
            if(count==6){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[1].classList.add("active");
            } 
            if(count==7){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[2].classList.add("active");
            } 
            if(count==8){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[3].classList.add("active");
            } 
            if(count==9){
                for(l of link){
                    l.classList.remove("active");
                    } 
                link[4].classList.add("active");
            }  
            count++;
        }     
        renderTable();
    }
}
document.querySelector('#prevbtn').addEventListener('click',previousPage,false)
document.querySelector('#nextbtn').addEventListener('click',nextPage,false)



async function getData(){
    const response=await fetch(apiURL);
    const user=await response.json();
    apiData=user;
    
}


