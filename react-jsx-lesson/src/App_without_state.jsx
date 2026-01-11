import './App.css'
//ts 类型声明
/*interface PRODUCT  {
    category:string,
    price:string,
    stocked:boolean,
    name:string
}*/
const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function SearchBar() {
    return (
        <form>
            <input type='text' placeholder='serarchFor...'></input>
            <label>
                <input type='checkbox'/>
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

function ProductCategoryRow({category}) {
    return (
        <tr>
           <th colSpan='2'>
               {category}
           </th>
        </tr>
    );
}

function ProductRow({product}) {
    const name = product.stocked? product.name:
        <span style={{color:'red'}}>
            {product.name}
        </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable(props: {products}) {
    let rows =[]
    let lastCategory = null
    prodoucts.forEach(product=>{
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow key={product.category} category = {product.category}/>
            )
        }
        rows.push(
            <ProductRow product = {product} key={product.name}/>
        )
        //保证遍历所有 category
        lastCategory = product.category
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

function FilterableProductTable(props: { products }) {
    return (
        <div>
            <SearchBar/>
            <ProductTable products={products}/>
        </div>
    );
}

function App_without_state() {
    return <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
}

export default App_without_state
