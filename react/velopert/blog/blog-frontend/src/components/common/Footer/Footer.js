import React from 'react'
import styles from './Footer.scss'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classnames.bind(styles)

const Footer = () => (
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>abel blog</Link>
    <div className={cx('admin-login')}>admin login</div>
  </footer>
)

export default Footer