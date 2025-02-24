import React,{useState} from 'react'

export default function useLocalStorage() {
     const [name, setName] = useState('');
    
        function handleInputChnage(e) {
            setName(e.target.value)
        }
    
    
        const handleSetData = () => {
            setName(localStorage.setItem("name", name))
        }
        const handleGetData = () => {
            alert(localStorage.getItem("name"))
        }
        const handleRemoveData = () => {
            setName(localStorage.removeItem("name"))
        }
  return [name,handleInputChnage,handleSetData,handleGetData,handleRemoveData];
}
