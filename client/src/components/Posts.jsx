import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Title = styled.h1`
  font-size: 1.2em;
  display: inline;
  position: relative;
  bottom: 28px;
`;

const Post = styled.div`
  color: white;
  background-color: #061A40;
  max-width: 600px;
  margin: 0 auto;
`;

const ImageUser = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* margin-right: 10px;
  padding-left: 4px;
  margin-bottom: 6px; */
  margin: 12px 10px 6px 4px;
`;

const ImagePost = styled.img`
  max-width: 600px;
`;
const Likes = styled.div`
  padding: 8px;
`;

const Heart = styled.span`
  color: white;
`;

const RestaurantName = styled.div`
  padding: 8px;
`;

const RestaurantLocation = styled.span`
  float: right;
  margin: 8px;
  font-style: italic;
  position: relative;
  bottom: 8px;
`;

const Review = styled.div`
  padding: 0 8px;
`;

const DatePosted = styled.div`
  font-size: 14px;
  font-style: italic;
  float: right;
  margin-right: 6px;
`;

const UserName = styled.span`
  font-weight: 700;
  color: #E5D352;
`;

const Posts = (props) => {
  return (
    <Post>
      {props.feed.map((post) => {
        return (
          <div key={post.postid} className="post">
            <div className="postHeader">
              <ImageUser src={post.userimg} className="userImg"></ImageUser>
              <Title>{post.username}</Title>
            </div>
            <div className="postPicture">
              <ImagePost src={post.postpicture}></ImagePost>
            </div>
            <div className="postFooter">
              <Likes>{post.postlikes} <Heart>♥</Heart></Likes>
              <RestaurantName>{post.restaurantname}<RestaurantLocation>{post.restaurantlocation}</RestaurantLocation></RestaurantName>
              <Review><UserName>{post.username}:</UserName> {post.postmessage}</Review>
              <DatePosted>{moment(post.postdate).fromNow()}</DatePosted>
            </div>
          </div>
        );
      })}
    </Post>
  );
};

export default Posts;
