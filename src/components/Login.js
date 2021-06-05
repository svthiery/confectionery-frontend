import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import ReactLoading from 'react-loading';

function Login({ showLoginModal, setShowLoginModal, setCurrentUser }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const [isLoginLoading, setIsLoginLoading] = useState(false);
    
      function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        setIsLoginLoading(true)
        console.log(formData)
        // TODO: login the user
        // POST /login
        fetch("https://gentle-depths-95024.herokuapp.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((user) => {
              console.log(user)
            // use the response to set state
            setCurrentUser(user);
          });
      }

  const toRender = showLoginModal ? (
    <div className="login-modal">
      <AnimatePresence>
        {showLoginModal && (
          <div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -50,
                opacity: 0,
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <button
                onClick={() =>
                  setShowLoginModal((showLoginModal) => !showLoginModal)
                }
                className="close-btn"
              >
                &times;
              </button>
              {isLoginLoading ? <div className="login-loading-animation">
                    <ReactLoading type={"spokes"} color={"grey"} height={'15%'} width={'15%'}/>
                </div> : null}
              <div className="login-modal-content">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <h2 className="login-text">Login</h2>
                  <div className="username-div">
                    <label className="login-form-label">Username </label>
                    <br></br>
                    <input
                        className="login-input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="password-div">
                    <label className="login-form-label">Password </label>
                    <br></br>
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                  </div>
                  <input type="submit" value="Log In" className="login-signup-btn"/>
                </form>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={() =>
                setShowLoginModal((showLoginModal) => !showLoginModal)
              }
              className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  ) : null;

  return toRender;
}

export default Login;
