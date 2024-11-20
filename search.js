const btnSearch= document. getElementById('btnSearch');
const inptSearch= document. getElementById('inptSearch');
const searchResault= document. getElementById('searchResault');
const categories={
    "men's clothing": "🧥",
    "jewelery": "💍",
    "electronics": "🔌", 
    "women's clothing":"👗"
}
let htmlProduct="";
btnSearch.addEventListener('click',()=>{
 searchProduct(inptSearch.value)})
async function searchProduct(id){
    try{
        if (!id){
            searchResault.innerHTML='נא הקש קוד מוצר';   
            return
        }

    // let response=await fetch('https://fakestoreapi.com/products/'+id)
    let response=await fetch(`https://fakestoreapi.com/products/${id}`)
    console.log(response);
        try{
            let product= await response.json()
             console.log(product);
             htmlProduct= 
                `<h1>${product.title}</h1>
                    <table class="productTable">
                        <tr>
                            <th>id </th>
                            <th>title</th>
                            <th>price </th>
                            <th>description </th>
                            <th>category </th>
                            <th>image </th>
                        </tr>
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.price}</td>
                            <td>${product.description}</td>
                            <td>${categories[product.category]}<br>${product.category}</td>
                            <td><img class='imagesProduct' src= ${product.image}></td>
                        </tr>
                    </table>`
    
                searchResault.innerHTML=htmlProduct;   
            }
            catch(err){
                htmlProduct=`<h2>המוצר לא קיים</h2>`
                searchResault.innerHTML=htmlProduct;   
            }
        }
        catch(error){
        console.log(error);
}
}
