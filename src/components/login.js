import React from 'react';

const Login = () => {
    return (
        <form className={"bg-white shadow-2xl min-h-1/3 min-w-1/3 p-6 rounded-lg"}>
            <div className={"w-full"}>
                <a className={"text-black mr-4"}>Логин:</a>
                <input
                    className={"bg-gray-400 shadow-lg p-1 w-full rounded-lg"}
                />
            </div>
            <div className={"mt-6 w-full"}>
                <a className={"text-black mr-4"}>Пароль:</a>
                <input
                    className={"bg-gray-400 shadow-lg p-1 w-full rounded-lg"}
                />
            </div>
            <div className={"w-full"}>
                <button className={"bg-black w-full my-4 p-1 rounded-lg"}
                type="submit"
                >
                    Кнопка
                </button>
            </div>
        </form>
    );
};

export default Login;