import {Drawer, Input, Col, Select, Form, Row, Button, Spin} from 'antd';
import {addNewStudent, updateStudent} from "./Client";
import {LoadingOutlined} from "@ant-design/icons";
import {useEffect, useState} from 'react';
import {successNotification, errorNotification} from "./Notification";

const {Option} = Select;

const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

function StudentDrawerForm({showDrawer, setShowDrawer, fetchStudents, student, setStudent}) {
    const [isEditMode, setEditMode] = useState(false);
    const [drawerTitle, setDrawerTitle] = useState("");
    const [form] = Form.useForm();

    useEffect(() => {
        setEditMode(student.id !== undefined);
        setDrawerTitle(isEditMode ? "Update student" : "Create new student")
        if (isEditMode) {
            form.setFieldsValue({
                id: student.id,
                name: student.name,
                email: student.email,
                gender: student.gender
            });
        }
        console.log("isEditMode: " + isEditMode)
    }, [student.id, student.name, student.email, student.gender, isEditMode, form])

    const onCLose = () => {
        console.log("onClose triggered")
        form.resetFields();
        setEditMode(false);
        setShowDrawer(false);
        setStudent([]);
    };

    const [submitting, setSubmitting] = useState(false);

    const onFinish = student => {
        setSubmitting(true)
        console.log(JSON.stringify(student, null, 2))
        if (!isEditMode) {
            addNewStudent(student)
                .then(() => {
                    console.log("student added")
                    onCLose();
                    successNotification(
                        "Student successfully added",
                        `${student.name} was added to the system`
                    )
                    fetchStudents();
                }).catch(err => {
                console.log(err);
                err.response.json().then(res => {
                    console.log(res);
                    errorNotification(
                        "There was an issue",
                        `${res.message} [${res.status}] [${res.error}]`,
                        "bottomLeft"
                    )
                });
            }).finally(() => {
                setSubmitting(false);
            })
        } else {
            updateStudent(student)
                .then(() => {
                    console.log("student updated")
                    onCLose();
                    successNotification(
                        "Student information successfully updated",
                        `${student.name} was updated`
                    )
                    fetchStudents();
                }).catch(err => {
                console.log(err);
                err.response.json().then(res => {
                    console.log(res);
                    errorNotification(
                        "There was an issue",
                        `${res.message} [${res.status}] [${res.error}]`,
                        "bottomLeft"
                    )
                });
            }).finally(() => {
                setSubmitting(false);
            })
        }
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title={drawerTitle}
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form
            form={form}
            layout="vertical"
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}
            hideRequiredMark
        >
            <Form.Item name="id" >
                <Input type={"hidden"} />
            </Form.Item>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true, message: 'Please enter student name'}]}
                    >
                        <Input placeholder="Please enter student name" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{required: true, message: 'Please enter student email'}]}
                    >
                        <Input placeholder="Please enter student email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[{required: true, message: 'Please select a gender'}]}
                    >
                        <Select placeholder="Please select a gender">
                            <Option value="MALE">MALE</Option>
                            <Option value="FEMALE">FEMALE</Option>
                            <Option value="OTHER">OTHER</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                {submitting && <Spin indicator={antIcon}/>}
            </Row>
        </Form>
    </Drawer>
}

export default StudentDrawerForm;