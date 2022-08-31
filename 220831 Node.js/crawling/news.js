const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto("https://news.daum.net/digital#1");

  const data = await page.evaluate(()=>{
    const newslists = document.querySelectorAll(".tit_g a ");
    const titles = Array.from(newslists).map((li) => li.textContent.trim());
    return titles;
  } )

  console.log(data);

  await browser.close();
};

main();