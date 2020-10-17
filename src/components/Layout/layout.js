
import React from "react"
import PropTypes from "prop-types"

import Header from '../Header/header'
import "../layout.css"
import * as S from './styled'
import GlobalStyles from '../../styles/global'
import Profile from '../Profile'


const Layout = ({ children }) => {


  return (
    <>
    <Header/>
      <Profile/>
    <S.LayoutWrapper>
      <GlobalStyles />
      <p> Ana Ramos</p>
        {children}
    </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
