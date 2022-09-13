import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdHomeFilled } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { GrLogout } from 'react-icons/gr';
import { FiPlusSquare } from 'react-icons/fi';
import { ImCompass2 } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';

export default function GNB() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
    localStorage.clear();
    window.scrollTo(0.0);
  };

  return (
    <Body>
      <Bundle>
        <Instagram>Minstagram</Instagram>
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
          <GrLogout size="25px" cursor="pointer" onClick={() => goToLogin()} />
        </Icons>
      </Bundle>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  width: 100%;
  /* min-width: 401px; */
  /* outline: 1px solid black; */
  border-bottom: 1px solid black;
`;

const Bundle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 10vw;
`;

const Instagram = styled.div`
  @media (max-width: 675px) {
    font-size: 25px;
  }
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
    /* font-size: 10px; */
    display: none;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* min-width: 180px; */
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
