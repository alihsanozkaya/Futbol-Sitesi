import  Footer  from "./Footer";
import React from 'react'
import Header from './Header';

const Layout = (props) => {
  return (
    <>
        <Header/>
        {
            props.children
        }
        <Footer/>
    </>
  )
}

export default Layout;