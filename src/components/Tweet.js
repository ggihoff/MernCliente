import React from 'react';
import styled from 'styled-components'

const ContenedorTweet = styled.div`
background-color: #15202b;
padding:30px;
display:flex;
align-content:flex-start;
position:relative;
height:190px;
border: 1px solid gray;
border-top:none;
border-bottom:7px solid #40434f;
&>* {
    margin-right:15px;
}
`

const InputTweet = styled.textarea`
width: 90%;
margin:auto;

  height: 75px;
font-family: inherit; font-size: inherit;
font-size:18px;
border:none;
outline:none;
 background:none;
 color:white;
 overflow:hidden;
 resize:none;

 margin:0px;
`

const ProfilePicture = styled.img`
width:50px;
height:50px;
border-radius: 999px;
`

const PostTweet = styled.button`
position:absolute;
top:80%;
left:95%;
transform:translate(-95%,-80%);
cursor:pointer;
border:none;
background:#26a4de;
color:white;
height:50px;
width:90px;
font-size:16px;
border-radius:35px;
font-weight:bold;
`


const Tweet = () => {
    return (
    
      <ContenedorTweet>
            <ProfilePicture src="https://picsum.photos/200/200"/>
            <InputTweet placeholder="¿Que esta pasando?" rows="1"  maxlength="100"></InputTweet>
            <PostTweet type="submit">Twittear</PostTweet>
      </ContenedorTweet>

    );
};

export default Tweet;