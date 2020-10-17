
import PropTypes from "prop-types"
import React from "react"


import * as S from './styled'

const Header = ({ siteTitle }) => (
  <S.MyHeader>
    <S.Wrapper>
      <S.Nav>
        <S.StyledLink to="/">
          <S.MyName> Ana Ramos </S.MyName>
        </S.StyledLink>
        <S.MyPortfolio>Portfolio</S.MyPortfolio>
        <S.MyContact>Contato</S.MyContact>
     </S.Nav>
    </S.Wrapper>
  </S.MyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
