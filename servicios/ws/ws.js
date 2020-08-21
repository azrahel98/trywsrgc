import puppeteer from 'puppeteer'

// const puppeteer = require('puppeteer')
// const { default: Axios } = require('axios');



const username = '#username'
const pass = '#password'

async function getwes(user,password){
    
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://admin.rankedgaming.com/accounts/game-logs.php')

    await page.click(username)
    await page.keyboard.type(user)
    await page.click(pass)
    await page.keyboard.type(password)
    await page.keyboard.press('Enter')
    await page.waitForNavigation();
    await page.setRequestInterception(true);
    const datos = await page.cookies()
    await browser.close()
    return await datos
}

export default getwes
// async function getData(){


//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('https://admin.rankedgaming.com/accounts/game-logs.php')

//     await page.click(username)
//     await page.keyboard.type('*alahi')
//     await page.click(pass)
//     await page.keyboard.type('pleyades')
//     await page.keyboard.press('Enter')
//     await page.waitForNavigation();
//     await page.setRequestInterception(true);
//     const datos = await page.cookies()
//     console.log(datos)
//     await browser.close()
// }
// getData()

// var data =async  () => {
//      var url = 'https://admin.rankedgaming.com/accounts/game-logs.php'
//      var headere = {
//         'Content-Type':'application/x-www-form-urlencoded',
//         'Cookie':'shop_login=eyJpdiI6Ikh1TE01RlppUUlSQjl2TlBPRXczd2c9PSIsInZhbHVlIjoiU2FLWFZEenh5ZkZWS1ZmczhQWHVxdz09IiwibWFjIjoiNjAzNTc2M2QwZGVjNGRkNjczOTg5OWU4ZTQ2ZDBjMjg0Nzg4NzUzMmMwOWExZGVmOWFlNzA0ZjczODBhMWQ0ZCJ9;shop_session=eyJpdiI6InJoMGF2QjY1dkw5V2lnSy9EdkhwSVE9PSIsInZhbHVlIjoic0w3Um1uZ3YyS054aE9YS1VodGRYaGxIdkpUTjY1UFpuSmFyakdVWTBQTjBoRGgvVFVqMTJwR0tsTW1DWjNpOSIsIm1hYyI6IjE0NzYwNWQwNTA4OTNlMGI2MzA5NjRhODc5N2IwZTdhNzA0ZmM0M2VhZGJkMmFmZmFjMzBjMDBjZjdiOGI1NzEifQ%3D%3D;XSRF-TOKEN=eyJpdiI6IjhzTm5oR2g1N0NMakpibWJ2eWI0VXc9PSIsInZhbHVlIjoiSnpMbW1WdXUyNmVpQVF5RCtJZ0lNcFZUeUpibTI1Rzk1NGNEQUYyRTlJVzAvUWgxNEhCZytFcGlZUk9UeU03ZSIsIm1hYyI6IjU0MjY4NWQyYjk1MDc3MWVmNzIyMmE0NjllMGFkNDAyMWYyYjJlZGIwM2I3MDY4MzY0YTcwYzI5YjIyYWIxMjAifQ%3D%3D;rem=0;key=0e5d782ad7d0cdaff4eab4284f9b6370;PHPSESSID=b5e9100983f2292320bb750db753afc2;uid=244196428;__cfduid=d919f599d2c43e957cf8eaafccbf3a4da1597996406;'
//      }
//      var jsd = {user:'*alahi',pass:'pleyades'}


//     const dato =await Axios({url:url,data:jsd,headers: headere,method:'POST'})

//     console.log(dato.data)
    
// }
// //data()

