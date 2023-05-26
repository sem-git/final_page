import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
//PC 크기 버전 envelope 이상

const Background = styled.div`
  position: relative;
  height: 941px;
  background: #fae4ea;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 80%;
  height: 596px;
  top: 10%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
  top: 8vh;
  margin: auto;
`;

const Title = styled.div`
  position: relative;
  width: 195px;
  height: 80px;
  top: 10vh;
  margin: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  color: #000000;
`;

const Name = styled.div`
  position: relative;
  width: 120px;
  height: 23px;
  top: 90px;
  margin: 0 auto;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #0075ff;
`;

const Name1 = styled.div`
  position: relative;
  width: 120px;
  height: 23px;
  margin-left: 52%;
  top: 11.3%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const Name2 = styled.div`
  position: relative;
  width: 120px;
  height: 23px;
  top: 8%;
  margin-left: 58%;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
`;

const Text = styled.div`
  position: relative;
  width: 360px;
  height: 259px;
  margin: auto;
  top: 13vh;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #000000;
`;

const Envelope = styled.div`
  position: relative;
  margin-left: 1%;
  margin-top: -20%;
`;

const Pass = () => {
  const location = useLocation();
  const name = location.state;

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 3.png`}
            alt="logo"
            width="58px"
          />
        </Logo>
        <Title>
          합격을 <br /> 축하합니다!
        </Title>
        <Name>{name} </Name>
        <Name1>님</Name1>
        <Name2>은</Name2>
        <Text>
          동덕여대 멋사 11기에 최종합격 하셨습니다! 🎉
          <br />
          긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br />
          자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          https://discord.gg/BSHH7mck
          <br />
          <br />
          3월 17일까지 디스코드에 들어와주세요!
          <br />
          <br />
          3/26(일) 동덕 멋사 OT에서 만나요~
          <br />
          *장소 추후 안내 예정
        </Text>
      </WhiteBox>
      <Envelope>
        <img
          src={`${process.env.PUBLIC_URL}/images/envelope.png`}
          alt="envelope"
          width="450px"
        />
      </Envelope>
    </Background>
  );
};

export default Pass;
