import React from 'react';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

const SumPage = ({valueOnChangeForFirstNumber,valueOnChangeForSecondNumber,sumOfTwoNumber,sum}) => {
  return (
    <>
    <Input valueOnChange={valueOnChangeForFirstNumber} placeholder='Enter a Number'/>
    <Input valueOnChange={valueOnChangeForSecondNumber} placeholder='Enter another Number'/>
    <Button name='Sum' sumOfTwoNumber={sumOfTwoNumber} />   
    <input value={sum} /> 
    </>
  )
}

export default SumPage;