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

import ListErrors from './common/ListErrors';
import useAuth from '../context/auth';
import { updateUser, logout } from '../api/AuthAPI';
import { IErrors } from '../types';

type Form = {
  username: string;
  email: string;
  image: string;
  bio: string;
  password?: string;
};

export default function Settings(_: RouteComponentProps) {
  const {
    state: { user },
    dispatch,
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrors | null>(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  // let form = {
  //   username,
  //   email,
  //   password,
  //   image,
  //   bio,
  // };

  useEffect(() => {
    if (user) {
      const { username, email, image, bio } = user;
      console.log(username, email, image, bio);
      setUsername(username);
      setEmail(email);
      setPassword(password);
      setImage(image || '');
      setBio(bio || '');
    }
  }, [user]);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    // if (!form.password) {
    //   delete form.password;
    // }
    try {
      // const payload = await updateUser(form);
      const payload = await updateUser({ username, email, image, bio });
      dispatch({ type: 'LOAD_USER', user: (payload as any).data.user });
    } catch (error) {
      console.log(error);
      if (error.status === 422) {
        setErrors(error.data.errors);
      }
    }
    setLoading(false);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    logout();
    navigate('/');
  };

  return (
    <View UNSAFE_style={{}}>
      <View
        UNSAFE_style={{
          width: `36%`,
          margin: `0 auto`,
          // backgroundColor: 'beige',
        }}
      >
        <Grid justifyContent='center'>
          <View>
            <Heading level={2}>Your Settings</Heading>
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
            value={image}
            onChange={setImage}
            name='image'
            label='Image URL'
            placeholder='URL of profile picture'
          />
          <TextField
            value={username}
            onChange={setUsername}
            name='username'
            label='User Name'
            placeholder='input name will be checked for uniqueness'
          />
          <TextField
            value={email}
            onChange={setEmail}
            name='email'
            label='Email'
            placeholder='name@email.com'
          />
          <TextField
            value={bio}
            onChange={setBio}
            name='bio'
            label='Bio'
            placeholder='Short bio about you'
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
            minWidth='size-2000'
            marginTop='size-400'
            UNSAFE_style={{
              width: '32%',
              // marginLeft: `auto`
            }}
          >
            Update Settings
          </Button>
        </Form>
        <hr />
        <Button
          onPress={handleLogout}
          variant='negative'
          minWidth='size-1200'
          marginTop='size-400'
          UNSAFE_style={{}}
        >
          Or click here to Logout
        </Button>
      </View>
    </View>
  );
}
