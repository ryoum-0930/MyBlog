// .vuepress/config.js

module.exports = {
  // Title of your website
  title: '愚者の歩み',

  // Description of your website
  description: 'This is ryouma\'s blog',

  // Language of your website
  locales: {
    '/': {
      lang: 'ja',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'en-US',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'Ryoma',

      // Introduction of yourself
      description: 'Ryoma\'s tech blog and memo',

      // Email
      email: 'grnd.ryouma@gmail.com',

      // Your location
      location: 'Yamaguchi',

      // Your organization
      organization: 'National Institute of Technology, Oshima College',

      // Your avatar image
      // Set to external link
      // avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'ryouma',
          link: 'https://github.com/ryoum-0930',
        },

        // Facebook account and link
        facebook: {
          account: '龍真',
          link: 'https://www.facebook.com/profile.php?id=100005973346702',
        },

        // LinkedIn account and link

        // Twitter account and link
        twitter: {
          account: 'Rym_gdm',
          link: 'https://twitter.com/Rym_gdm',
        },

        // Sina Weibo account and link

        // Zhihu account and link

        // Douban account and link

        // Reddit account and link

        // Medium account and link

        // Instagram account and link

        // GitLab account and link

        // Bitbucket account and link

        // Docker Hub account and link
      },
    },

    // Header Config
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        // url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/_posts/', exact: false },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'meteprlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
