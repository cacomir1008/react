import { Link, useHistory } from "react-router-dom"
import classes from "./components/CssModules.module.scss"

export const Page1 = () =>{
    const arr = [...Array(100).keys()];
    console.log(arr);

    const history = useHistory();
    const onClickDetailA =() => history.push("/page1/detailA");
    
    return(
        <div>
            <h1 className={classes.page1}>Page1ページ</h1>
            {/* stateでarr変数を渡す */}
            <Link to ={{ pathname:"/page1/detailA", state:arr}}>DetailA</Link>
            <br />
            <Link to ="/page1/detailB">DetailB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailAへ</button>
        </div>
    )
}