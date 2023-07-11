import React, { useState } from 'react'

const FormValid = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        checkBox: false,
    });
    const [errors ,setErrors] = useState('')

    const handleInput = (e) => {
        let val = e.target.value;
        let name = e.target.name
        setFormData({
            ...formData,
            [name] : val
        })
        formValidation(name , val)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const formValidation = (formName, formVal) => {
        const errors = {}
        const emailValid = /^[a-zA-Z@.]+$/;
        const {name,email, password,confirmPassword  } = formData;



        if(!name) errors.name = 'name must be require'
        else if(name.length <= 2)  errors.name = 'name must be atleast 3 char'
        else delete errors.name

        if(!email) errors.email = 'email must be require'
        else if(email !== emailValid)  errors.email = 'plz enter valid email'
        else delete errors.name

        if(!password || password.length <= 6) errors.password = 'password must be 6 char'
        else if(!confirmPassword || password !== confirmPassword) errors.confirmPassword = 'password do not match'
        else delete errors.name

        setErrors( errors);

        
    }   

   
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='from-control'>
                <input type="text" placeholder='name' name="name"  value={formData.name} onChange={handleInput} />
            </div>
            {errors.name && <p style={{color: "red"}} >{errors.name}</p>}
            <div className='from-control'>
                <input type="text" placeholder='email' name="email"  value={formData.email} onChange={handleInput} />
            </div>
            {errors.email && <p style={{color: "red"}} >{errors.email}</p>}
            <div className='from-control'>
                <input type="password" placeholder='password' name="password" value={formData.password}  onChange={handleInput} />
            </div>
            {errors.password && <p style={{color: "red"}} >{errors.password}</p>}
            <div className='from-control'>
                <input type="password" placeholder='confirm password' name="confirmPassword" value={formData.confirmPassword}  onChange={handleInput} />
            </div>
            {errors.confirmPassword && <p style={{color: "red"}} >{errors.confirmPassword}</p>}
            {/* <div className='from-control'>
                <label htmlFor="check">accept term</label>
                <input type="checkbox"  id='check' onChange={handleInput}/>
            </div> */} 
            <div className='from-control'>
               <button type='submit'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormValid