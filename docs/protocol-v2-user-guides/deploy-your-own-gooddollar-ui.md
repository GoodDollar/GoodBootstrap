---
description: This is a step-by-step guide to deploy your own Gooddollar User Interface
---

# Deploy your own Gooddollar UI

#### This will be done by a few simple steps based on the open-source repository you can find [here](https://github.com/GoodDollar/GoodProtocolUI).

This tutorial will show you how to deploy it using Netlify, but you can use Vercel, Heroku, or other services.

1. Go to the [GoodProtocolUI repository on Github](https://github.com/GoodDollar/GoodProtocolUI) and fork it to your Github account.
2. Clone it locally and install the dependencies by running the command 'yarn' on your terminal.
3. Run the 'yarn start' command in your terminal in order to run it locally on your machine.
4. Make any changes relevant for you and push them to your repository on Github.
5. Go to [Netlify](https://www.netlify.com) and log in using your Github account.
6. Go to your [Netlify app](https://app.netlify.com) and click on "New site from Git": ![](<../.gitbook/assets/Netlify1-newSiteFromGit (2).png>)
7. Select Github:                                                                       ![](../.gitbook/assets/Netlify2-selectGithub.png)
8. Choose the \<your\_github\_username>/GoodProtocolUI
9. Click on Show advanced button:                                       ![](../.gitbook/assets/Netlify3-showAdvanced.png)
10. Add a new variable with this key-value pair:                           ![](<../.gitbook/assets/Netlify4-addNewVar (1).png>)
11. Deploy your site:                                                                ![](../.gitbook/assets/Netlify5-deploySite.png) &#x20;
12. It will take a few minutes, you could see the progress here: ![](../.gitbook/assets/Netlify6-deployInProgress.png)
13. After it's finished your site is basically on air and is accessible through the address shown at the top of the page, you could connect your own domain by clicking here: ![](../.gitbook/assets/Netlify7-setUpcustomDomain.png)&#x20;
14. Every change you will make and push to your 'master' branch on your forked repo will automatically be deployed to your website.