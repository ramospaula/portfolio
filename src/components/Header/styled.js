import styled from "styled-components"
import { Link } from 'gatsby';

export const MyHeader = styled.header`
margin: auto;
padding: 20px 0px;
margin-bottom: 1.45rem;
display: flex;
align-items: center;

@media (prefers-color-scheme: dark) {
  background: #162021;
}

@media (prefers-color-scheme: light) {
  background: white;
}

@media (prefers-color-scheme: no-preference) {
  background: white;
}

`
export const Wrapper = styled.div`
    margin: 0 auto;
    flex-direction: row;
    display: contents;
    justify-content: space-between;
    background-color: rgba(236, 239, 244, 0.8);
    backdrop-filter: blur(3px);
`

export const Nav = styled.nav`
margin: 0 auto;
flex-direction: row;
display: contents;
` 
export const StyledLink = styled(Link)`
  color: white; 
`

export const MyName = styled.div`
    margin: 0 auto;
`

export const MyPortfolio = styled.div`
    margin: 0 auto;
`

export const MyContact = styled.div`
    margin: 0 auto;
`