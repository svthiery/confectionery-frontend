function Signup({ showSignupModal }) {
    const toRender = showSignupModal ? (<div className="signup-modal">Sign Up</div>) : null 

    return (
        toRender
    );
}

export default Signup;