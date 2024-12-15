import React, { useEffect } from 'react'
import ErrImg from "../assets/images/404.gif"
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 6000)
    })

    return (
        <section className='errorPage'>
            <div className='errorPage__container'>
                <img src={ErrImg} alt="Page not found" />
                <h1>404</h1>
                <p>This page does not exits. You will be redirect to the previous page shortly.</p>
            </div>

        </section>
    )
}

export default ErrorPage