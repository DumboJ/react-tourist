// @ts-ignore
import {showLoading} from "@/utils/loading";
import {Button} from "antd";
//@ts-ignore
import storage from "@/utils/storage";

function TestStorage() {
    const handleInsert = (type: number) => {
        if (type === 1) {
            storage.set("f", 1234);
            storage.set("product", {id: 1, type: 'phone', price: 1399})
        } else if (type === 2) {
            console.log(storage.get('product'))
        } else if (type === 3) {
            storage.del('f');
        } else {
            storage.clear();
        }
    }

    return (
        <>
            <div className="bt">
                <Button onClick={ () => handleInsert(1) }>新增</Button>
            </div>
            <div className="bt">
                <Button onClick={ () => handleInsert(2) }>获取</Button>
            </div>
            <div className="bt">
                <Button onClick={ () => handleInsert(3) }>删除</Button>
            </div>
            <div className="bt">
                <Button onClick={ () => handleInsert(4) }>清空</Button>
            </div>
        </>
    )
}

export default TestStorage