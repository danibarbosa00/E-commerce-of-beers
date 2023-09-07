import { useState,useCallback } from 'react';
import { getDataApiJSON } from '../../../../../../utils/globals/petitions';
import { UserHeaderModalTY } from '..';



interface LoginModalProps extends UserHeaderLoginLogicProps{
}

const LoginModal: React.FC<LoginModalProps> = ({setOpenModal}) => {

const {passwordError,LoginUser,email,setEmail,setPassword,password}=useLoginModalLogic({setOpenModal})

  return  <div className={'container-user-login'} > 
        <p>Log in</p>
        <input id='email-user' name='email-user' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input id='password-user' name='password-user' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {passwordError&&<p>{passwordError}</p>}
        <button type='submit' onClick={LoginUser}>Log in</button>
        <p className='still-not-created' onClick={()=>setOpenModal('register')}>Are you not registered?</p>
    </div>;
};
interface UserHeaderLoginLogicProps {
 setOpenModal: React.Dispatch<React.SetStateAction<UserHeaderModalTY | null>>
}

const useLoginModalLogic = ({setOpenModal}:UserHeaderLoginLogicProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

const LoginUser= useCallback(async (e:any) => {
  e.preventDefault() 
  if(email){
   const userByEmail = await getDataApiJSON('/api/user/getUserByEmail', { email });
    if(userByEmail.password===password){
      const token = userByEmail.token;
      const id = userByEmail.id; 
      localStorage.setItem('id', JSON.stringify(id));     
      localStorage.setItem('token', JSON.stringify(token));
      setOpenModal(null)
    }
    else setPasswordError('Wrong email or password')
  }
  else setEmailError('Wrong email or password')

},[email,password])

return { emailError,LoginUser,setPassword,setEmail,passwordError,email,password };
};

export default LoginModal