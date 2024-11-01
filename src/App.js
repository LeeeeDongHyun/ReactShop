/* eslint-disable */
import './App.css';
import Header from "./layout/Header";
import Detail from "./Detail";
import About from "./About"
import {useState} from "react";
import data from "./data.js"; //export한걸 import해서 data라고 저장함
import {Routes, Route, Link, Outlet} from 'react-router-dom'


function App() {

    let [shoes] = useState(data)
    return (
        <div className="App">


            <Header/>

            <Routes>

                <Route path="/" element={   <Main shoes={shoes}></Main>  }/>
                <Route path="/detail/:id" element={ <Detail shoes={shoes}/>  }/>

                <Route path="/about" element={   <About/>   }>
                    <Route path="member" element={ <div>누구누구의 정보</div> }></Route>
                    <Route path="location" element={ <div>위치 정보임</div> }></Route>
                </Route> { /* Nested Routes 라는건데 이렇게 작성하고 /about/member에 들어가면 /about내용도 보여주고 /about/member 내용도 보여줌
                            그냥 하면 안되고 해당 컴포넌트로 가서 <Outlet></Outlet> 이라는걸 해야됨.*/}
            </Routes>

        </div>
    );
}


function Main(props) {
    return (
        <div>
            <div className="main-bg"></div>

            {
                props.shoes.map(function(datas, i) {
                    return (
                        <div className="product-list">
                            <div className="product">
                                <Products datas={datas} id = {i + 1}></Products>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

function Products(props) {
    return (
            <div>
                <Link to={`/detail/${props.id}`} className="nav-link">
                <img src={props.datas.img} width="20%"></img>
                <h4>{props.datas.title}</h4>
                </Link>
                <h4>{props.datas.price}원</h4>
            </div>
    )
}

export default App;
