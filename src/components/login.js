'use client';
import React, { useState } from 'react';
import Alert from '@/components/alert';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/button';
import InputField from '@/components/inputfield';
import Switch from '@/components/switch';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Admin' && password === 'pswrd') {
            router.push('/mainContent');
        } else {
            setAlertMessage('Неверные данные');
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {alertMessage && <Alert message={alertMessage} duration={3000} />}
            <form
                className="bg-white p-6 shadow-md rounded-lg max-w-sm w-full"
                onSubmit={handleSubmit}>
                <div className="text-center mb-6">
                    <Image src="/Resourses/logokrs.png" width={60} height={60} alt="Logo" />
                    <h1 className="text-2xl font-bold mt-4">Авторизация</h1>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Логин:</label>
                    <InputField
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-green-300"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Введите логин"
                        backgroundColor="white"
                        textColor="gray-700"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Пароль:</label>
                    <InputField
                        type="password"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-green-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введите пароль"
                        backgroundColor="white"
                        textColor="gray-700"/>
                </div>
                <div className="mb-6 flex items-center">
                    <Switch
                        text="Запомнить меня"
                        isChecked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        backgroundColor="green-500"
                        textColor="gray-700"
                        className="ml-2"/>
                </div>
                <Button
                    type="submit"
                    backgroundColor="green-500"
                    textColor="white"
                    text="Войти"
                    className="w-full py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"/>
                <p className="mt-4 text-center text-gray-600 text-sm">
                    Еще нет учетной записи?{' '}
                    <a href="/register" className="text-green-500 hover:underline">Зарегистрироваться</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
