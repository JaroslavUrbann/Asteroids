import axios from "axios";

export const SEARCH = 'SEARCH';

const API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
const API_KEY = "ACtmpsj8z7chSfHEKMFmoL4Bar2TV3sZIOXImy2l";

export const fetchSearch = (date1, date2) => {
    const request = axios.get(API_URL, {
        params: {
            start_date: date1,
            end_date: date2,
            api_key: API_KEY
        }
    });
    return {
        type: SEARCH,
        payload: request
    };
};