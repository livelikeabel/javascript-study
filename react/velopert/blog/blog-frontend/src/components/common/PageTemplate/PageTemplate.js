import React from 'react'
import styles from './PageTemplate.scss'
import classnames from 'classnames/bind'
import Header from 'components/common/Header'

const cx = classnames.bind(styles)

const PageTemplate = () => (
  <div className={cx('page-template')}>
    <Header />
  </div>
)

export default PageTemplate
