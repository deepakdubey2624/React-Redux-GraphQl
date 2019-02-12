import React from 'react';
import { graphql, compose } from 'react-apollo'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';
import  signUp from '../graphql/signUp';

const styles = {
  root: {
    marginTop: '5%'
  }
}




const Signup = ({Register}) => (
  <Grid centered style={styles.root}>
    <Grid.Column width={6}>
      <Form>
        
        <Form.Field name = "name">
          <label>Name</label>
          <input type="text" placeholder="Your Name here..." />
        </Form.Field>
        <Form.Field name = "username">
          <label>Username</label>
          <input type="text"  placeholder="Username here..." />
        </Form.Field>
        <Form.Field name = "email">
          <label>Email</label>
          <input type="email"  placeholder="Email here..." />
        </Form.Field>
        <Form.Field name = "password">
          <label>Password</label>
          <input type="password"  placeholder="Password here..." />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password here..." />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit"  onSubmit={(e) => {
          console.log(e);
      Register({variables: {name: name, userName: e.username, email:e.email,password:e.password}});
     
    }}>Sign Up</Button>
      </Form>
    </Grid.Column>
  </Grid>
);
export default compose(
  graphql(signUp, { name: 'Register' }),

)(Signup)
