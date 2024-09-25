import axios from "axios";
import dotenv from "dotenv";
import { OPENAPI_UNISAT_TOKEN } from '../../config/api'

// Configuration from .env file
dotenv.config();

// Getting Unisat API array from .env file


// Get inscriptions from address using Unisat api

export const getInscriptions = async (address: string) => {
    try {

        const url = `https://open-api.unisat.io/v1/indexer/address/${address}/inscription-data`;

        const config = {
            headers: {
                Authorization: `Bearer ${OPENAPI_UNISAT_TOKEN}`,
            },
        };

        if (address == "" || address == undefined) {
        } else {
            let res = await axios.get(url, config);

            if (res.data.code === -1) return [];

            return res.data.data.inscription;
        }
    } catch (e) {
        console.log(e);
    }
};
