// パラメータを扱う
import {useParams, useLocation} from "react-router-dom";
import classes from "./components/CssModules.module.scss"

export const UrlParameter = () =>{
    const { id } = useParams();
    const {search} = useLocation();
    // JSに元から入ってる便利機能　
    const query = new URLSearchParams(search);
    console.log(query);
    return(
        <div>
            <h1 className={classes.page1}>UrlParameterです</h1>
            <p>パラメーターは{query.get("name")}です</p>
        </div>
    )
}