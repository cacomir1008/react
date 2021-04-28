import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
    // 画面ごとの要素を配列に
    {
        path:"/",
        exact:true,
        // レンダリングするcomponent
        children:<Page1 />
    },
    {
        path:"/detailA",
        exact:false,
        // レンダリングするcomponent
        children:<Page1DetailA />
    },
    {
        path:"/detailB",
        exact:false,
        // レンダリングするcomponent
        children:<Page1DetailB />
    }

];