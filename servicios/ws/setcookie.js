import getws from './ws'
import Axios from 'axios'
require('dotenv').config()


async function cookie(){
    var data = await getws(process.env.USER,process.env.PASSWORD)
    var cookie = `${data[0].name}=${data[0].value};${data[1].name}=${data[1].value};${data[2].name}=${data[2].value};${data[3].name}=${data[3].value};${data[4].name}=${data[4].value};${data[5].name}=${data[5].value};${data[6].name}=${data[6].value};${data[7].name}=${data[7].value};   `
    return cookie
}

var parse = async () => { 
    var url = 'https://admin.rankedgaming.com/accounts/game-logs.php'
    var cabecera = {
        'Content-Type':'application/x-www-form-urlencoded',
        'Cookie':await cookie(),
    }
    var jsd = {user:process.env.USER,pass:process.env.PASSWORD}

    var response = await  Axios({
        url:url,
        headers:cabecera,
        data:jsd,
        method:'POST'
    })
    console.log(response.data)
}

export default parse