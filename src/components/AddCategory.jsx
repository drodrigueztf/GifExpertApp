import  { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();

        if(inputValue.trim().length<=1) return;
        onNewCategory(inputValue.trim())
        setinputValue('');
    }

    const onInputChange = ({target}) =>{
        setinputValue(target.value);
        console.log(inputValue);
        
    }


  return (
    <form onSubmit={onSubmit}>
    <input type="text" placeholder='Buscar gifs' value={inputValue}
    onChange={onInputChange}/>
</form>
    
  )
}
