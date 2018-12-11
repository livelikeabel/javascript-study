import React from 'react'
import styles from './PageTemplate.scss'
import classnames from 'classnames/bind'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'

const cx = classnames.bind(styles)

const PageTemplate = ({ children }) => (
  <div className={cx('page-template')}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default PageTemplate
