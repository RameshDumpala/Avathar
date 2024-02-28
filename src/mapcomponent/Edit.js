import React, { useState } from 'react'
import {Form, Input, Modal } from 'antd';

const Edit = ({setEditState,editstate,item,i,setData,data}) => {

    const [select,setSelect]=useState(item)
 

    const handleOk =()=>{
      setEditState (!editstate)
    }

    const handlecancel=()=>{
        setEditState(false)
    }
    const handlechange=(e)=>{
      setSelect(e.target.value)
    }

  return (
    <div>
        <Modal open={editstate} onOk={handleOk} onCancel={handlecancel}>
<Form>
    <Form.Item
      label="Name"
      
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input onChange={handlechange} type='text' value={select.name} />
    </Form.Item>

    <Form.Item
      label="email"
     
      rules={[{ required: true, message: 'Please input your password!' }]}>
         <Input onChange={handlechange}    type='text' value={select.email} />
    </Form.Item>
    
    
    <Form.Item label="phone" rules={[{ required: true, message: 'Please input your password!' }]} >
    <Input onChange={handlechange}   type='text' value={select.phone} />


    </Form.Item>
    {/* <Form.Item label="company"  rules={[{ required: true, message: 'Please input your password!' }]} >
      <Input      type='text' value={select.address.city} />
    </Form.Item> */}


    {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
    </Form.Item> */}

  </Form>


</Modal>   
    </div>
  )
}

export default Edit