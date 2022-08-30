import React, { memo, useEffect, useState } from 'react'
import { Card, Avatar, Button, Modal, Form, Input, Select, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import PersonInfoStyle from './style'
import { getUserInfo, perfectUserInfo } from '../../services';

const PersonInfo = memo((props) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [info, setInfo] = useState({})

  useEffect(() => {
    setInfo(props.info)
  }, [props.info])

  const perfectHandle = () => {
    setVisible(true);
  }

  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }

  const handleChange = () => {
    console.log('object');
  }

  const handleOk = async () => {
    const { name, sex, age, phone, iden } = form.getFieldsValue()
    const { id } = info
    const perfectRes = await perfectUserInfo(name, sex, age, phone, iden, id)
    perfectRes.status === 200 ? message.success(perfectRes.message, 1) : message.error('修改失败', 1)

    const res = await getUserInfo(id)
    setInfo(res[0])
    setVisible(false)
  }

  return (
    <PersonInfoStyle>
      <Card>
        <div className="person_wrapper">
          <div className="avatar">
            <Avatar size={64} icon={<UserOutlined />} />
            <Button>更换头像</Button>
          </div>
          <div className="info">
            <div className="info_left">
              <div>姓名： {info.name}</div>
              <div>性别： {info.sex}</div>
              <div>年龄:  {info.age}</div>
            </div>
            <div className="info_right">
              <div>手机号： {info.phone}</div>
              <div>证件号： {info.iden}</div>
            </div>
          </div>
          <div className='perfect_info'>
            <Button type='primary' onClick={e => perfectHandle()}>完善信息</Button>
          </div>
        </div>
      </Card>
      <Modal
        visible={visible}
        title="完善信息"
        closable={false}
        okText="确定"
        cancelText="取消"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form
          form={form}
          name="form_in_modal"
          initialValues={info}
          labelCol={{
            span: 4,
          }}
        >
          <Form.Item
            name="name"
            label="姓名"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="sex"
            label="性别"
          >
            <Select style={{ width: 120 }} onChange={handleChange}>
              <Select.Option value="男">男</Select.Option>
              <Select.Option value="女">女</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="age"
            label="年龄"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="iden"
            label="证件号"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PersonInfoStyle >
  )
})

export default PersonInfo