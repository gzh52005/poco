import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Select, Modal, InputNumber, Table } from 'antd';
// import { FormInstance } from 'antd/lib/form';
const { Option } = Select;

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '电话',
    dataIndex: 'address',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'zulv'
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: '张三',
    age: 32,
    address: '13066358585',
    gender: '女',
    address: '广州天河',
    zulv: <div><Button type="primary" style={{ marginLeft: '10px' }}>
      编辑
  </Button>
      <Button type="primary" style={{ marginLeft: '10px', backgroundColor: '#e02433' }}>
        删除
</Button>
    </div>,
  });
}

class User extends React.Component {
  state = {
    selectedRowKeys: [],
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onFinish = values => {
    console.log('Success:', values);
  }
  handleOk = e => {
    console.log(e, 'aaa');
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  state = {
    selectedRowKeys: [],
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (

      <div>
        <Form>
          <Form.Item label="" style={{ float: 'left', marginRight: '16px' }}>
            <Input placeholder="请输入用户名" style={{ width: '200px', }} />
          </Form.Item>

          <Form.Item label="" style={{ float: 'left' }}>
            <Select
              style={{ width: '130px', }}
              placeholder="请选择性别"
            >
              <Option value="male">男</Option>
              <Option value="female">女</Option>
            </Select>
          </Form.Item>
        </Form>

        <Button type="primary" style={{ marginLeft: '10px' }}>
          查询
        </Button>
        <>
          <Button type="primary" onClick={this.showModal} style={{ marginLeft: '10px' }}>
            新增
        </Button>
          <Modal
            title="新增用户"
            visible={this.state.visible}
            // onOk={this.handleOk}
            // onCancel={this.handleCancel}
            footer={[
              // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
              <Button key="cancel" onClick={this.handleCancel}>取消</Button>,

              <Button htmlType="submit" key="submit" loading={loading} onClick={this.handleOk} type="primary" onClick={_ => {
                console.log(_)
                this.submit.click();
              }}
              >
                确定
                            </Button>,]}

          >
           {
             //还要这这里写一个函数  表单里面有一个onFinish方法
           }
            <Form onFinish={this.onFinish}>
              {
              //你要拿到form里的value值  要每个表单里卖年有一个name
            }
              <Form.Item label="姓名" name='user'>
                <Input placeholder="请输入名字" style={{ width: '200px', }} />
              </Form.Item>

              <Form.Item label="年龄" name='age'>
                <Input placeholder="请输入年龄" style={{ width: '200px', }} />
              </Form.Item>

              <Form.Item label="电话" name='iphone'>
                <Input placeholder="请输入电话号码" style={{ width: '200px', }} />
              </Form.Item>

              <Form.Item label="性别" name='set'>
                <Select
                  style={{ width: '130px', }}
                  placeholder="请选择性别"
                >
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                </Select>
              </Form.Item>

              <Form.Item label="请输入地址" name='text'>
                <Input.TextArea />
              </Form.Item>
              {
                //
              }
              <Button style={{ display: 'none' }}
           
                ref={_ => this.submit = _} htmlType="submit" key="submit" type="primary"
              >
                确定
             </Button>
            </Form>
          </Modal>
        </>

        <div style={{ marginBottom: 16, width: '150vh', float: 'left' }}>
          <div style={{ marginBottom: 16, }}>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
      </div>
    )

  }
}

export default User;