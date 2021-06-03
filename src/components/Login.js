import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Login({ showLoginModal, setShowLoginModal, setCurrentUser }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
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
            // use the response to set state
            setCurrentUser(user);
          });
      }

  const toRender = showLoginModal ? (
    <div className="login-modal">
      <AnimatePresence>
        {showLoginModal && (
          <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
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
              className="absolute z-10 p-5 bg-indigo-600 h-auto w-full max-w-md rounded text-white"
            >
              <button
                onClick={() =>
                  setShowLoginModal((showLoginModal) => !showLoginModal)
                }
                className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-indigo-600 border border-indigo-600 h-8 w-8 block mb-2 rounded-full"
              >
                &times;
              </button>
              <div className="login-modal-content">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <h2>Login</h2>
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
                  <input type="submit" value="Login" />
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
