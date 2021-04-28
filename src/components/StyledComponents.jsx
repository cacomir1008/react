import styled from "styled-components";

export const StyledComponents=() =>{
    return(
        // <div>
        <SContainer>
            <Stitle>- Styled Components-</Stitle>
            <Sbutton>Fight!!</Sbutton>
        </SContainer>
        // </div>
    )
}

// スタイルをあてたcomponentを作成していく
// 後から見ると他のcomponentを当て込んだのか分からなくなるので、
// 頭にSをつけるなどわかるようにしておくのも良い
const SContainer = styled.div`
    border:solid 2px pink;
    border-radius:20px;
    padding:8px;
    margin:8px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Stitle = styled.p`
    margin:0;
    color:skyblue;
`
const Sbutton = styled.button`
    background-color:#abedd8;
    border:none;
    padding:8px;
    border-radius:8px;
    &:hover{
    background-color:pink;
    color:white;
        cursor:pointer;
}
`