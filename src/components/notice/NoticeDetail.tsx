import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

//TODO: 클릭시 해당 공지만 박스가 커지면서 전문 보여주기 클릭이벤트?

export const NoticeDetail = () => {
  const [notices, setNotices] = useImmer({
    id: 0,
    title: '',
    content: '',
  });

  const param = useParams();
  const id = Number(param.id);

  const fetchNotice = async () => {
    await axios.get(`/api/notice/${id}`).then((res) => {
      setNotices(res.data);
    });
  };
  useEffect(() => {
    fetchNotice();
  }, [id]);

  return (
    <>
      <h1>🪧{notices.title}</h1>
      <p>{notices.content}</p>
    </>
  );
};
