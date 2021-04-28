import {useLocation, useHistory} from "react-router-dom"
import classes from "./components/CssModules.module.scss"

export const Page1DetailA = () =>{
    const location = useLocation();
    console.log(location);

    const history = useHistory();
    // const onClickBack =() =>history.push("/page1")
    const onClickBack = () =>history.goBack();
    return(
        <div>
            <h1 className={classes.page1}>Page1DetailA</h1>
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
}