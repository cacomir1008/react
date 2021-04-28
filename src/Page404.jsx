import { Link } from "react-router-dom"
import classes from "./components/CssModules.module.scss"

export const Page404 = () =>{
    return(
        <div>
            <h1 className={classes.page1}>ページが見つかりません</h1>
            <Link to ="/">TOPに戻る</Link>
        </div>
    )
}