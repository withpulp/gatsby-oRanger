<img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
![logo](static/logos/logo-1024.png)

# Gatsby oRanger

A static site starter with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/). Built on [Gatsby-Advanced-Starter](https://github.com/Vagr9K/gatsby-advanced-starter)

## Why?

This project aims to provide a minimal for building GatsbyJS powered static sites.

It doesn't define any UI limitations in any way, and only gives you the basic components for SEO/Social Media/etc.

You are free to use any UI framework/styling options available to you.

NOTE: This project is a stripped down version of [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter), but will evolve separately.

## How can I use this?

If you are a newcomer to Gatsby who's interested in the implementations of most needed features, this is a great place to start.

If you are interested in a foundation for building ultra-fast websites, you can use this project as a "minimal" starter.

[Demo website.](https://withpulp.github.io/gatsby-oRanger/)

## Features

* Blazing fast loading times thanks to prerendered HTML and automatic chunk loading of JS files
* Separate components for everything
* High configurability:
  * User information
  * User social profiles
  * Copyright information
  * More!
* Author segment
  * Name
  * Location
  * Description
  * Links
  * Follow Me button
* Posts in Markdown
  * Code syntax highlighting
  * Embded YouTube videos
  * Embded Tweets
* Tags
  * Seprate page for posts under each tag
* Categories
  * Separate page for posts under each category
* Disqus support
  * Notifictions about new disqus comments
* Google Analytics support
* NPM scripts for GitHub Pages deployment
* Social features
  * Twitter tweet button
  * Facebook share/share count
  * Reddit share/share count
  * Google+ share button
  * LinkedIn share button
  * Telegram share button
* SEO
  * Sitemap generation
  * robots.txt
  * General description tags
  * Schema.org JSONLD (Google Rich Snippets)
  * OpenGraph Tags (Facebook/Google+/Pinterest)
  * Twitter Tags (Twitter Cards)
* RSS feeds
* Loading progress for slow networks
* Offline support
* Web App Manifest support

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/withpulp/gatsby-oRanger
npm run serve
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/withpulp/gatsby-oRanger YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn
npm run serve
```

## Configuration

 Edit the export object in `data/SiteConfig`:

 ```js
module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  siteTitle: 'oRanger', // Site title.
  siteTitleAlt: 'GatsbyJS oRanger', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://withpulp.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '/gatsby-oRanger', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'With Pulp', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'New York, New York', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/withpulp/gatsby-oRanger',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/_withpulp',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:damir@withpulp.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2017. With Pulp', // Copyright string for the footer of the website and RSS feed.

};
 ```

 You can also optionally set `pathPrefix`:
 ```js
 module.exports = {
  // Note: it must *not* have a trailing slash.
       pathPrefix: '/gatsby-oRanger', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
}

 ```

 WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
