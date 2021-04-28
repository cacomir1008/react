import {memo} from "react"

const style ={
    width:"100%",
    height:"200px",
    backgroundColor:"khaki"
}
// memo:このコンポーネントは、propsが変更されない限り再レンダリングしないよ
export const ChildArea = memo((props) =>{
    const {open, onClickClose} = props;
    console.log("childAreaがレンダリングされた")
    // const data = [...Array(2000).keys()];
    // data.forEach(()=>{
    //     console.log("...");
    // })
    
    return(
        <>
            {open ? (
            <div style={style}>
                <p>子コンポーネント</p>
                <button onClick={onClickClose}>Close</button>
            </div>
            ):null}
        </>
    )
});