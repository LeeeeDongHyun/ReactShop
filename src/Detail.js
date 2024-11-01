import data from "./data.js"; //export한걸 import해서 data라고 저장함
import './App.css'
import {useParams} from "react-router-dom";

function Detail({shoes = []}) {
    const {id} = useParams();
    const product = shoes.length > 0
        ? shoes.find((product, index) => index + 1 === parseInt(id)) : null;

    return (
        <div>
            <div>
                <h2>{product.title}</h2>
                <img src={product.img} width="30%" alt={product.title}></img>
                <h2>{product.price}원</h2>
            </div>
            <button>구매하기</button>
        </div>
    )
}

export default Detail;