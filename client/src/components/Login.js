import React from 'react';
import 'whatwg-fetch';
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-wrapper__content">
                    <div className="login-wrapper__content__left-section">
                        <div className="login-wrapper__content__right-section__login-content">
                            <p className="login-wrapper__content__right-section__login-content__title">Войти как
                                админ</p>
                            <div className="input-container">
                                <input id="username" type="text" required=""/>
                                <label>Никнейм</label>
                            </div>
                            <div className="input-container another-margin">
                                <input id="password" type="text" required=""/>
                                <label>Пароль</label>
                            </div>
                            <div className="input-container another-margin">
                                <input id="password" type="text" required=""/>
                                <label>ID - игры</label>
                            </div>
                            <Link to="/main">
                                <div
                                    className="login-wrapper__content__right-section__login-content__button hvr-grow-shadow">
                                    <p>Войти</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="registration-wrapper__content__right-section">
                        <div className="registration-wrapper__content__right-section__registration-content">
                            <div className="registration-wrapper__content__right-section__registration-content__title">
                                <p>Войти как игрок</p>
                            </div>
                            <div className="input-container">
                                <input type="text" required=""/>
                                <label>ID - игры</label>
                            </div>
                            <div className="input-container another-margin">
                                <input type="text" required=""/>
                                <label>Пароль</label>
                            </div>
                            <Link to="/login">
                                <div
                                    className="login-wrapper__content__right-section__registration-content__button hvr-grow-shadow">
                                    <p>Войти</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
