import React from 'react';
import styled from 'styled-components';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [idOutLine, setIdOutLine] = useState('rgba(0,0,0, 0.2)');
  const [passwordOutLine, setPasswordOutLine] = useState('rgba(0,0,0, 0.2)');
  const [loginActive, setLoginActive] = useState(false);

  const navigate = useNavigate();

  const goToFeed = () => {
    localStorage.setItem('id', id);
    localStorage.setItem('password', password);
    navigate('/feed');
    window.scrollTo(0.0);
  };

  const IDFocus = useRef();
  const PasswordFocus = useRef();

  const ButtonActive = (e) => {
    return ValidationEmail(id) && ValidationPassword(password)
      ? setLoginActive(true)
      : setLoginActive(false);
  };

  const CheckEmail = (e) => {
    const InputValue = e.target.value;
    setId(InputValue);

    if (ValidationEmail(InputValue)) {
      setIdOutLine('rgba(0,0,0, 0.2)');
    } else if (!ValidationEmail(InputValue)) {
      setIdOutLine('red');
    }

    if (e.key === 'Enter') {
      PasswordFocus.current.focus();
    }
  };

  const CheckPassword = (e) => {
    const InputValue = e.target.value;
    setPassword(InputValue);

    if (ValidationPassword(InputValue)) {
      setPasswordOutLine('rgba(0,0,0,0.2)');
    } else if (!ValidationPassword(InputValue)) {
      setPasswordOutLine('red');
    }

    if (e.key === 'Enter') {
      localStorage.setItem('id', id);
      localStorage.setItem('password', password);
    }
  };

  const ValidationEmail = (e) => {
    return /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{0,}$/.test(e);
  };

  const ValidationPassword = (e) => {
    return /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{7,}/.test(e);
  };

  return (
    <Body>
      <Bundle>
        <LoginPage>
          <Instagram>Minstagram</Instagram>
          <LoginInput
            ref={IDFocus}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            autoFocus
            onChange={ButtonActive}
            outLine={`${idOutLine} 1px solid`}
            onKeyUp={CheckEmail}
          />
          <PasswordInput
            ref={PasswordFocus}
            type="password"
            placeholder="비밀번호"
            outLine={`${passwordOutLine} 1px solid`}
            onChange={ButtonActive}
            onKeyUp={CheckPassword}
          />
          {loginActive === true ? (
            <Button2 onClick={() => goToFeed()}>로그인</Button2>
          ) : (
            <Button>로그인</Button>
          )}
          <OrBar>
            <Hr />
            <Or>또는</Or>
            <Hr />
          </OrBar>
          <Facebook>
            <AiFillFacebook size="20px" />
            &nbsp;Facebook으로 로그인
          </Facebook>
          <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
        </LoginPage>
        <SignInPage>
          계정이 없으신가요?&nbsp;<SignIn>가입하기</SignIn>
        </SignInPage>
        <DownloadDescription>앱을 다운로드하세요.</DownloadDescription>
        <Downloads>
          <DownloadButton>
            <AiFillApple size="40px" />
            <DownloadDescription2>
              App Store에서 <DoDownload>다운로드 하기</DoDownload>
            </DownloadDescription2>
          </DownloadButton>
          <DownloadButton>
            <FaGooglePlay size="30px" />
            <DownloadDescription2>
              <DoDownload>다운로드하기 </DoDownload>Google Play
            </DownloadDescription2>
          </DownloadButton>
        </Downloads>
      </Bundle>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  width: 100vw;
`;

const LoginInput = styled.input`
  margin: 5px 0;
  width: 20vw;
  min-width: 320px;
  outline: ${(props) => props.outLine};
  background-color: rgba(218, 218, 218, 0.2);
  padding: 10px;
  border-radius: 5px;
`;

const PasswordInput = styled.input`
  margin: 5px 0;
  width: 20vw;
  min-width: 320px;
  outline: ${(props) => props.outLine};
  background-color: rgba(218, 218, 218, 0.2);
  padding: 10px;
  border-radius: 5px;
`;

const Bundle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  outline: rgba(0, 0, 0, 0.2) 1px solid;
  background-color: white;
`;

const Instagram = styled.div`
  font-size: 35px;
  font-family: 'Petit Formal Script', cursive;
  font-weight: bold;
  margin: 50px 0;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 20px 0;
  padding: 8px;
  width: 20vw;
  min-width: 320px;
  color: white;
  background-color: rgba(187, 224, 252, 0.8);
  border-radius: 5px;
  font-weight: bold;
`;

const Button2 = styled.button`
  cursor: pointer;
  margin: 20px 0;
  padding: 8px;
  width: 20vw;
  min-width: 320px;
  color: white;
  background-color: rgba(55, 162, 245, 1);
  border-radius: 5px;
  font-weight: bold;
`;

const OrBar = styled.div`
  display: flex;
  width: 100%;
`;

const Hr = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 40%;
`;

const Or = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
`;

const Facebook = styled.div`
  cursor: pointer;
  margin: 20px 0;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: rgba(56, 81, 133, 1);
`;

const ForgotPassword = styled.div`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  color: rgba(56, 81, 133, 1);
  font-size: 12px;
  font-weight: bold;
`;

const SignInPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 20px 0;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 14px;
`;

const SignIn = styled.span`
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  color: rgb(0, 149, 246);
  font-weight: bold;
`;

const DownloadDescription = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Downloads = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DownloadButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
  margin: 10px;
  padding: 5px;
  width: 180px;
  border-radius: 8px;
  color: white;
  background-color: black;
`;

const DownloadDescription2 = styled.div`
  margin: 0 10px;
`;

const DoDownload = styled.div`
  font-size: 11px;
`;
