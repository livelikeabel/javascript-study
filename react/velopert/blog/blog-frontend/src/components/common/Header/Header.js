import React from 'react'
import styles from './Header.scss'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button'

const cx = classnames.bind(styles)

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">Abel blog</Link>
      </div>
      <div className={cx('right')}>
        <Button theme={'outline'}>새 포스트</Button>
      </div>
    </div>
  </header>
)

export default Header
