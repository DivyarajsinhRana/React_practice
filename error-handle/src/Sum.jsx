import React,{useEffect,useState} from 'react'
import add from './Add'

const Sum = () => {
    const [count, setCount] = useState(null)
    useEffect(()=>{
            try{
                   const s=add(100,2) 
                   setCount(s)
            }
            catch(error){
                    setCount(error.message)
            }
    },[])
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default Sum
