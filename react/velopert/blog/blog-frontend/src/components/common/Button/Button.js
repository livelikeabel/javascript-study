import React from 'react'
import styles from './Button.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

// 전달받은 className, onClick 등 값들이 rest 안에 들어 있다.

// JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넘겨준다.
const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>

const Button = ({ children, to, onClick, disabled, theme = 'default' }) => {
  // to 값이 존재하면 Link를 사용, 그렇지 않으면 div를 사용
  // 비활성화되어 있는 버튼일 때도 div를 사용한다.
  const Element = to && !disabled ? Link : Div

  // 비활성화하면 onClick은 실행되지 않는다.
  // disabled 값이 true가 되면 className에 disabled를 추가한다.
  return (
    <Element
      to={to}
      className={cx('button', theme, { disabled })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  )
}

export default Button
