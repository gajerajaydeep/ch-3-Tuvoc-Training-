import React,{useState} from 'react'

export default function useCounter() {

     const [counter,setCounter] = useState(0)
    
        function increment() {
            setCounter(counter+1);
        }
        function decrement() {
            setCounter(counter-1)
        }
  return [counter,increment,decrement]
}

