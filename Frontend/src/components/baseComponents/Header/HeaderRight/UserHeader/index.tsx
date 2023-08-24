import { useState } from 'react';
import './userHeader.sass'
import LoginModal from './Login';
import RegisterModal from './CreateAccount';

interface UserHeaderProps extends UserHeaderLogicProps {}

const UserHeader: React.FC<UserHeaderProps> = () => {
  const { openModal, setOpenModal } = useUserHeaderLogic();

  return (
    <div className='user-header'>
      <span className='span-Login' onClick={() => setOpenModal('login')}>Login</span>
      <span>|</span>
      <span className='span-register' onClick={() => setOpenModal('register')}>Create account</span>
      {openModal? <Modal type={openModal} setOpenModal={setOpenModal}/>:null}
    </div>
  );
};

export type UserHeaderModalTY='login'|'register'

interface UserHeaderLogicProps {}

const useUserHeaderLogic = () => {
  const [openModal, setOpenModal] = useState<UserHeaderModalTY|null>(null);

  return { openModal, setOpenModal };
};

interface ModalProps extends ModalLogicProps {
    type: UserHeaderModalTY
    setOpenModal: React.Dispatch<React.SetStateAction<UserHeaderModalTY | null>>
}

export const Modal: React.FC<ModalProps> = ({type,setOpenModal}) => {
    const {handleModalClick}= useModalLogic({})
    let renderThis:null| JSX.Element = null
    if(type==='login'){
        renderThis= <LoginModal setOpenModal={setOpenModal}/>
    }
    else if (type==='register'){
        renderThis=<RegisterModal setOpenModal={setOpenModal} />
    }
    return (
        <div className='modal-user' onClick={()=>setOpenModal(null)}>
            <div className='modal-user-inner' onClick={handleModalClick}>
            {renderThis}
            </div>
        </div>
    )
}

interface ModalLogicProps {}

const useModalLogic = ({}: ModalLogicProps) => {
    
 const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
    return {handleModalClick}
}


export default UserHeader