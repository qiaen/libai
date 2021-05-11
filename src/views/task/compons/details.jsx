import { Form, Input, Button, Select } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default function (props) {
  const { data = {} } = props;
  const [form] = Form.useForm();
  /** 提交 */
  function onFinish(values) {
    props.back(values)
  }
  /** 重置表单 */
  function onReset() {
    // form.resetFields();
  }
  /** 自动填充 */
  function onFill() {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  }
  /** 性别变化 */
  function onGenderChange(value) {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
    }
  }
  return (
    <div className="pad12">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="pt20">
        <Form.Item  initialValue={data.note} name="note" label="Note" rules={[{ required: true }]}>
          <Input initialValue={data.note} />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
