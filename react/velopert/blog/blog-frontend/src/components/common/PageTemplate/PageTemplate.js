import React from 'react'
import styles from './PageTemplate.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const PageTemplate = () => (
  <div className={cx('page-template')}>
    PageTemplate
  </div>
)

export default PageTemplate