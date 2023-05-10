import styled from 'styled-components';

const Container = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Card = styled.div`
  background-color: #7155D9;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  form{
    display: flex;
    flex-direction: column;
  }
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  background-color: #F24472;
  color: #fff;
  cursor: pointer;
`;

const Result = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export{
    Container,
    Card,
    Label, 
    Input,
    Button,
    Result
}