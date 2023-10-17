const PORT = 1919;
const { chromium } = require('playwright');
const express = require('express');

const app = express();

const getData = async () => {
    try {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('https://www.google.com/search?q=the+maze+runner&sca_esv=573451013&sxsrf=AM9HkKk1W6uYzoHDEnGVFK0lD7cFFRLB0w%3A1697291645074&ei=fZ0qZcWBBO_k2roPo9-M8AU&ved=2ahUKEwjg3c-g9fWBAxVGMN4KHQO9BcQQyNoBKAB6BAgLEAA&uact=5&oq=maze+runner+review&gs_lp=Egxnd3Mtd2l6LXNlcnAiEm1hemUgcnVubmVyIHJldmlld0g2UABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQDiAwQYACBBiAYB&sclient=gws-wiz-serp&si=ALGXSlYq8uzV0eLyc9DEjivJtEO9hjnRmEbwd7ENCxmM7H0gTqr1niTFvMu_9l0oLNozVXAyytFEu7KrhxIXimih41mvSp__9MqfLoG1hBZ9IThDGB4CtcTk1OGVNHJwDQtiR9YJhchNY9PPJxXv9dhZF_cc3UjqQUn9wdXkBYcNE_z17QD49eB9xh09tpTCGMDlnYbFe0mFNMI0GCPgit6ZXwHM4gjrKCsLRDUUnEIEKMTiYnJ0oUH7CTo7HtysnNUfe3LYDxr8QEKinAtbeTMknWFVZZi9-vPjmg3gIfAT9oByGUabVAvND1NWTIhCCGVARv2R9LZpZZvx7GdFfZyGlluqnsRKS8IY_em8KuLrYjMEzN1sIj-I7U22_7a6QtN8uNvBZOE2Fj9FdQki__fPdvSK7eu9lOqbIF4b1tUZ2Lb20L__JbYjrBYc7PqMEL9Gmf2kxn-6_KZZkK-PVU31FKAIRrJAH1CH6bn2CSqhuQfu2IYRH_go2Nxf_f5sz_cWceESKJc7oEGzITK6BKKR7tQEnxqh11AcDFeVpVuO6GKhtndC0-X2bp00BJ0GcXCEzvaHYSTLkMnitumLjScEKZxOSVdbfBX2JpKrzuzWq0qHxTYBxmEvnpg84FJHVaua60UQ0p--GYcPhceIqOOq6W7CQptlKAFXl08xqN38uaIK5WKd7wUNlhDb5Us1JcKC7J0q1TIiSo_Puk9cqFr4yWdmz_6IlvyLwa_IUEDT2VHDRb4fM5FQdM2nyxBmjAaGT9fKSdrA2ru1hr9frEXUrjjUtr0_GzBNPHJpv4UHr6O1ITTvXUDSM9lf5-T9le12BfYn31fHmHj2ureFc0U3jv71vzPmI3TDc4nlQVCM6kv3ac9p1MIZalklDfMTS4VTCjlDS6ogP0mifBibIGRvnmJhRTo1Tq0SqikS5rRiYFB2Em3m2Ymi6FPkVWTyAmpJvNraY2HrYent-ABNpwUsUA_Fb9UmhCihZlZ3B_hMvV2DNJkaHvmbOzgMcUOlCVXUzWZKRz-mQFQpJNbx2Dmw2JsenIjTlfnNnp2MN6EQsrQJ4_3MHMtO9h-_sqSA9kE_4D8_Pddeje3mYjzbUd6PTf7QRWXVP_IatHVkecn0hQ057fLtFTHrfCiN3P_oZJ950Ww6f2wRhNdU-NVMfAVf3kh-loRJKprRZg4pCElvp-1G7qieB_IIIkKsc7ei-InJpQd4EBRRdcnoMl_GLK2Ubqf3wEqujOV2ggHL31qWjJCo_Mf_Ytm2i8_YZ0Sscy12O0ujSVbhPg1r4mPIoi40MCt6ldH00QPKGQk8ZKlnno60O85pOhIl0TyVjj9eaVov6CoFnB_xnsf5lVhZ7nP3sM4_ErX1pW29-1b1ZMgG82Ps30Sw-E6MxJFCXKjy9ud');

        await page.waitForSelector('#JTPWx > span:nth-child(3) > span');

        const reviewText = await page.evaluate(() => {
            return document.querySelector('#JTPWx > span:nth-child(3) > span').textContent;
        });

        console.log("Review: " + reviewText);

        await browser.close();
    } catch (e) {
        console.error(e);
    }
}

getData();

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
