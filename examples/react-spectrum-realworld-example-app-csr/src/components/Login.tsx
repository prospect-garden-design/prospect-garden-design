import * as React from 'react';
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

import { login } from '../api/AuthAPI';
import ListErrors from './common/ListErrors';
import useAuth from '../context/auth';
import { navigate, Link, RouteComponentProps, Redirect } from '@reach/router';
import { IErrors } from '../types';

export default function Login(_: RouteComponentProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<IErrors | null>();
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
          <TextField label='Email' placeholder='name@email.com' />
          <TextField
            label='Password'
            placeholder='length must be 8 or greater'
          />
          <Button
            variant='cta'
            type='submit'
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
