import { Container } from '@mui/material';
import React from 'react';
import UserCard from '../components/UserCard';

const Profile = () => {
    return (
        <Container maxWidth='sm'>
            <UserCard/>
        </Container>
    );
};

export default Profile;