import React from 'react'
import axios from 'axios'
import { variables } from '../variables'

interface IProps {
    route: string
    method: 'get' | 'post' | 'put' | 'delete'
    postData?: any
}


const useFetch  = ({route, method, postData}:IProps):any=> {

    // language=TypeScript
    const [data, setData] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const fetchData = () => {
        setLoading(true)
        axios({
            method: method,
            url: variables.origin+route,
            withCredentials:true,
            headers: {
                'Content-Type': 'application/json',
            },
            data: postData
        })
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
      return [data, loading, error]
    }
   return {
    fetchData
   }
}

export default useFetch
