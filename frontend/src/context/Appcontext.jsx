import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const UrlBackend = "http://localhost:4000"

    const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : false)

    const [profile, setProfile] = useState()
    const [allDoctor, setAllDoctor] = useState()

    const getProfile = async () => {
        try {
            const { data } = await axios.get(UrlBackend + '/api/user/profile', { headers: { token } })

            if (data.success) {
                await setProfile(data.user)
            }

        } catch (e) {
            toast.error(e.message)
        }
    }

    const getAllDoctor = async () => {
        try {
            const { data } = await axios.get(UrlBackend + '/api/doctor/all-doc')

            if (data.success) {
                await setAllDoctor(data.allDoc)
            }

        } catch (e) {
            toast.error(e.message)
        }
    }

    useEffect(() => {
        getAllDoctor()
    }, [])

    useEffect(() => {
        if (token) {
            getProfile()
        }
    }, [])

    const value = {
        UrlBackend,
        token, setToken,
        profile, setProfile,
        getProfile,
        allDoctor, setAllDoctor,
        getAllDoctor
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider