import {Switch, Route } from 'react-router-dom'
import { Home } from '../Home';
import { Page404 } from '../Page404';
import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';

export const Router = () =>{
    return(
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>

         <Route 
          path="/page1" 
        //  renderの中身は全て同じパス（page1）であることを
        // propsの中身（match:url=page1）を使って表す
        // ※render=()の中にはpropsが自動的に入ってる
         render={({match:{url}}) => (
         <Switch>
             {page1Routes.map((route)=>(
                 <Route 
                 key={route.path} 
                 exact={route.exact}
                 path={`${url}${route.path}`}
                 >
                {route.children}
                 </Route>
             ))}
           {/* {console.log(url)} */}
          {/* <Route exact path={url}> */}
            {/* <Page1 /> */}
          {/* </Route> */}
          {/* テンプレートリテラルを使う */}
          {/* <Route path={`${url}/detailA`}>
            <Page1DetailA/>
          </Route>

          <Route path={`${url}/detailB`}>
            <Page1DetailB/>
          </Route> */}
         </Switch>
         )}
        />
          {/* <Route path="/page2">
            <Page2 />
         </Route>
        </Switch> */}

        <Route 
          path="/page2" 
         render={({match:{url}}) => (
         <Switch>
             {page2Routes.map((route)=>(
                 <Route 
                 key={route.path} 
                 exact={route.exact}
                 path={`${url}${route.path}`}
                 >
                {route.children}
                 </Route>
             ))}
         </Switch>
        )}
        />

        {/* *＝「全て一致」上から見ていってどれにも当てはまらない場合にPage404を記述する */}
        <Route path ="*">
            <Page404 />
        </Route>
    </Switch>
)
}
