import { Button, Form, Input } from "antd";
import { useDispatch } from 'react-redux'
import type { Dispatch } from 'redux'
import { useState } from 'react'
import { login } from '../store/auth/action'
import { useNavigate, useSearchParams } from 'react-router-dom'
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [search, setSearch] = useSearchParams()
  const redirect = search.getAll("redirect")[0] || "/admin"
  const dispatch: Dispatch<any> = useDispatch()
  const callback = () => {
    navigate(redirect)
  }
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(login({name, password}, callback))
  };
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <div className="title-text">快团团登陆</div>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input placeholder="用户名" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Login;
