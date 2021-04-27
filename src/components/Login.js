function Login({showLoginModal}) {
    const toRender = showLoginModal ? (<div className="login-modal">Login</div>) : null 

    return (
        toRender
    );
}

export default Login;