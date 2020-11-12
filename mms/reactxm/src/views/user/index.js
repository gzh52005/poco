import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Select } from 'antd';
// import { FormInstance } from 'antd/lib/form';
const { Option } = Select;

class User extends React.Component {
  render() {

    return (
      
      <div>
        <Form>
          <Form.Item label="" style={{ float: 'left',marginRight:'16px' }}>
            <Input placeholder="请输入用户名" style={{ width: '200px', }} />
          </Form.Item>

          <Form.Item  label="" style={{ float: 'left' }}>
            <Select
              style={{ width: '130px', }}
              placeholder="请选择性别"
            >
              <Option value="male">男</Option>
              <Option value="female">女</Option>
            </Select>
          </Form.Item>
        </Form>

        <Button type="primary" style={{marginLeft:'10px'}}>
          查询
        </Button>

        <Button type="primary" style={{marginLeft:'10px',backgroundColor:'green'}}>
          新增
        </Button>
      </div>
    )
  }
}


export default User;