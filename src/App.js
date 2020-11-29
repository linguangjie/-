import { useState, useEffect } from "react";
import { Form, Button, Input, Select, Table, Checkbox } from "antd";
import axios from "axios";
import "./App.css";

const columns = [
  {
    title: "任务名",
    dataIndex: "mission",
    key: "mission",
    align: "center",
  },
  {
    title: "卢布",
    dataIndex: "rouble",
    key: "rouble",
    align: "center",
  },
  {
    title: "人民币",
    dataIndex: "RMB",
    key: "RMB",
    align: "center",
  },
  {
    title: "美元",
    dataIndex: "dollar",
    key: "dollar",
    align: "center",
  },
];
const columnsDone = [
  {
    title: "任务名",
    dataIndex: "mission",
    key: "mission",
    align: "center",
    render:(text)=>{
      return <span style={{textDecoration:'line-through'}}>{text}</span>
    }
  },
  {
    title: "卢布",
    dataIndex: "rouble",
    key: "rouble",
    align: "center",
  },
  {
    title: "人民币",
    dataIndex: "RMB",
    key: "RMB",
    align: "center",
  },
  {
    title: "美元",
    dataIndex: "dollar",
    key: "dollar",
    align: "center",
  },
];

function App() {
  const [list, setList] = useState([
    {
      key: "测试",
      mission: "测试",
      rouble: 1,
      RMB: 1,
      dollar: 1,
    },
  ]);
  let [total, setTotal] = useState(1);
  const [listDone, setlistDone] = useState([]);
  let [totalDone, setTotalDone] = useState(0);
  const [rate, setRate] = useState(null);
  let [selectedRowKeys,setselectedRowKeys] = useState([])

  useEffect(() => {
    axios
      .get("https://api.globus.furniture/forex")
      .then((res) => {
        setRate(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const calculateTotal = (arr,fn) => {
    let sum = 0
    for (const item of arr) {
      sum += Number(item.RMB);
    }
    fn(sum)
  };
  const handleRowChange = (selectedRowKeys, selectedRows) => {
    setselectedRowKeys(selectedRowKeys)
  };
  const handleConfirm = () => {
    if(selectedRowKeys.length===0)return
    const arr = [];
    const listCopy = [...list]
    selectedRowKeys.forEach((item1) => {
      for (let i = 0; i < listCopy.length; i++) {
        const item2 = listCopy[i];
        if(item1===item2.key){
         arr.push(listCopy.splice(i,1)[0]) 
         i--
        }
      }
    });
    setList(listCopy)
    setlistDone([...listDone,...arr]);
    calculateTotal(listCopy,setTotal)
    calculateTotal([...listDone,...arr],setTotalDone)
  };
  const handleFormFinish = (values) => {
    const { mission, price, currency } = values;
    const { RUB, USD } = rate;
    const arr = [...list];
    let rouble, RMB, dollar;
    const config = {
      卢布: function () {
        rouble = price;
        RMB = price / RUB.value;
        dollar = RMB * USD.value;
      },
      人民币: function () {
        RMB = price;
        rouble = price * RUB.value;
        dollar = price * USD.value;
      },
      美元: function () {
        dollar = price;
        RMB = price / USD.value;
        rouble = RMB * RUB.value;
      },
    };
    config[currency]();
    arr.push({
      key: mission,
      mission,
      rouble,
      RMB,
      dollar,
    });
    setList(arr);
    calculateTotal(arr,setTotal);
  };
  return (
    <div className="App">
      <Form onFinish={handleFormFinish}>
        <Form.Item
          label="任务"
          name="mission"
          rules={[{ required: true, message: "请输入任务" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="价格"
          name="price"
          rules={[{ required: true, message: "请输入价格" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="货币"
          name="currency"
          rules={[{ required: true, message: "请选择货币" }]}
        >
          <Select allowClear>
            <Select.Option value="卢布">卢布</Select.Option>
            <Select.Option value="人民币">人民币</Select.Option>
            <Select.Option value="美元">美元</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
      <div className="content">
        <div className="left">
          <div className="btn">
            <Button type="primary" onClick={handleConfirm}>
              完成
            </Button>
          </div>

          <Table
            rowSelection={{
              type: "checkbox",
              onChange: handleRowChange,
            }}
            dataSource={list}
            columns={columns}
            pagination={false}
          ></Table>
          <div>总共：{total}元</div>
        </div>
        <div className="right">
          <Table
            dataSource={listDone}
            columns={columnsDone}
            pagination={false}
          ></Table>
          <div>总共：{totalDone}元</div>
        </div>
      </div>
    </div>
  );
}

export default App;
