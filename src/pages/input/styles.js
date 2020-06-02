import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    label {
      background-size: cover;
      top: 0;
      left: 0;
      right: 0;
      position: absolute;
      cursor: pointer;
      height: 400px;
      border: 1px dashed #fff;
      margin: 0px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;
