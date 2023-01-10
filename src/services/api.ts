import axios from 'axios';

import { loadItem, saveItem } from './storage';

const baseURL = axios.create({
  baseURL: 'https://sparta-hippo.shop/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `${loadItem('isLogin')}`,
  },
});

const mockURL = axios.create({
  baseURL: 'http://localhost:3003',
});

const MEETINGS = '/api/meetings';
const LOGIN = '/api/users/login';

const MEETINGS_MOCK = '/meetings';
const COMMENT_MOCK = '/comment';
const NEXT_MOCK = '/next';

export const getSortbyMeetings = async (keyword: string) => {
  const response = await mockURL.get(MEETINGS_MOCK);
  // + `?sortby=${keyword}&category=`
  return response;
};

export const getSearchMeetings = async (keyword: string) => {
  const response = await mockURL.get(MEETINGS_MOCK);
  // + `/search?searchBy=${keyword}&category=`
  return response;
};

export const patchJoinMeeting = async (meetingId: number) => {
  // 추후 patch로 변경
  const response = await mockURL.get(MEETINGS);
  // + `/${meetingId}/attendance`
  return response;
};

export const getNextMeetings = async (meetingId: number) => {
  const response = await mockURL.get(NEXT_MOCK);
  // + `?meetingId=${meetingId}`
  return response;
};

export const postLogin = async (userInfo: { email: string; password: string }) => {
  const response = await baseURL.post(LOGIN, userInfo).catch((err) => {
    alert(err.response.data.statusMsg);
    location.reload();
  });

  saveItem('isLogin', response?.headers.authorization as unknown as string);
  location.reload();
};


export const getDetailPage = async (id: string) => {
  const res = await mockURL.get(MEETINGS_MOCK);
  // + `/${id}`
  console.log('detail-', res);
  return res;
};

export const getCommentList = async (id: string) => {
  const res = await mockURL.get(COMMENT_MOCK);
  // +`/${id}/comments`
  console.log('comment-', res);
  return res;
};
