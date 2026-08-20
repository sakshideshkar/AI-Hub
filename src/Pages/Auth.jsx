import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
          background:
            radial-gradient(circle at top left,#c7d2fe,transparent 35%),
            radial-gradient(circle at bottom right,#ddd6fe,transparent 35%),
            #f8faff;
        }

        .auth-card {
          width: 900px;
          min-height: 550px;
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          box-shadow: 0 30px 80px rgba(31,41,55,.15);
          border: 1px solid rgba(255,255,255,.8);
        }

        .auth-left {
          padding: 55px;
          color: white;
          background: linear-gradient(135deg,#4f46e5,#7c3aed);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .auth-logo {
          font-size: 35px;
          font-weight: 900;
          margin-bottom: 25px;
        }

        .auth-left h1 {
          font-size: 42px;
          line-height: 1.15;
        }

        .auth-left p {
          color: #ddd6fe;
          line-height: 1.7;
        }

        .auth-feature {
          margin-top: 25px;
          display: grid;
          gap: 12px;
        }

        .auth-feature div {
          background: rgba(255,255,255,.12);
          padding: 12px;
          border-radius: 12px;
        }

        .auth-right {
          padding: 55px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .auth-right h2 {
          font-size: 30px;
          margin-bottom: 8px;
        }

        .auth-right > p {
          color: #64748b;
          margin-bottom: 25px;
        }

        .auth-input {
          margin-bottom: 18px;
        }

        .auth-input label {
          display: block;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .auth-input input {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          border: 1px solid #dbe1ea;
          border-radius: 12px;
          outline: none;
        }

        .auth-input input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,.1);
        }

        .auth-submit {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg,#6366f1,#8b5cf6);
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 5px;
        }

        .switch-auth {
          text-align: center;
          margin-top: 20px;
          color: #64748b;
        }

        .switch-auth button {
          border: none;
          background: none;
          color: #6366f1;
          font-weight: 700;
          cursor: pointer;
        }

        @media(max-width:700px) {
          .auth-card {
            grid-template-columns: 1fr;
          }

          .auth-left {
            display: none;
          }

          .auth-right {
            padding: 35px 25px;
          }
        }
      `}</style>

      <main className="auth-page">

        <div className="auth-card">

          <div className="auth-left">

            <div className="auth-logo">
              AI<span>HUB</span>
            </div>

            <h1>
              Discover the Future of Artificial Intelligence.
            </h1>

            <p>
              Explore thousands of AI tools, compare platforms,
              save your favorites and find the perfect AI for
              your workflow.
            </p>

            <div className="auth-feature">
              <div>✓ 10,000+ AI Tools</div>
              <div>✓ Smart Tool Comparison</div>
              <div>✓ Personalized Favorites</div>
            </div>

          </div>

          <div className="auth-right">

            <h2>
              {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
            </h2>

            <p>
              {isLogin
                ? "Login to continue exploring AIHUB."
                : "Join thousands of AI explorers."}
            </p>

            <form onSubmit={handleSubmit}>

              {!isLogin && (
                <div className="auth-input">

                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />

                </div>
              )}

              <div className="auth-input">

                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />

              </div>

              <div className="auth-input">

                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter password"
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />

              </div>

              <button className="auth-submit">
                {isLogin ? "Login to AIHUB →" : "Create Account →"}
              </button>

            </form>

            <div className="switch-auth">

              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}

              <button
                onClick={() =>
                  setIsLogin(!isLogin)
                }
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default Auth;