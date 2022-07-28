import React from 'react'
import { 
    Wrapper,
    AdviceNumber,
    AdviceText,
    HrContainer,
    DiceContainer,
    Dice
} from './MainElement'
import HrD from '../images/pattern-divider-desktop.svg'
import dice from '../images/icon-dice.svg'

const Card = ({advice,setGet,get}) => {
    
  return (
    <Wrapper>
        <AdviceNumber>ADVICE #{advice.slip.id}</AdviceNumber>
        <AdviceText>{advice.slip.advice}</AdviceText>
        <HrContainer src={HrD}/>
        <DiceContainer onClick={()=>{setGet(!get)}}>
            <Dice src={dice}/>
        </DiceContainer>
    </Wrapper>
  )
}

export default Card