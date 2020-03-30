---
title: "How to set up an emergency website"
date: 2020-03-20T18:00
---

To publish a website with this template, there are two options, depending on your technical skillset. Choose which one describes you best:

* [I'm not a developer](#no-code-setup), I just want to set up a website
* [I have basic knowledge](#advanced-setup) of how to use `npm` and the command line 

## No-Code Setup

You don't need any programming skills to set up a site with this template. 
Following these steps, you can get started without touching any code:

1. [Get a GitHub account](#get-a-github-account) (skip if you have one)
2. [Get a Netlify account](#get-a-netlify-account) (skip if you have one)
3. [Deploy this template](#deploy-this-template)
4. [Configure your site](#configure-your-site)
5. [Set a domain](#set-a-domain)
6. [Enable CMS](#enable-the-content-management-system)

### Get a Github account

Github is a platform that hosts code. It's required for this template to work.
If you have a GitHub account, go ahead and [log in](https://github.com/join). If not, [sign up for an account](https://github.com/join). You will only need an active email address. When prompted, select the "Individual" (free) plan. You can skip the questions about your use of Github and then verify your email address in the last step.

### Get a Netlify account

Netlify is a free service that will provide the servers for your new website.
If you already have a Netlify account, go ahead and [log in](https://app.netlify.com). If not, [sign up for an account](https://app.netlify.com/signup). (Recommended to sign in with your GitHub account)

### Deploy this template

Once these two accounts are set up, go ahead an click the following button to deploy a copy of this template to your Netlify account:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/emergency-site)

It will open a window with instructions:

![connect to Github](/static/images/uploads/netlify-deploy-step1.png)

Click the button "Connect to Github". (You should already be logged in, but if you're not, log in).

### Configure your site

Next, you need to provide a few settings to customize your website. Fill in the fields with your details.

![set configuration details](/static/images/uploads/netlify-deploy-step2.png)

You can also edit these details later in your Netlify admin.
These settings are available:

<table>
    <thead>
        <tr><th>Name</th><th>Description</th><th>Example</th><th>Default</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><code>META_TITLE</code></td>
            <td>the title of your site</td>
            <td>COVID-19 Information</td>
            <td>Emergency Site</td>
        </tr>
        <tr>
            <td><code>META_URL</code></td>
            <td>the full url of your site</td>
            <td>https://www.covid19.org</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td><code>META_DESC</code></td>
            <td>a short description of your site</td>
            <td>Updates on the current state of the pandemic.</td>
            <td>An emergency information website.</td>
        </tr>
        <tr>
            <td><code>META_LANG</code></td>
            <td>the 2-letter <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">language code</a> of your site</td>
            <td>de</td>
            <td>en</td>
        </tr>
        <tr>
            <td><code>META_COLOR</code></td>
            <td>the primary color <a href="https://www.color-hex.com/">hex code</a> (optional)</td>
            <td>#1D70B8</td>
            <td>#DB0000</td>
        </tr>
        <tr>
            <td><code>META_EMAIL</code></td>
            <td>your main contact email (optional)</td>
            <td>contact@covid19.org</td>
            <td>N/A</td>
        </tr> 
        <tr>
            <td><code>META_TELEPHONE</code></td>
            <td>your main contact phone number (optional)</td>
            <td>+01 23 456 789 00</td>
            <td>N/A</td>
        </tr> 
    </tbody>   
</table>

When you're done, click "Save & Deploy". It will take about 1-2 minutes afterwards to build your site. You'll see the message "Site deploy in progress".

When the site is published, you'll see a live green link under the site title.

### Set a domain

You can set a custom domain (like "www.yoursite.com") in your Netlify site settings. From your site's main admin page, select Domain Settings:

![domain settings](/static/images/uploads/netlify-deploy-step3.png)

By default you'll get a domain like `yoursite.netlify.com` - to connect a custom one you own, click on "add custom domain":

![add custom domain](/static/images/uploads/netlify-deploy-step4.png)

For more information on how to do this, [see the Netlify docs](https://docs.netlify.com/domains-https/custom-domains/).

### Enable the Content Management System

The last step is to configure the built-in CMS, so you can edit the site's content through a dedicated interface.

The first thing to enable is the Netlify "Identity" service. This allows users to log in with an email address and password. In your main dashboard, select "Identity", then click on "Enable Identity".

![enable identity](/static/images/uploads/netlify-deploy-step5.png)

The CMS needs a way to connect to your Github account. To do this, go to Settings > Identity > Services. You'll see an option to enable "Git Gateway". Click the button and follow the instructions from there.

![enable git gateway](/static/images/uploads/netlify-deploy-step6.png)

After you're set up, create a new user by inviting yourself via email. You can then log in at `www.your-site.com/admin`.

For more information on Netlify CMS, [see the docs](https://www.netlifycms.org/docs/intro/).

--------

## Advanced Setup

If you feel comfortable setting up a local development environment, you can customize this template even further. Things you need to know:

* Installing `Node` and `npm` packages on a local machine
* Running basic commands on the command line
* Writing content in markdown files
* Basic understanding of static site generators like [Eleventy](https://11ty.dev) (optional) 

### Getting Started

Clone the repository to your machine and start a new git history:

```bash
$ git clone https://github.com/maxboeck/emergency-site.git
$ cd emergency-site
$ rm -rf .git
$ git init
```

The build process requires [Node](https://nodejs.org/en/) v10 or higher on your system. 
To install the dependencies, run `npm install` in the root directory, where the `package.json` file is located. The project is now ready for development.

### Local Development

You can run these on the command line in the root of your project:

* `npm start`: starts development server
* `npm run build`: generates a production build
* `npm run debug`: runs eleventy with debug output

To customize the site, edit `src/data/meta.js` with your details, or set the corresponding [environment variables](#configure-your-site) in a new `.env` file in the root folder of the project.

### Deployment

The easiest way to deploy is by forking [this repository](https://github.com/maxboeck/emergency-site) and deploying it to Netlify. You can do that by clicking this button:  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/emergency-site) 

If you don't want to use Netlify, you can also host the site on your own server or on cloud infrastructure like an S3 Bucket. In that case, set up your own process to host the generated output folder `dist` at your domain.