import styled from "styled-components";

export const Wrapper = styled.div.attrs({
    className: 'form-group',
  })`
       width: 100%;
      max-width: 600px;
      padding: 2em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      
  `


export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-top: 2em;

`

// export const Button = styled.a.attrs({
//     className: `btn btn-success`,
//   })`
   
//     margin-top: 10rem;
//     display: flex;
   
//   `
  export const Button = styled.a.attrs({
    className: `btn btn-outline-success`,
  })`
   
    position: relative;
    margin-top: 10rem;
    display: flex;
    width:5em;
    margin: 1%;
  `