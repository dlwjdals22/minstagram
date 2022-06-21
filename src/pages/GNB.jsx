import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { MdHomeFilled } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr';
import { FiPlusSquare } from 'react-icons/fi';
import { ImCompass2 } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';

export default function GNB() {
  return (
    <Body>
      <Bundle>
        <Instagram>Instagram</Instagram>
        <Search>
          <BsSearch opacity="50%" />
          <Input type="text" placeholder="검색" />
        </Search>
        <Icons>
          <MdHomeFilled size="30px" cursor="pointer" />
          <FiSend size="25px" cursor="pointer" />
          <FiPlusSquare size="25px" cursor="pointer" />
          <ImCompass2 size="25px" cursor="pointer" />
          <AiOutlineHeart size="25px" cursor="pointer" />
          <GrLogout size="25px" cursor="pointer" />
        </Icons>
      </Bundle>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  padding: 1000px, 100px;
  height: 10vh;
  min-width: 401px;
  outline: 1px solid black;
`;

const Bundle = styled.div`
  @media (max-width: 675px) {
    margin: 0 2vw;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 10vw;
`;

const Instagram = styled.div`
  font-size: 35px;
  font-family: 'Petit Formal Script', cursive;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px 0 10px 10px;
  background-color: rgba(0, 0, 0, 0);
  width: 20vw;
`;

const Icons = styled.div`
  @media (max-width: 500px) {
    font-size: 10px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;
  width: 15vw;
`;

const Search = styled.div`
  display: flex;
  @media (max-width: 675px) {
    display: none;
    justify-content: space-between;
  }
  align-items: center;
  padding: 1px 10px;
  width: 20vw;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
