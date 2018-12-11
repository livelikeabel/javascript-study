import React from 'react'
import styles from './Header.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Header = () => (
  <div className={cx('header')}>
    Header
  </div>
)

export default Header