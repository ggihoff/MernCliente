import React from 'react';
import styled from 'styled-components'

const ContenedorTweet = styled.div`
background-color: #15202b;
padding:30px;
display:flex;
align-content:flex-start;
position:relative;
min-height:150px;
border:1px solid #454545;
border-top:none;
&>* {
    margin-right:15px;
}
`

const FlexTweet = styled.div`

`


const Title = styled.p`
color:white;
font-weight: bold;

`

const Tweet = styled.p`
color:white;

margin:10px 0px;
`

const ProfilePicture = styled.img`
width:50px;
height:50px;
border-radius: 999px;
`

const Tw = ({nombre, tweet}) => {
    return (
       <ContenedorTweet>
             <ProfilePicture src="https://picsum.photos/200/200"/>
             <FlexTweet>
            <Title>{nombre}</Title>
            <Tweet>{tweet}</Tweet>
            </FlexTweet>
       </ContenedorTweet>
       
    );
};

export default Tw;