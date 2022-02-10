import React from 'react';
import styled from 'styled-components';

const Message = (props) => {
    return (
        <UserMsg>
            <ProfileImage src={props.profileImage} />
            <div>{props.userName}</div>
            <div>{props.content}</div>
        </UserMsg>
    );
};

const UserMsg = styled.li`
    display: flex;
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
`;

export default Message;
