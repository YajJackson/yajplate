import { Button, Form, Input } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

import React from 'react'
import { Storage } from '@lib/Helpers'

export const Login: React.FunctionComponent = () => {
    const history = useHistory()
    const location = useLocation()

    const onFinish = values => {
        Storage.save('user', { ...values })
        // @ts-ignore
        history.push(location.state?.from?.pathname ?? '/')
    }

    const onFinishFailed = errorInfo => console.log('Failed:', errorInfo)

    return (
        <Form className='fade-up' name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder='Username' allowClear />
            </Form.Item>

            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder='Password' />
            </Form.Item>

            <Form.Item>
                <Button htmlType='submit' block>
                    Sign In
                </Button>
            </Form.Item>
        </Form>
    )
}
