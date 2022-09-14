import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiPaperPlane } from 'react-icons/bi';
import { GrBookmark } from 'react-icons/gr';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';

export default function FeedPiece({ feed }) {
  const [newID, setNewID] = useState('');
  const [newComment, setNewComment] = useState('');
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([
    {
      ID: newID,
      Comment: newComment,
    },
  ]);

  const clickLike = (e) => {
    if (like === false) {
      setLikeCount(1);
      setLike(true);
    } else if (like === true) {
      setLikeCount(0);
      setLike(false);
    }
  };

  const IDFocus = useRef();
  const CommentFocus = useRef();

  const writeID = (e) => {
    setNewID(e.target.value);
    if (e.target.value === '') {
      return; // 닉네임 입력하지 않으면 포커스 움직이지 않음
    } else if (e.key === 'Enter') {
      CommentFocus.current.focus();
    }
  };

  const writeComment = (e) => {
    setNewComment(e.target.value);
    if (e.target.value === '') {
      return; // 내용 입력하지 않으면 댓글이 달리지 않게 막음
    } else if (e.key === 'Enter' && newID.length != 0) {
      // newID 길이를 확인함으로써 닉네임을 입력하지 않으면 댓글이 달리지 않게 막음
      addComment();
      IDFocus.current.value = '';
      e.target.value = '';
    }
  };

  const addComment = (e) => {
    setComments([
      ...comments,
      {
        CommentNewID: newID,
        CommentNewContent: newComment,
      },
    ]);
    setNewID('');
    setNewComment('');
    // setNewCommentID(newCommentID + 1);
    IDFocus.current.focus();
  };

  return (
    <Body>
      <FeedTop key={feed.id}>
        <FeedTopLeft>
          <BsFillCircleFill size="35px" opacity="20%" />
          <ProfileID>user</ProfileID>
        </FeedTopLeft>
        <FeedTopRight>
          <FiMoreHorizontal cursor="pointer" />
        </FeedTopRight>
      </FeedTop>
      <Img src={feed.image} />
      <FeedBottom>
        <Icons>
          <IconsLeft>
            {like === true ? (
              <AiFillHeart
                size="30px"
                cursor="pointer"
                style={{ color: 'red' }}
                onClick={clickLike}
              />
            ) : (
              <AiOutlineHeart
                size="30px"
                cursor="pointer"
                onClick={clickLike}
              />
            )}

            <FaRegCommentDots size="30px" cursor="pointer" />
            <BiPaperPlane size="30px" cursor="pointer" />
          </IconsLeft>
          <IconsRight>
            <GrBookmark size="30px" cursor="pointer" />
          </IconsRight>
        </Icons>
        <Like>좋아요 {likeCount}개</Like>
        <CommentGather>
          <CommentList>
            {comments.map((el, index) => {
              return (
                <Comment key={index}>
                  <CommentID>{el.CommentNewID}</CommentID>
                  <CommentContent>{el.CommentNewContent}</CommentContent>
                </Comment>
              );
            })}
          </CommentList>
        </CommentGather>
        <CommentInput>
          <CommentInputLeft>
            <BsEmojiSmile size="35px" />
            <NickName ref={IDFocus} placeholder="닉네임" onKeyUp={writeID} />
            <WriteComment
              ref={CommentFocus}
              placeholder="댓글달기..."
              onKeyUp={writeComment}
            />
          </CommentInputLeft>
          <CommentInputRight onClick={addComment}>게시</CommentInputRight>
        </CommentInput>
      </FeedBottom>
    </Body>
  );
}

const Body = styled.div`
  @media (max-width: 380px) {
    /* width: 300px; */
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  overflow: auto;
  margin: 15px 0;
`;

const FeedTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 6vh;
  outline: 1px solid rgba(0, 0, 0, 0.2);
`;

const FeedBottom = styled.div`
  width: 100%;
  outline: 1px solid black;
`;

const FeedTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileID = styled.div`
  margin: 0 10px;
  font-weight: bold;
`;

const FeedTopRight = styled.div``;

const Img = styled.img`
  @media (max-width: 380px) {
    width: 300px;
  }
  @media (max-width: 675px) {
    width: 370px;
  }
  width: 600px;
  height: fit-content;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
`;

const IconsLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;
const IconsRight = styled.div``;

const Like = styled.div`
  margin: 24px 0;
  padding: 0 10px;
  color: gray;
  width: 100%;
`;

const CommentGather = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const CommentList = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 0 10px;
`;

const Comment = styled.div`
  display: flex;
  justify-content: start;
`;

const CommentID = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.div`
  margin-left: 15px;
`;

const CommentInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const CommentInputLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const NickName = styled.input`
  width: 50px;
  margin-left: 10px;
`;

const CommentInputRight = styled.div`
  white-space: nowrap;
  color: skyblue;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
`;

const WriteComment = styled.input`
  width: 100%;
`;
