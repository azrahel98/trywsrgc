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

