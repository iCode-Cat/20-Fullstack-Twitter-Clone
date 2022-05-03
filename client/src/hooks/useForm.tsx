import React from 'react';

const useForm = () => {
  const [state, setState] = React.useState({
    username: '',
    description: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });

    return;
  };

  return {
    state,
    handleChange,
  };
};

export default useForm;
