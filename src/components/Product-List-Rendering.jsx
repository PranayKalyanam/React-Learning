export default function Product() {
    // 1st way : Best to take array of Object and give unique id's

     // const products = [
    //     {id:1, name:"Laptop", price:50000},
    //     {id:2, name:"Phone", price:10000},
    //     {id:3, name:"Mouse", price:500},
    //     {id:4, name:"Laptop", price:100000}
    // ];

     //Using map
    //mapping the products to product one by one 

    // const productList = products.map((product) => (
    //         <h1 key={product.id}>{product.name}: ${product.price}</h1>
    //     ));
    //     return <div>
    //         {/* <h1>Product List</h1> */}
    
    //         {/* //Rendering the product in products one by one */}
    //         {productList}
    //     </div>


    // 2nd way : using array of strings
    //will show warning in the console because two childs will have same id or key
    //To avoid it we use array of Object with different id's.
    //We can also solve it here by taking the index as key.
    const products = ["Laptop", "Phone", "Mouse", "Laptop"];

    const productList = products.map((product, index) => (
        <h1 key={index}>{product}</h1>
    ));
    return <div>
        {/* <h1>Product List</h1> */}

        {/* //Rendering the product in products one by one */}
        {productList}
    </div>

   
}