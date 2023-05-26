import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate } from "react-router-dom";
//PC 크기 버전 조금 이상, 모바일 크기 버전 완전 이상 ;;

const Background = styled.div`
  position: relative;
  background: #902443;
  height: 844px;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 65%;
  height: 560px;
  top: 10%;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
  margin: auto;
`;

const Logo = styled.div`
  position: relative;
  width: 81px;
  height: 81px;
  margin: auto;
  top: 43px;
`;

const Title = styled.div`
  position: relative;
  width: 300px;
  height: 48px;
  left: 28%;
  top: 50px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #5e162b;
`;

const Line1 = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  margin-left: 30%;
  margin-top: 15%;
  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const Name = styled.div`
  position: relative;
  width: 40px;
  height: 26px;
  margin-left: 33%;
  margin-top: -2.3%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const NameForm = styled.input`
  position: relative;
  width: 220px;
  height: 40px;
  margin-left: 30%;
  margin-top: 10px;
  background: #cd99a6;
  border-radius: 50px;
`;

const Line2 = styled.div`
  position: relative;
  width: 14px;
  height: 0px;
  margin-left: 30%;
  margin-top: 8%;
  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const Phone = styled.div`
  position: relative;
  width: 90px;
  height: 26px;
  margin-left: 32.5%;
  margin-top: -2.3%;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;

const PhoneForm = styled.input`
  position: relative;
  width: 253px;
  height: 42px;
  margin-left: 30%;
  margin-top: 11px;
  background: #cd99a6;
  border-radius: 50px;
`;

const Button = styled.div`
  position: relative;
  width: 93px;
  height: 36px;
  top: 8%;
  left: 41%;
  background: #902443;
  border-radius: 10px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;

const Footer = styled.div`
  position: relative;
  width: 500px;
  height: 29px;
  top: 20%;
  left: 20%;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`;

const Main = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const discriminate = () => {
    let found = false;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name === name &&
        data[i].phone === phone &&
        data[i].pass === 1
      ) {
        navigate("/pass", { state: data[i].name });
        found = true;
        break;
      } else if (
        data[i].name === name &&
        data[i].phone === phone &&
        data[i].pass === 0
      ) {
        navigate("/fail");
        found = true;
        break;
      }
    }
    if (found == false) {
      alert(
        "등록되지 않은 성함/번호입니다. \n성함과 번호를 다시 한 번 확인해주세요!"
      );
    }
  };

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 1.png`}
            width="81px"
          />
        </Logo>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br /> 11기 아기사자 합격자 발표
        </Title>
        <Line1></Line1>
        <Name>성함</Name>
        <NameForm type="text" value={name} onChange={handleName}></NameForm>
        <Line2></Line2>
        <Phone>전화번호</Phone>
        <PhoneForm type="text" value={phone} onChange={handlePhone}></PhoneForm>
        <Button onClick={discriminate}>입력</Button>
      </WhiteBox>
      <Footer>DONGDUK x LIKELION</Footer>
    </Background>
  );
};
export default Main;
