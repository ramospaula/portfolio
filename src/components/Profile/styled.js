import styled from 'styled-components'

export const ProfileWrapper = styled.section`
    color: #8899a6;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`

export const Apresentation = styled.div`
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    line-height: 32px;
    width: max(48vw, 7em, 4rem);
`
 
export const Content = styled.div`
padding-top: 1px;
padding-bottom: 1px;

@media (prefers-color-scheme: dark) {
  background: #140e38;
}

`

export const Name = styled.h1`
    text-align: center;
`

export const Position = styled.h1`
    text-align: center;
`

export const Description = styled.h1`
    text-align: center;
    line-height: 1.45rem;
`

export const Graduation = styled.h1`
    text-align: center;
`