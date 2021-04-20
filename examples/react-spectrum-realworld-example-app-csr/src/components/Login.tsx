import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Flex,
  Grid,
  Text,
  Heading,
  Form,
  TextField,
  Button,
} from '@adobe/react-spectrum';
import { navigate, Link, RouteComponentProps, Redirect } from '@reach/router';

import { login } from '../api/AuthAPI';
import ListErrors from './common/ListErrors';
import useAuth from '../context/auth';
import { IErrors } from '../types';

export default function Login(_: RouteComponentProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrors | null>();
  const {
    state: { user },
    dispatch,
  } = useAuth();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = await login(email, password);
      dispatch({ type: 'LOAD_USER', user });
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
  };

  if (user) {
    return <Redirect to='/' noThrow />;
  }

  return (
    <View UNSAFE_style={{}}>
      <View
        UNSAFE_style={{
          width: `32%`,
          margin: `0 auto`,
          // backgroundColor: 'beige',
        }}
      >
        <Grid justifyContent='center'>
          <View>
            <Heading level={2}>Sign in</Heading>
          </View>
          <View>
            <Link to='/register'>Need an account?</Link>
          </View>
        </Grid>
        <View marginTop='size-200'>
          {errors && <ListErrors errors={errors} />}
        </View>
        <Form
          method='post'
          onSubmit={handleSubmit}
          labelPosition='top'
          labelAlign='start'
        >
          <TextField
            value={email}
            onChange={setEmail}
            name='email'
            label='Email'
            placeholder='name@email.com'
          />
          <TextField
            value={password}
            onChange={setPassword}
            name='password'
            label='Password'
            placeholder='length must be 8 or greater'
          />
          <Button
            variant='cta'
            type='submit'
            minWidth='size-1200'
            marginTop='size-400'
            UNSAFE_style={{ width: '25%', marginLeft: `auto` }}
          >
            Login
          </Button>
        </Form>
      </View>
    </View>
  );
}
