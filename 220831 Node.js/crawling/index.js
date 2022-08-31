const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto("https://comic.naver.com/webtoon/weekdayList?week=wed");

  const data = await page.evaluate(()=>{
    const webtoonLists = document.querySelectorAll(".img_list dt a");
    const titles = Array.from(webtoonLists).map(li => li.textContent.trim());
    return titles;
  } )

  console.log(data);

  await browser.close();
};

main();