import React, { useState } from 'react';
import {
  Container,
  Card,
  Label,
  Input,
  Button,
  Result,
} from './style';

const PixelToVwConverter = () => {
  const [pxValue, setPxValue] = useState('');
  const [vwValue, setVwValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calcula o valor em vw
    const vwValueResult = `${(pxValue / window.innerWidth) * 100}vw`;
    setVwValue(vwValueResult);
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
        {/* Exibe o resultado somente se houver um valor em vw */}
        {vwValue && <Result>O valor em VW é: {vwValue}</Result>}
      </Card>
    </Container>
  );
};

export default PixelToVwConverter;
