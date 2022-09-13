import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import GNB from './GNB';
import FeedPiece from './FeedPiece';

export default function Feed() {
  const [picture, setPicture] = useState([
    {
      id: '',
      image: '',
    },
  ]);

  useEffect(() => {
    fetch('/data/mockdata.json').then((res) =>
      res.json().then((data) => {
        setPicture(data);
      })
    );
  }, []);

  return (
    <FeedBody>
      <GNB />
      <Body>
        {picture.map((el) => {
          return <FeedPiece key={el.id} feed={el} />;
        })}
      </Body>
    </FeedBody>
  );
}
const FeedBody = styled.div`
  width: 100vw;
`;

const Body = styled.div`
  @media (max-width: 380px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
  @media (max-width: 675px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  /* overflow: auto; */
`;
