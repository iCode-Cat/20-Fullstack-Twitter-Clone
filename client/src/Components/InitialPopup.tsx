import React from 'react'
import useFetch from '../hooks/useFetch'
import useForm from '../hooks/useForm'

const InitialPopup = () => {

   const {handleChange, state} = useForm()
 
   const {fetchData} = useFetch({route: '/api/auth/profile', method: 'put',postData:state})

  const SubmitHandler = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
     const [data, loading, error]=  await fetchData()
     if(data) {
         alert('DONE')
     }
 
  }

  return (
    <div className='p-10 grid place-content-center text-center w-[100%] h-[100vh] fixed z-10 bg-white'>
    <img
      className='w-[80px] place-self-center'
      src='/tweeter-small.svg'
      alt=''
    />
    <h1 className='text-[#414040] mt-5'>
      Before you go, please set your profile.
    </h1>
    <form onSubmit={SubmitHandler} className='grid gap-5 mt-5'>
      <label htmlFor='username '>
        <input
          className='w-[100%] max-w-[400px] border-[black] border-[1px] rounded-[10px] p-2'
          type='text'
          placeholder='username'
          onChange={handleChange}
          name='username'
          required
        />
       
      </label>
      <label htmlFor='firstname'>
      <input
          className='w-[100%] max-w-[400px] border-[black] border-[1px] rounded-[10px] p-2'
          type='text'
          placeholder='firstname'
          onChange={handleChange}
          name='firstname'
          required
        />
      </label>
      <label htmlFor="lastName">
      <input
          className='w-[100%] max-w-[400px] border-[black] border-[1px] rounded-[10px] p-2'
          type='text'
          placeholder='lastname'
          onChange={handleChange}
          name='lastname'
          required
        />
      </label>
      <label htmlFor='description'>
        <textarea
          className='w-[100%] max-w-[400px] h-[100px] border-[black] border-[1px] rounded-[10px] p-2'
          placeholder='description'
          onChange={handleChange}
          name='description'
          required
        />
      </label>
      <input
        type='submit'
        className='cursor-pointer bg-[#2F80ED] text-[#FFF] rounded-[10px] p-2'
      />
    </form>
  </div>
  )
}

export default InitialPopup