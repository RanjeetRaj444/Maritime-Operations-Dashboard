import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FiAnchor, FiUser, FiLock } from "react-icons/fi";
import { use } from "react";

function Login() {
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signUP, setSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputData);
    if (!signUP) {
      if (!inputData.password || !inputData.email) {
        setError("Please enter all fields");
        return;
      }
    } else {
      if (!inputData.name || !inputData.password || !inputData.email) {
        setError("Please enter all fields");
        return;
      }
    }

    setError("");
    setLoading(true);
    if (signUP) {
      try {
        await fetch("http://localhost:5000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputData),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.error) {
              setError(data.error);
            } else {
              login(data);
              navigate("/");
            }
          });
      } catch (error) {
        setError("An error occurred during sign up");
        console.error("Sign up error:", error);
      }
    } else {
      try {
        await fetch("http://localhost:5000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputData),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.error) {
              setError(data.error);
            } else {
              login(data);
              navigate("/");
            }
          });
      } catch (error) {
        setError("An error occurred during login");
        console.error("Login error:", error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-primary-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <FiAnchor className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Marine Dashboard
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access your marine data dashboard
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div
                className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {signUP && (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="name"
                    type="text"
                    autoComplete="username"
                    required
                    value={inputData.name}
                    onChange={(e) => handleChange(e)}
                    className="input pl-10"
                    placeholder="captain_demo"
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={inputData.email}
                  onChange={(e) => handleChange(e)}
                  className="input pl-10"
                  placeholder="ghost@gmail.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={inputData.password}
                  onChange={(e) => handleChange(e)}
                  className="input pl-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary py-3 flex justify-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                ) : !signUP ? (
                  "Sign In"
                ) : (
                  "SignUP"
                )}
              </button>
            </div>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                <span>Demo credentials: </span>
                <span className="font-medium">captain_demo / password</span>
              </p>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            <button
              onClick={() => setSignUp(!signUP)}
              className="btn btn-primary p-3  "
            >
              {signUP ? "Sign In" : "SignUP"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
