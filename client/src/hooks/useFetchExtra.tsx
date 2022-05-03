import React from 'react';
import axios from 'axios';
import { variables } from '../variables';
import { useEffect } from 'react';

interface IProps {
  route: string;
  method: 'get' | 'post' | 'put' | 'delete';
  postData?: any;
}

const useFetchExtra = ({ route, method, postData }: IProps): any => {
  // language=TypeScript
  const [data, setData] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  useEffect(() => {
    setLoading(true);
    setData('');
    axios({
      method: method,
      url: variables.origin + route,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      data: postData,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [route]);

  return [data, loading, error];
};

export default useFetchExtra;
