import axios from "axios";
export const fetchData = async () => {
    const res = await axios.get("https://localhost:5500/api/task")
}