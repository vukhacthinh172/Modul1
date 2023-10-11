let text = " ";
for(let i =0;i<=10;i++){
    text+=`<li onclick="choose(${i})" >${i}</li>`
}
document.getElementById("score").innerHTML=text ;
let score1 ;
function choose(number){
    score1= number ;
    let result = document.getElementsByTagName("li") ;
    for (let i = 0; i < result.length; i++) {
        if(number==i){
            result[i].style.backgroundColor="pink" ;
        }else{
            result[i].style.backgroundColor="white"
        }
        
    }
}
let arr = [] ;
function save(){
    let text = document.getElementById('text').value;
    let info = {
        content: text,
        score: score1,
        id: Math.floor(Math.random() * 5240000)
}
    arr.push(info)
    renderarr()
  }
  function renderarr(){
    let result= "";
    for(let i=0;i<arr.length;i++){
        result+=`<ul>
        <li>${arr[i].score}</li>
        <p>${arr[i].content}</p>
        <button>edit</button>
        <button>delete</button>
   </ul>`
    }
    document.getElementsByClassName('container')[0].innerHTML = result;
  }
