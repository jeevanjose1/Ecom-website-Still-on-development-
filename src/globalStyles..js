import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
html{
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
    
  
}

:root{
  //colors
  --primary:#7C9473;
  --secondary:#CFDAC8;
  --tertiary:#F4F3F3;
  --black : #000;
  --quaternary:#E4E4E4;
  --default:#ffff;
  --grey:#Acacac;
  --dash:#f5f5f5;

  //media queries BREAKPOINTS

  --small: 640px;
  --medium: 768px;
  --large: 1024px;
  --xlarge: 1280px;
  --xxlarge: 1440px;

  
  //font-size

  --font-size-small: 0.8rem;
  --font-size-medium: 1rem;
  --font-size-large: 1.2rem;
  --font-size-xlarge: 1.4rem;
  --font-size-xxlarge: 1.6rem; 
  --font-size-xxxlarge: 1.8rem;
  --font-size-xxxxlarge: 2rem;
  --font-size-xxxxxlarge: 2.2rem;
  --font-size-xxxxxxlarge: 2.4rem;
  --font-size-xxxxxxxlarge: 2.6rem;
  --font-size-xxxxxxxxlarge: 2.8rem;
  --font-size-xxxxxxxxxlarge: 3rem;

  //font-weight

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  //font-family

  --font-family-sans-serif: 'Poppins', sans-serif;

  //media queries




}

*::before,*::after,*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
  background-color: var(--dash);
  button{
  cursor: pointer;
  outline: none;
  border: none;
 
}

ul{
  list-style: none;
}
li{
  text-decoration: none;
}
  
@media (min-width: var(--small)) {
    
    --font-size-small: 0.8rem;
  }
  @media (min-width: var(--medium)) {
    --font-size-medium: 1rem;
  }
  @media (min-width: var(--large)) {
    --font-size-large: 1.2rem;
  }
  @media (min-width: var(--xlarge)) {
    --font-size-xlarge: 1.4rem;
  }
  @media (min-width: var(--xxlarge)) {
    --font-size-xxlarge: 1.6rem;
  }

}

`;

export default GlobalStyle;
