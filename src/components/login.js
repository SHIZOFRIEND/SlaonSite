'use client'
import React,{useState} from 'react';
import Alert from '@/components/alert'
import {useRouter} from 'next/navigation'
import Image from "next/image";
const Login = () => {
   const [username, setUsername ] = useState('');
   const [password, setPassword] = useState('');
   const [alertMessage, setAlertMessage] = useState('');
   const router = useRouter();
   const handleSubmit = (e) => {
       e.preventDefault();
       if(username === 'Admin' && password === '') {
           router.push('/mainContent');
       }
       else {
           setAlertMessage('')
           setTimeout(() => {
               setAlertMessage('Данные плохие...')
           },0)
       }
   };
    return (
        <div>
            {alertMessage && <Alert message={alertMessage} duration={3000} />}
            <form className={" min-h-1/3 min-w-1/3 p-6 rounded-lg"} onSubmit={handleSubmit}>
                <Image className="mx-auto" src="/Resourses/logokrs.png" width={30} height={30} alt="Logo"/>
                <h1 className={"rounded-lg text-center w-full"}>Авторизация </h1>
                <div className={"w-full"}>
                    <a className={"text-black mr-4"}>Логин:</a>
                    <input className={"bg-white shadow-lg p-1 w-full border border-[#86EDA7] rounded-lg"} value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className={"mt-6 w-full"}>
                    <a className={"text-black mr-4"}>Пароль:</a>
                    <input className={"bg-white shadow-lg p-1 w-full border border-[#86EDA7] rounded-lg"} value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className={"w-full"}>
                    <button className={"bg-[#86EDA7] w-full my-4 p-1 rounded-lg"} type="submit">
                        Войти
                    </button>
                </div>
                <div className={"rounded-lg text-center w-full"}>
                    <a className={"text-black text-xs text-center"}>Еще нет учетной записи?</a>
                    <button className={"bg-[#86EDA7] w-full my-4 p-1 rounded-lg"} type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
};
export default Login;