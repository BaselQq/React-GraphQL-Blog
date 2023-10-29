import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://127.0.0.1:8000/api/login", {email, password});
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.log("Error during Login:", error);
        }
    }

    return (
        <Form onSubmit={handleSignIn}>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <Button type="submit">Login</Button>
        </Form>
    );

}

export default Login;