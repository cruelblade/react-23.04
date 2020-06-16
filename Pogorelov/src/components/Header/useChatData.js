import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchChatsData } from '../../actions/chatsActions';

function useChatData() {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  const getData = useCallback(async () => {
    setIsFetching(true);
    await dispatch(fetchChatsData());
    setIsFetching(false);
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return isFetching;
}

export default useChatData;
