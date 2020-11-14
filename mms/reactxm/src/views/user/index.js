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
    title :'操作',
    dataIndex: 'zulv'
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: '张三',
    age: 32,
    address:'13066358585',
    gender:'女',
    address:'广州天河',
    zulv: <div><Button type="primary" style={{ marginLeft: '10px' }}>
    编辑
  </Button>
  <Button type="primary" style={{ marginLeft: '10px',backgroundColor:'#e02433' }}>
   删除
</Button>
  </div>,
  });
}

console.log(data)
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

  handleOk = e => {
    console.log(e);
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
    selectedRowKeys: [], // Check here to configure the default column
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
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>
              姓名 <Input placeholder="请输入名字" style={{ width: '200px', }} />
            </p>

            <p>
              年龄 <Input placeholder="请输入年龄" style={{ width: '200px', }} />
            </p>

            <p>
              电话 <Input placeholder="请输入电话号码" style={{ width: '200px', }} />
            </p>

            <Form>
              <Form.Item label="">
                <span>性别 </span>
                <Select
                  style={{ width: '130px', }}
                  placeholder="请选择性别"
                >
                  <Option value="male">男</Option>
                  <Option value="female">女</Option>
                </Select>
              </Form.Item>
            </Form>

            <Form>
              请输入地址
      <Form.Item label="">
                <Input.TextArea />
              </Form.Item>
            </Form>
          </Modal>
        </>
        
        <div style={{ marginBottom: 16, width:'150vh',float:'left' }}>
        <div style={{ marginBottom: 16,}}>
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