import React, { useState, useCallback } from 'react';
import { getDataApiJSON } from '../../../../../../utils/globals/petitions';
import { UserHeaderModalTY } from '..';

interface FormData {
  email: string
  address_1: string
  address_2: string
  postalCode: string
  phone: string
  password: string
  confirmPassword: string
} 

interface UserCreateAccountLogicProps {
}

const useUserCreateAccountLogic = () => {

  const [formData, setFormData] = useState<FormData>({
    email: '',
    address_1: '',
    address_2: '',
    postalCode: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [myError, setMyError] = useState('')

  const changeValue = useCallback((value: string, field: keyof FormData ) => {
    setFormData((oldData) => {
      return {...oldData, [field]: value}
    })
  }, [])
const createUser = useCallback(async (e:any) => {
  e.preventDefault()  
  if(formData.email){
    const userByEmail = await getDataApiJSON('/api/user/getUserByEmail', { email: formData.email });
     if(!userByEmail.id){
      if (formData.password.length>0 && formData.password === formData.confirmPassword) {
        try {
          const response = await getDataApiJSON('/api/user/createUser', formData);
          if (response.status === 200) {
           console.log('User created');
          } else {
            console.error('Error creating user:', response.statusText);
          }
        } catch (error) {
          console.error('Error to create user:', error);
        }
      }else setMyError ('Wrong password ')
    }
    else setMyError('Email used') 
  }
  else setMyError('Email required')
}, [formData]);

  return {
    createUser,
    changeValue,
    formData,
    myError
  };
};

interface UserHeaderModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<UserHeaderModalTY | null>>;
}


const RegisterModal: React.FC<UserHeaderModalProps> = ({setOpenModal}) => {
  const {
    createUser,
    formData,
    myError,
    changeValue
  } = useUserCreateAccountLogic();

  return (
    <div className='container-user-create-account'>
      <form className='user-create-account'>
        <p>Create your account</p>
        <input id='email-user' placeholder='Email' name='email-user' value={formData.email} onChange={(e) => changeValue(e.target.value, 'email')}></input>

        <input id='address_1-user' placeholder='Address' name='address_1-user' value={formData.address_1} onChange={(e) => changeValue(e.target.value, 'address_1')}></input>

        <input id='address_2-user' placeholder='Adicional address' name='address_2-user'value={formData.address_2} onChange={(e) => changeValue(e.target.value,'address_2')}></input>
        
        <input id='postalCode-user' placeholder='Postal Code' name='postalCode-user' value={formData.postalCode} onChange={(e) => changeValue(e.target.value,'postalCode')}></input>

        <input id='phone-user' placeholder='Phone' name='phone-user' value={formData.phone} onChange={(e) => changeValue(e.target.value,'phone')}></input>

        <input id='password-user' placeholder='Password' name='password-user' value={formData.password} onChange={(e) => changeValue(e.target.value,'password')}></input>

        <input id='confirm-password-user' placeholder='Confirm password' name='confirm-password-user' value={formData.confirmPassword} onChange={(e) => changeValue(e.target.value,'confirmPassword')}></input>
        {myError&& <p>{myError}</p>}
        <button type='submit' onClick={createUser}>
          Create account
        </button>
         <p className='already-created-account' onClick={()=>setOpenModal('login')}>Are you registered?</p>
      </form>
     </div>
  );
};
export default RegisterModal
