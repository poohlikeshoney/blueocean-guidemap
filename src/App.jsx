import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Main from "./routes/Main";
import SubPage from './routes/SubPage'
import Footer from './layout/Footer'
import {pageData} from "./data"

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const headerHeight = header.getBoundingClientRect().height;
      const arrowUp = document.querySelector('.arrow_up');

      if (headerHeight < window.scrollY) {
        header.classList.add('dark');
      } else {
        header.classList.remove('dark');
      }

      if (window.scrollY > 250) {
        arrowUp.classList.add('active');
      } else {
        arrowUp.classList.remove('active');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // pageData.find(item => item.url === "restaurant").data.sort((a, b) => {
  //     if (a.sale && !b.sale) {
  //       return -1;
  //     } else if (!a.sale && b.sale) {
  //       return 1; 
  //     }
  //     return 0;
  // });

  return (
    <div className="App">
			<div className='container'>
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
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
