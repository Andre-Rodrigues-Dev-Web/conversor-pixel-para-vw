import React, { useState } from 'react';
import{
    Container,
    Card,
    Label, 
    Input,
    Button,
    Result
} from './style'

function Conversor() {
  const [pxValue, setPxValue] = useState('');
  const [vwValue, setVwValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const vwValue = `${(pxValue / window.innerWidth) * 100}vw`;
    setVwValue(vwValue);
  };

  const handleInputChange = (event) => {
    setPxValue(event.target.value);
  };

  return (
    <Container>
      <Card>
        <h2>Conversor PX para VW</h2>    
        <form onSubmit={handleSubmit}>
            <Label htmlFor="px-input">Digite um valor em pixels:</Label>
            <Input
            type="number"
            id="px-input"
            value={pxValue}
            onChange={handleInputChange}
            required
            />
            <Button type="submit">Converter</Button>
        </form>
        {vwValue && <Result>O valor em VW é: {vwValue}</Result>}
      </Card>
    </Container>
  );
}

export default Conversor;
