import './App.css'
import {useState} from "react";
//ts 类型声明
/*interface PRODUCT  {
    category:string,
    price:string,
    stocked:boolean,
    name:string
}*/
// 判断
// 1.哪些随着时间推移会改变且不能通过原始数据或者prop 传递的数据 可以做 state 状态存储，供后续使用
// 2.同时考虑react是单向数据流，需要考虑添加反向数据流-即setState
// 3.考虑 state 定义在哪个组件中：通常考虑使用位置的父组件
const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
//此处添加反向数据传输-改变父组件filterText和isStockOnly的值，以此控制ProductTable中的两个参数状态，进一步控制产品表中的展示
function SearchBar({
                       filterText,
                       isStockOnly,
                       onFilterTextChange,
                       onIsStockOnlyChange
}) {
    return (
        <form>
            <input
                type='text'
                value = {filterText}
                placeholder='serarchFor...'
                onChange={(e)=>onFilterTextChange(e.target.value)}
            />
            <label>
                <input
                    type='checkbox'
                    checked={isStockOnly}
                    onChange={(e)=>onIsStockOnlyChange(e.target.checked)}
                />
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

function ProductTable(props: {products,filterText , isStockOnly}) {
    let rows =[]
    let lastCategory = null
    prodoucts.forEach(product=>{
        //过滤文本内容不在产品名称中，则直接返回不过滤
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) ===-1){
            return
        }
        //如果复选框没勾选，并且是非 stocked 的 直接返回
        if (isStockOnly && !product.stocked) {
            return
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow key={product.category} category = {product.category}/>
            );
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
    //此处定义 state
    //默认 文本查找过滤内容为空
    const [filterText,setFilterText] = useState('')
    //默认未勾选复选框
    const [isStockOnly,setIsStockOnly] = useState(false)
    //等价于状态提升时，单独提取setState的函数
    const onFilterTextChangeOther = ()=>{
        setFilterText()
    }
    return (
        <div>
            <SearchBar
                filterText = {filterText}
                isStockOnly = {isStockOnly}
                onFilterTextChange={setFilterText()}
                onIsStockOnlyChange={setIsStockOnly()}
            />
            <ProductTable products={products} filterText = {filterText} isStockOnly = {isStockOnly}/>
        </div>
    );
}

function App() {
    return <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
}

export default App
