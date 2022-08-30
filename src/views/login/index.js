import React, { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';

import SxInput from '../../components/sxInput'
import LoginStyle from './style'
import { loginService } from '../../services';
import localCache from '../../utils/localCache';

const Login = memo(() => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const loginHandle = async () => {
    localCache.removeItem('current')

    const result = await loginService(name, password)
    if (result.response) {
      return message.error(result.response.data, 1)
    }
    const { id, menu, token } = result
    localCache.setItem('token', token)
    localCache.setItem('id', id)
    localCache.setItem('menu', menu)
    localCache.setItem('current', menu[0].key)
    if (!token) {
      return message.error('登录失败', 1);
    }

    navigate('/home')
    return message.success('登录成功', 1);
  }

  return (
    <LoginStyle>
      <div className="login_wrapper">
        <SxInput
          label="用户"
          labelWidth="60"
          type="text"
          placeholder="请输入用户名"
          onChange={e => setName(e.target.value)}
        />
        <SxInput
          label="密码"
          labelWidth="60"
          type="password"
          placeholder="请输入密码"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          type="primary"
          size="large"
          onClick={e => loginHandle()}
        >
          登录
        </Button>
        <div className="to_register">
          <span>没有账户？</span>
          <Link to='/register'>注册一个</Link>
        </div>
      </div>
    </LoginStyle>
  )
})

export default Login