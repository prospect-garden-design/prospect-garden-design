import * as React from 'react';
import { Link, LinkGetProps, LinkProps } from '@reach/router';
import { View, Flex, Grid, Text, Heading } from '@adobe/react-spectrum';

import useAuth from '../context/auth';
import { IUser } from '../types';
import { APP_NAME } from '../utils';

export function Header() {
  const {
    state: { user },
  } = useAuth();

  // 用grid布局是为了将header右侧文字菜单和Home的MainView右侧标签对齐
  return (
    <Grid
      columns={['3fr', '1fr']}
      columnGap='size-300'
      marginX='size-1000'
      marginY='size-160'
    >
      <Heading level={3}>
        <Link to='/' className=''>
          {APP_NAME}
        </Link>
      </Heading>
      {user ? <LoggedInView user={user} /> : <LoggedOutView />}
    </Grid>
  );
}

const LoggedInView = ({ user: { username, image } }: { user: IUser }) => (
  <Flex gap='size-300' marginStart='size-200'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/editor'>
      <i className='ion-compose' />
      &nbsp;New Post
    </NavLink>
    <NavLink to='/settings'>
      <i className='ion-gear-a' />
      &nbsp;Settings
    </NavLink>
    <NavLink to={`/${username}`}>
      {image && <img src={image} className='user-pic' alt={username} />}
      {username}
    </NavLink>
  </Flex>
);

const LoggedOutView = () => (
  <Flex gap='size-300' marginStart='size-200'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/login'>Sign in</NavLink>
    <NavLink to='/register'>
      <Text>Sign up</Text>
    </NavLink>
  </Flex>
);

const NavLink = (props: LinkProps<{}>) => {
  const CompRoot = Link as any;
  return <CompRoot getProps={isActive} {...props} />;
};

const isActive = ({ isCurrent }: LinkGetProps) => {
  return isCurrent
    ? { className: 'nav-link active' }
    : { className: 'nav-link' };
};

export default Header;
