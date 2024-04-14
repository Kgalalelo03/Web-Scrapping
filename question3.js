const { default: puppeteer } = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://bitmaker.la/en/contact.html');
    

    const quotes = await page.evaluate(() => {
        
        const quote = document.querySelector(".col-lg-7");
    
        
        const text = quote.querySelector(".section-heading ").innerText;
        
    
        return { text, };  
      });
    
    
      console.log(quotes);

      await browser.close();
})()