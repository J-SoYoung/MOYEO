import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { setMeetingList } from '../modules/homeSlice';
import { getSortbyMeetings } from '../services/api';

const sortbyKeyword = 'popular';

type ReturnType = {
  isLoading: boolean;
  isError: boolean;
};

export default function useSetMeetingList(): ReturnType {
  const dispatch = useDispatch();

  const { isLoading, isError } = useQuery({
    queryKey: ['meetings'],
    queryFn: () => getSortbyMeetings(''),
    onSuccess: (data) => {
      const { meetingList } = data?.data;
      dispatch(setMeetingList({ meetingList, sortbyKeyword }));
    },
  });

  return {
    isError,
    isLoading,
  };
}
