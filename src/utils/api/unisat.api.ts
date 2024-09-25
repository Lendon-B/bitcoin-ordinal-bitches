import axios from "axios";
import dotenv from "dotenv";

// Configuration from .env file
dotenv.config();

// Getting Unisat API array from .env file
const unisat_api = process.env.OPENAPI_UNISAT_TOKEN;


// Get inscriptions from address using Unisat api

export const getInscriptions = async (address: string) => {

    const url = `https://open-api.unisat.io/v1/indexer/address/${address}/inscription-data`;

    console.log(url)

    const config = {
        headers: {
            Authorization: `Bearer ${unisat_api as string}`,
        },
    };

    let res = await axios.get(url, config);

    console.log(res)
    
    if (res.data.code === -1) throw "Invalid Address";

    let inscriptions = res.data.data;

    return inscriptions;
};