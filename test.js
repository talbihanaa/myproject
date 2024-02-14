








  





let plus =document.getElementsByClassName('plus');
console.log(plus);
for(let inc of plus ){
  inc.addEventListener('click',function(){
    inc.previousElementSibling.innerText++
    updateTotal()
  })
}
let moins =document.getElementsByClassName('moins');
console.log(moins);
for(let dec of moins ){
  dec.addEventListener('click',function(){
    if( dec.nextElementSibling.innerText>0){
      dec.nextElementSibling.innerText--
    }
    updateTotal()
  })
}
let quantity=document.getElementsByClassName('quantity');
let price =document.getElementsByClassName('price');
console.log(quantity);

function updateTotal() {
    let total=0;
    
      for(let i =0; i< quantity.length; i++){
  total+=quantity[i].innerText * price[i].innerText;

document.getElementById('total').innerText=total;

// console.log(price[i].innerText);
      

}
// console.log(total);
     }
let remove = document.getElementsByClassName('remove');
console.log(remove)
for (let index = 0; index < remove.length; index++) {
  let btn= remove[index];
  btn.addEventListener('click',function(event){
    let btnclicked= event.target
    btnclicked.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  })
  
}
function toggleLike(button) {
      button.classList.toggle('text-danger');
}
