import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const SignInForm = () => (
  
<div className='login-form'>
    
    
    <Grid textAlign='center' style={{ height: '100%', padding: '2%'}} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={logo} /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">SignUp</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>

);

export default SignInForm;

