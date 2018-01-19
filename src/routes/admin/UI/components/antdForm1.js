import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withStyles} from 'material-ui/styles'
const FormItem = Form.Item;

const styles = theme => ({
    loginForm: {
        maxWidth: 300,
        margin: '0 auto'
    },
    loginFormForgot: {
        float: 'right'
    },
    loginFormButton: {
        width: '100%'
    }
})
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {classes} =this.props
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={classes.loginForm}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className={classes.loginFormForgot} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className={classes.loginFormButton}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default withStyles(styles)(WrappedNormalLoginForm)
