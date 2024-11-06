import axios from "axios";


async function getInfo() {
    try {
        const forum = await axios({
            url: "https://apifoxmock.com/m1/5389052-5062222-default/forum",
            method: "get",
            params: {
                apifoxToken: "BMiSmsysqbSP0gpc9ki6N"
            }
        })
        return forum
    } catch (error) {
        console.log("错误是", error)
    }
}


export default getInfo
