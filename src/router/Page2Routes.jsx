import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
    // 画面ごとの要素を配列に
    {
        path:"/",
        exact:true,
        // レンダリングするcomponent
        children:<Page2 />
    },
    {
        // パラメーターを使う場合はpathの書き方が変わる（/XX）
        path:"/:id",
        exact:false,
        // レンダリングするcomponent
        children:<UrlParameter />
    }
];