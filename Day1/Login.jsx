import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter your password" />
          </div>
          <Link to="/home/navbar">
          <button type="submit" className="w-full bg-green-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Login</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
