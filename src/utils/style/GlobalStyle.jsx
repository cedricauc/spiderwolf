import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    html {
      height:100%;
      box-sizing: border-box;
    }

    body {
      height:100%;
      padding: 0;
      margin: 0;
    }

    * {
      box-sizing: inherit;
    }

    #root {
      min-height: 100%;
      display: grid;
      grid-template-rows: auto 1fr auto;
     }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
