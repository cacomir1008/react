import { Link } from "react-router-dom"
import classes from "./components/CssModules.module.scss"

export const Page2 = () =>{
    return(
        <div>
            <h1 className={classes.page2}>Page2ページ</h1>
            <Link to ="/page2/999">URL Parameter</Link>
            <br />
            <Link to ="/page2/999?name=hogehoge">Query Parameter</Link>
        </div>
    )
}