import { useEffect, useState } from 'react'
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default () => {
    const [formData, setFormData] = useState({username: '', password: ''});
    const [errorMessage, setErrorMessage] = useState("");
    const handleChange = (e:any) => {
    const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
  };

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/api/auth', {
        method: "GET",
        credentials: "include"
      })
      console.log(response.status)
      if(response.status === 200) navigate("/")
    })()
  }, [])

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent page refresh
    console.log(formData)

    try {
      const response = await fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData), // Send form data as JSON
        credentials: "include"
      });

      if(response.status === 200){
        // successful login
        const data = await response.json();
        navigate("/")
      }
      else {
        // Login failed 
        setErrorMessage("Login Failed!")
      }

    } catch (error) {
        setErrorMessage("Something Went Wrong!")
        console.log(error)
    }
  };



    return (
        <div className="bg-gray-950 w-screen h-screen flex items-center justify-center">
            <form className="w-96 h-96 bg-gray-50 rounded-lg shadow-lg p-7 flex flex-col justify-between" onSubmit={handleSubmit}>
                    <div>
                        <div className="flex flex-col">
                            <label>Username</label>
                            <input className="bg-gray-200 py-1 pl-1" type="text" name="username" onChange={handleChange} required value={formData.username}></input>
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input className="bg-gray-200 py-1 pl-1" type="password" name="password" onChange={handleChange} required value={formData.password}></input>
                        </div>
                    </div>
                    <button className="mt-auto" type="submit">Login</button>
            </form>
        </div>
    )
}