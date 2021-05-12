import React from "react"
import { createGlobalStyle } from "styled-components"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    
  }
  body {
    font-family: "Open Sans";
    background-image: linear-gradient(20deg, #b721ff 0%, #21d4fd 100%);    
    }`
