import React, { useCallback, useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setToken } from "../redux/actions/productActions";
const Login = () => {

    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const fetchLogin = useCallback(async () => {
        const response = await axios
            .post("https://fakestoreapi.com/auth/login", {
            body: JSON.stringify({
                username: `${userId}`,
                password: `${password}`,
            }),
            })
            .catch((error) => {
                console.log(error);
            });
        
        const token = response.data;
        dispatch(setToken(token));
    }, [dispatch, userId, password]);

    const onUserChange = (event) => {
        const {
            target: { value }
        } = event;

        setUserId(value);
    }

    const onPwChange = (event) => {
        const {
            target: { value }
        } = event;

        setPassword(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        fetchLogin();

        setPassword("");
        setUserId("");
    }


    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input type="text" value={userId} onChange={onUserChange} />
                <input type="password" value={password} onChange={onPwChange} />
                <input type="submit" value="submit" />
            </form>
            LoginPage
        </div>
    )
}

export default Login;