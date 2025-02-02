import axios from "axios";
import configs from "../configs/env";

export const Services = async (body = "", url, method = "POST") => {
    try {
        const response = await axios({
            method: method,
            url: `${configs.server.url}${url}`,
            headers: { "Content-Type": "application/json" },
            data: method !== "GET" ? body : null, 
        });

        console.log(`${configs.server.url}${url}`, response.config);
        return response.data; 
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return {
            status: false,
            message: error.response?.data?.message || error.message || "Error desconocido",
        };
    }
};
