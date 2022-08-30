import React, { memo, useState } from 'react'
import { Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import SxInput from '../../components/sxInput'
import RegisterStyle from './style'
import { registerService } from '../../services'

const Register = memo(() => {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const navigate = useNavigate()

  const registerHandle = async () => {
    if (password !== confirmPassword) {
      return message.error('两次密码不一致', 1)
    }

    const result = await registerService(name, password)
    if (result.status !== 200) {
      return message.error(result.data, 1)
    } else {
      message.success(result.message, 1)
      navigate('/login')
    }
  }

  return (
    <RegisterStyle>
      <div className="register_wrapper">
        <SxInput
          label="用户"
          labelWidth="120"
          type="text"
          placeholder="请输入用户名"
          onChange={e => setName(e.target.value)}
        />
        <SxInput
          label="密码"
          labelWidth="120"
          type="password"
          placeholder="请输入密码"
          onChange={e => setPassword(e.target.value)}
        />
        <SxInput
          label="确认密码"
          labelWidth="120"
          type="password"
          placeholder="请确认密码"
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Button
          type='primary'
          size="large"
          onClick={e => registerHandle()}>
          注册
        </Button>
        <div className="to_login">
          <span>已有用户？</span>
          <Link to='/login'>去登录</Link>
        </div>
      </div>
    </RegisterStyle>
  )
})

export default Register