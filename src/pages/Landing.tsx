import CommonViewPage from '../components/common/CommonViewPage';
import { GotoMessageIcon } from '../assets/icon';
import LandingData from '../api/getLandingData';
import LandingHeader from '../components/Landing/LandingHeader';
import LandingProfile from '../components/Landing/LandingProfile';
import Logout from '../components/Landing/Logout';
import MessageList from '../components/Landing/MessageList';
import { styled } from 'styled-components';
import { useState } from 'react';

const LANDING_DATA: LandingData = {
  code: 200,
  message: '조회 성공하였습니다.',
  data: {
    userName: '박현정',
    userPoint: 1,
    userAnswers: [
      {
        id: 1,
        answer: '차안에서',
        createdAt: '2020.02.01',
      },
      {
        id: 2,
        answer: '달빛산책',
        createdAt: '2020.02.01',
      },
    ],
  },
};

function Landing() {
  const [modalOpen, setModalOpen] = useState('false');

  return (
    <CommonViewPage>
      <St.LandingWrapper>
        <GotoMessageIcon className="gotoMessageBtn" />
        <LandingHeader />
        <LandingProfile userName={LANDING_DATA.data.userName} userPoint={LANDING_DATA.data.userPoint} />
        <MessageList messageList={LANDING_DATA.data.userAnswers} />
        <Logout />
      </St.LandingWrapper>
    </CommonViewPage>
  );
}

export default Landing;

const St = {
  LandingWrapper: styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0 16px;

    height: 100%;
    background: linear-gradient(180deg, #0e0d10 0%, #8cacff 56.06%, #ffffff 100%);

    .gotoMessageBtn {
      position: fixed;
      top: calc(100vh - 90px);
      right: calc(50vw - 171.5px);
    }
  `,
};
