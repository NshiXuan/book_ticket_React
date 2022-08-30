import React, { memo } from 'react'
import { Modal, Form, Input, Select, message } from 'antd';

import SxFormStyle from './style'
import { addFightService } from '../../services';

const SxForm = memo((props) => {
  const { visible, setVisible, formInfo, handleGetFightInfo } = props
  const [form] = Form.useForm();

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const handleOk = async () => {
    form.validateFields()
    const { name, cabin, start, dest, startTime, destTime, price, discount, status } = form.getFieldValue()
    if (name && cabin && start && dest && startTime && destTime && price && status) {
      const res = await addFightService(name, cabin, start, dest, startTime, destTime, price, discount, status)
      if (res.status === 200) {
        message.success(res.message, 1)
        setVisible(false)
        handleGetFightInfo()
      } else {
        return message.error(res.data, 1)
      }
    }
  }

  const validateMessages = {
    required: "'${label}' 是必选字段",
  };

  return (
    <SxFormStyle>
      <Modal
        visible={visible}
        title="航班录入"
        closable={false}
        okText="确定"
        cancelText="取消"
        okButtonProps={{
          htmlType: 'submit'
        }}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form
          form={form}
          name="form_in_modal"
          labelCol={{
            span: 4
          }}
          validateMessages={validateMessages}
        >
          {
            formInfo.map((item, index) => {
              return (
                <Form.Item
                  key={item.name}
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                >
                  {
                    item.type === 'input' ? <Input /> :
                      <Select
                        style={{
                          width: 100,
                        }}
                      >
                        {
                          item.options.map((option, index) => {
                            return (
                              <Select.Option
                                key={option.value}
                                value={option.value}
                              >
                                {option.value}
                              </Select.Option>
                            )
                          })
                        }
                      </Select>
                  }
                </Form.Item>
              )
            })
          }
        </Form>
      </Modal>
    </SxFormStyle>
  )
})

export default SxForm