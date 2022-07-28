import styled from "styled-components";

export const Container = styled.div`
    background-color: hsl(218, 23%, 16%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    width: 500px;
    background-color: hsl(217, 19%, 24%);
    height: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px ;
`
export const AdviceNumber = styled.div`
    color: hsl(150, 100%, 66%);
    letter-spacing: 4px;
    font-size: 13px;
`
export const AdviceText = styled.div`
    color: hsl(193, 38%, 86%);
    margin: 30px 0;
    width: 100%;
    word-wrap: break-word;
    text-align: center;
    font-size: 28px;
`
export const HrContainer = styled.img`
    margin-bottom: -30px;
`
export const DiceContainer = styled.div`
    height: 80px;
    width: 80px;
    background-color: hsl(150, 100%, 66%);
    border-radius: 50%;
    position: relative;
    top: 70px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        box-shadow: 0px 0px 30px 20px rgba(0,255,128,0.3);
    }
`

export const Dice = styled.img`
    height: 40%;
`