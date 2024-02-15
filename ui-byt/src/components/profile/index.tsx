import { useState } from "react"

const Profile = () => {
    const [userInput , setUserInput] = useState({
        name: "",
        password: "",
    })

    const handleChangeFields = (value: string, key: string) => {
        setUserInput((prev) => ({
            ...prev,
            [key] : value
        }))
    }

    const handleLogin = () => {

    }

    return <div className="flex flex-col gap-[24px]">
        <label>Name:</label>
        <input type={"text"} placeholder={"enter userName"} value={userInput.name} onChange={(e) =>handleChangeFields(e.target.value, "name")}/>
        <label>Password:</label>
        <input type={"text"} placeholder={"enter password"} value={userInput.password} onChange={(e) =>handleChangeFields(e.target.value, "password")}/>
        <button onClick={handleLogin}>Login</button>
    </div>
}

export default Profile