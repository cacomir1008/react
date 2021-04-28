import React from 'react'
// link=aタグみたいなもの　簡単にページ遷移できる
// Switch ＝ページ出し分け
import {BrowserRouter, Link} from 'react-router-dom'
// useCallback＝関数のメモ化　useMemo =変数のメモ化
import {useState,useCallback,useMemo} from 'react'
import './App.css';
import { ChildArea } from './ChildArea';
import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { Styledjsx } from './components/Styled.Jsx';
import { StyledComponents } from './components/StyledComponents';

import { Router } from './router/Router';

// stateが変わる＝再レンダリングして差分を検知
export default function App() {
  console.log('App')
  const [text,setText] = useState('');
  // boolean
  const [open,setOpen] = useState(false);

  const onChangeText =(e) =>setText(e.target.value);
  // !＝今と反対にする
  const onClickOpen =() =>setOpen(!open);

  const onClickClose =useCallback(() =>setOpen(false),[setOpen]);
  // useMemoで変数のメモ化
  const temp = useMemo(()=>1+3,[])
  console.log(temp)
  return (
    <div className ="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      {/* props:openにopenのstateを渡す */}
      <ChildArea open={open} onClickClose={onClickClose}/>
      <InlineStyle />
      <CssModules />
      <Styledjsx />
      <StyledComponents />
      <Emotion />

      {/* 画面表示切り替え */}
      <BrowserRouter>
        <div className="App2">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </div>
        <Router />
      </BrowserRouter>
    </div>
  );
}


