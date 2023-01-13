import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getAlarmApi, meetAttendExitApi } from '../../services/api';
import { DetailTypes } from '../../types/DetailTypes';

const DetailNavBar = ({ data }: any) => {
  const { id } = useParams();
  const QueryClient = useQueryClient();
  const navigate = useNavigate();

  const handleClickMeetingEdit = (id: any) => {
    alert('모임 수정페이지로 이동 - 연결 준비 중입니다');
    // navigate('')
  };
  const meetingTitle = data?.title;
  const handleClickShareLink = () => {
    alert('모임공유 준비중입니다');
  };
  const useMeetAttendExit = () => {
    return useMutation(meetAttendExitApi, {
      onSuccess: (data) => {
        QueryClient.invalidateQueries();
        console.log(data.data.data === undefined);
        data?.data.data !== undefined
          ? alert(`"${meetingTitle}" 모임에 오신걸 환영합니다!`)
          : alert('모임을 취소하셨습니다');
      },
      onError: (err: any) => {
        return alert(err.response.data.statusMsg);
      },
    });
  };

  const { mutate: meetAttendExit } = useMeetAttendExit();
  const handleClickAttnedExit = (id: any) => {
    meetAttendExit(id);
  };

  const useGetAlarm = () => {
    return useMutation(getAlarmApi, {
      onSuccess: () => {
        QueryClient.invalidateQueries();
      },
    });
  };

  const { mutate: getAlarm } = useGetAlarm();
  const handleClickAlarm = (id: any) => {
    data?.attend ? getAlarm(id) : alert('모임 참석하기 후, 알람 설정이 가능합니다');
  };

  return (
    <NavBox>
      <NavArrow
        onClick={() => {
          navigate('/main');
        }}
      >
        ◀
      </NavArrow>
      <NavTitle>{data?.title}</NavTitle>
      <NavButtonBox>
        <div
          onClick={() => {
            handleClickAlarm(id);
          }}
        >
          {data?.alarm ? <span>🔔</span> : <span>🔕</span>}
        </div>
        <div onClick={handleClickShareLink}>
          <span>🔗</span>
        </div>
        {data?.master ? (
          <div
            onClick={() => {
              handleClickMeetingEdit(id);
            }}
          >
            <span>✒️</span>
          </div>
        ) : (
          <div
            onClick={() => {
              handleClickAttnedExit(id);
            }}
          >
            {data?.attend ? <span>➡️</span> : <span>⬅️</span>}
          </div>
        )}
      </NavButtonBox>
    </NavBox>
  );
};
const NavBox = styled.div`
  padding: 16px;
  box-sizing: border-box;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const NavArrow = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
const NavTitle = styled.p`
  width: 100%;
  padding: 0 10px;
`;
const NavButtonBox = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 25px;
    height: 25px;
    margin-left: 12px;
    span {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export default DetailNavBar;
