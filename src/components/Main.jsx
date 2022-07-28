import React, { useEffect, useState } from 'react'
import Card from './Card'
import { 
    Container, 
} from './MainElement'


const Main = () => {

    const testdata = {
    "slip": {
        "id": 0,
        "advice": ""
    }}
    const [advice,setAdvice] = useState(testdata)
    const [get,setGet] = useState(false)

    useEffect(()=>{
        fetch('https://api.adviceslip.com/advice')
        .then((response)=> response.json())
        .then((data)=> setAdvice(data))
    },[get])

  return (
    <Container>
        <Card advice={advice} setGet={setGet} get={get}/>
    </Container>
  )
}

export default Main