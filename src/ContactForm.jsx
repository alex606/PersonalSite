import React, { Component } from 'react';
import componentStyles from './styles/componentStyles';

import { Icon } from 'antd';
import { Collapse, Row, Col, Form, Input, Button } from 'antd';

const { Panel } = Collapse;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch("https://formspree.io/alexwu606@gmail.com", {
          method: "POST",
          body: JSON.stringify(values),
          headers: new Headers({ 'Content-Type': "application/json" })
        }).then(() => { this.setState({ messageSubmitted: true }) })
      }
    });
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;

    return (
      <Collapse >
        <Panel header="Contact Me">
          <Row gutter={16} type="flex" justify="space-around" align="middle" >
            <Col span={16}>
              <p style={componentStyles.bodyStyle} >Want to reach out to me?
      Feel free to send an email to alexwu606 |at| gmail |dot| com.
      You can also message me on LinkedIn {<Icon type="linkedin" />} or Github {<Icon type="github" />}.
                                              Or send a message to me using the contact form below.
              </p>
              <br></br>
              <Form onSubmit={this.handleSubmit}>
                <Form.Item  >
                  {getFieldDecorator('emailAddress', {
                    rules: [{ required: true, message: 'Please input an email address' }],
                  })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email Address" />)}
                </Form.Item>

                <Form.Item >
                  {getFieldDecorator('message', {
                    rules: [{ required: true, message: 'Please input a message to send' }],
                  })(<Input prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Message" />)}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                  > Submit
                  </Button>
                </Form.Item>
                {this.state.messageSubmitted &&
                  <p style={componentStyles.bodyStyle}>Thank you for you message.
   I will try my best to reach back to you in a timely manner</p>
                }
              </Form>
            </Col>
          </Row>
        </Panel>
      </Collapse>);
  }
}
export default Form.create()(ContactForm);

