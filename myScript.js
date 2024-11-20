document.addEventListener('DOMContentLoaded',onLoading);
const productTable= document.querySelector('.productTable');
const categories={
    "men's clothing": "🧥",
    "jewelery": "💍",
    "electronics": "🔌", 
    "women's clothing":"👗"
}
async function onLoading(){
    try{
    let response=await fetch('https://fakestoreapi.com/products')
    let data= await response.json();
    console.log(data);
    data.forEach(product => {
let rowOfTable= `<tr>
<td>${product.id}</td>
<td>${product.title}</td>
<td>${product.price}</td>
<td>${product.description}</td>
<td>${categories[product.category]}<br>${product.category}</td>
<td><img class='imagesProduct' src= ${product.image}></td>
</tr>`
      productTable.innerHTML+=rowOfTable;  
    });
}
    catch(error){
        console.log(error);
}
}
  

