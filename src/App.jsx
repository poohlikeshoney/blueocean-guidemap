import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./routes/Main";
import SubPage from './routes/SubPage'
import {pageData} from "./data"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Main/>}></Route>

        {
          pageData.map((item,idx)=>(
            <Route path={`/${item.url}`} key={idx} element={ <SubPage item={item}/>}></Route>
          ))
        }
        {/* 404 Page Nou Found*/}
        <Route path="*" element={<div>Page Not Found :/</div>} />
      </Routes>
    </div>
  );
}

export default App;
