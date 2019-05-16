function s(val) {
  return JSON.stringify(val)
}

module.exports = {
  siteMetadata: {
    title: 'HQ - Work centralized & eliminate tab switching.',
    description: 'HQ is the first and only web application ever that lets you find, organize and work with your documents from different apps and accounts in just one place.',
    image: '../assets/metaImage.png',
    siteUrl: `https://hq.app`,
    pricingPlans: [
      {
        planName: 'Essentials',
        pricePerYear: 'Free',
        intro: 'For individuals and small teams wanting to try HQ',
        button: "Let's go",
        details: [
          {
            title: 'Unlimited apps',
            description: 'Add all the apps you use everyday to eliminate constant tab-switching'
          },
          {
            title: 'Unlimited accounts ',
            description: 'Add as many accounts as you like and forget about switching between accounts'
          },
          {
            title: 'Unlimited documents',
            description: 'Create and add an infinite amount of documents, without any restrictions'
          }
        ]
      },
      {
        planName: 'Pro',
        pricePerYear: '8',
        pricePerMonth: `10`,
        intro: 'For professionals and larger teams who want more',
        button: 'Start free trial',
        details: [
          {
            title: 'All the FREE features',
            description: 'Unlimited apps, unlimited accounts, unlimited documents'
          },
          {
            title: 'HQ for Teams',
            description: 'Set team policies, organize a team library, share tags, centralize billing, and more'
          },
          {
            title: 'Priority support',
            description: 'Get priority over free accounts when submitting help requests'
          },
          {
            title: 'Custom Branding',
            description: 'Connect your domain to remove HQ branding & add your own'
          },
          {
            title: 'Document Insights',
            description: 'Keep track of what documents & apps are being shared, visited, opened and more'
          },
          {
            title: 'Advanced productivity',
            description: 'Enjoy rapid productivity with a faster search, filtering and preview & activity feed'
          }
        ],
        highlight: true
      },
      {
        planName: 'Enterprise',
        pricePerYear: 'Custom',
        intro: 'For larger businesses who want everything',
        button: 'Contact us',
        details: [
          {
            title: 'All the FREE and PRO features',
            description: 'unlimited apps, unlimited accounts, unlimited documents, HQ for teams, priority support, custom branding, document insights, advanced productivity'
          },
          {
            title: 'Personalized Onboarding',
            description: 'On-site seminars to improve onboarding for your teams and discover company-specific requirements'
          },
          {
            title: 'Support Level Agreement',
            description: 'Get a custom SLA, including next-business-day support on-site, a dedicated account manager or phone assistance'
          },
          {
            title: 'Enterprise-level Customization',
            description: 'Connect enterprise apps and on-premise storage. Customize parts of the HQ experience to your specifications'
          }
        ]
      }
    ],
    discoverPages: [
      {
        name: 'Find everything',
        title: 'Find, organize & work in one app',
        description: 'Want to find everything? Organize documents, articles, photos in your HQ library, a productivity walhalla that breaks down the walls between your information silo’s.'
      },
      {
        name: 'Organize quickly',
        title: 'Organize quickly',
        description: 'Want to find everything? Organize documents, articles, photos in your HQ library, a productivity walhalla that breaks down the walls between your information silo’s.'
      },
      {
        name: 'Work efficiently',
        title: 'Work efficiently',
        description: 'Want to find everything? Organize documents, articles, photos in your HQ library, a productivity walhalla that breaks down the walls between your information silo’s.'
      },
    ],
    footerBlocks: [
      {
        title: 'Product',
        items: [
          {
            name: 'Discover',
            slug: 'discover',
          },
          {
            name: 'Pricing',
            slug: 'pricing'
          },
          {
            name: 'Testimonials',
            slug: 'testimonials'
          },
          {
            name: 'Login',
            redirect: 'https://hq.app/app'
          }
        ]
      },
      {
        title: 'Community',
        items: [
          {
            name: 'About',
            slug: 'about',
            singlePage: true
          },
          {
            name: 'Pricing plans',
            slug: 'pricing-plans',
            singlePage: true
          },
          {
            name: 'Help Center',
            redirect: 'https://hq.app/help'
          }
        ]
      },
      {
        title: 'Legal',
        items: [
          {
            name: 'Privacy Policy',
            slug: 'privacy-policy',
            singlePage: true
          }
        ]
      }
    ],
    faqSections: [
      {
        sectionTitle: 'Product',
        faqs: [
          {
            title: 'How do I create an account?',
            content: s(['You can create an account by going to ', {type: 'link', url: 'https://hq.app/app/login', label: 'hq.app'}, '.'])
          },
          {
            title: 'How do I add an integration?',
            content: s('You can add an integration by going to the settings, which you can find in the right upper corner of the app. There, you can see which integrations you have already added with their corresponding email address. To add a new integration, simply press the "+" button of the integration you would like to add and follow the steps. After successfully adding your integration, you can search for your files in HQ!')
          },
          {
            title: 'How do I delete an integration?',
            content: s(['Sadly this is not possible yet. We are working on it though and will let you know as soon as this feature is available. For now, if you want to remove our permissions to your accounts, you can go to the the account provider, e.g. ', {type: 'link', url: 'https://www.dropbox.com/account/connected_apps', label: 'https://www.dropbox.com/account/connected_apps'}])
          },
          {
            title: 'Do you store files in HQ and do I have to move my files to yet another online file storage?',
            content: s('No we do not store files in HQ. HQ offers a virtual organizing system which means you do not have to move all your files, since they stay stored in the original apps and accounts.')
          },
          {
            title: 'Can I use HQ without internet connection?',
            content: s('Sadly this is not possible yet. We are working on it though and will let you know as soon as this feature is available.')
          }
        ]
      },
      {
        sectionTitle: 'Privacy',
        faqs: [
          {
            title: 'I’m concerned about my online privacy, what is your privacy policy?',
            content: s(['We understand your concern and we take extensive measures to make sure our privacy policy is in accordance to the strict rules. You can read more about this in our ', {type: 'link', url: "/privacy-policy", label: 'privacy policy'}, '.'])
          }
        ]
      }
    ],
    changelogSections: [
      {
        changelogItems: [
          {
            title: 'Changes version 0.26',
            content: s({
                type: 'list',
                items: [
                  'performance',
                  'design',
                  'drag n drop improvements'
                ]
              })
          }
        ]
      }
    ],
    testimonials: [
      {
        name: 'Mathias B.',
        smallName: 'mathias',
        title: 'Management consultant',
        description: 'HQ is a real time-saver. No more wasting time by logging in and out of apps and accounts to find the right document. With HQ I can search across apps and accounts. It’s saving me hours every week!',
        image: 'mathias_b.jpg',
        thumb: 'mathias_b_thumb.jpg',
        company: 'Top 3 Consulting Firm',
        logo: 'cc.png',
        bigLogo: 'cc2.png',
        smallerLogo: true
      },
      {
        name: 'Julie D.',
        smallName: 'julie',
        title: 'Scientist / Assistant Professor',
        description: 'At one point I had more than 10 different accounts on 4 different apps. I don’t know how I got there, but I did and it was horrible. Migrating was not a possibility for me, so you can imagine how happy I was when I discover I didn’t need to. Thank you HQ!',
        image: 'julie_d.jpg',
        thumb: 'julie_d_thumb.jpg',
        company: 'Qatar Biomedical Research Institute',
        logo: 'qbri.png',
        smallerLogo: true
      },
      {
        name: 'Niels-Jan H.',
        smallName: 'niels',
        title: 'Medical Doctor in Physical and Rehabilitation',
        description: 'Before HQ I had a hard time managing my documents. I had migrated them all to Gdrive, but co-workers and clients kept on sharing documents from other apps like Dropbox. HQ lets me work in one clean interface on top of those other apps so I don’t have to migrate anymore.',
        image: 'nils_jan_h.jpeg',
        thumb: 'nils_jan_h_thumb.jpeg',
        company: 'Antwerp University Hospital',
        logo: 'uza.png',
        smallerLogo: true
      },
      {
        name: 'Tara J.',
        smallName: 'tara',
        title: 'Business Development Manager',
        description: 'As a neat-freak, I was wasting way to much time organizing and aligning my different libraries. I really disliked not being able to file Microsoft document and Google documents together. Thank god for HQ! :-)',
        image: 'tara_j.jpg',
        thumb: 'tara_j_thumb.jpg',
        company: 'Top 10 Aviation Firm',
        logo: 'aviation.png'
      },
      {
        name: 'Laurens D.',
        smallName: 'laurens',
        title: 'MBA Candidate',
        description: 'There are apps that let your edit and share documents, apps that have a cross-app search function, apps that provide a clean organization or overview etc. But then there is the app that does it all: HQ. Doing everything in one app has truly been a game-changer for me!',
        image: 'laurens_d.jpeg',
        thumb: 'laurens_d_thumb.jpeg',
        company: 'Harvard Business School',
        logo: 'hbs.png'
      },
      {
        name: 'Anne-Catherine G.',
        smallName: 'anne',
        title: 'Art Director and Content Creator',
        description: 'I love the clean and easy-to-use design of HQ. After watching the videos on the website and the tutorial on the app, I immediately got started . It’s such a relief to finally be able to declutter and sort out my worklife. My 2019 resolution: keep it organized all the time, with HQ :-)',
        image: 'anne_catherine_g.jpg',
        thumb: 'anne_catherine_g_thumb.jpg',
        company: 'CLOCLO',
        logo: 'cloclo.png',
        smallerLogo: true
      },
      {
        name: 'Wout H.',
        smallName: 'wout',
        title: 'Investigator / Professor',
        description: 'Almost all of my Gdrive folders are shared with co-workers or clients. I often didn’t like the file structure and the locations or names of documents, but couldn’t change any of it without affecting my collaborators. With HQ I can organize my way without affecting anyone and it’s making my life much easier!',
        image: 'wout_h.jpeg',
        thumb: 'wout_h_thumb.jpeg',
        company: 'Sidra Medicine',
        logo: 'sidra.png'
      },
      {
        name: 'Maité Y.',
        smallName: 'maite',
        title: 'Junior Consultant',
        description: 'I never imagined myself working with 3 computer screens, but I need so many different apps that I had a million tabs open at the same time. There was no other way, or so I thought. HQ helped me regain a clean overview on just one screen ;-)',
        image: 'maite_y.jpeg',
        thumb: 'maite_y_thumb.jpeg',
        company: 'Top 10 Consulting Firm',
        logo: 'scg.png',
        bigLogo: 'scg2.png',
        smallerLogo: true
      }
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HQ',
        short_name: 'HQ',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/assets/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5HV6DWB",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        SymLinksIfOwnerMatch: true,
        custom: `
         <IfModule mod_expires.c>
          ExpiresActive On
        
          # Images
          ExpiresByType image/jpeg "access plus 1 year"
          ExpiresByType image/gif "access plus 1 year"
          ExpiresByType image/png "access plus 1 year"
          ExpiresByType image/webp "access plus 1 year"
          ExpiresByType image/svg+xml "access plus 1 year"
          ExpiresByType image/x-icon "access plus 1 year"
        
          # Video
          ExpiresByType video/mp4 "access plus 1 year"
          ExpiresByType video/mpeg "access plus 1 year"
        
          # CSS, JavaScript
          ExpiresByType text/css "access plus 1 month"
          ExpiresByType text/javascript "access plus 1 month"
          ExpiresByType application/javascript "access plus 1 month"
        
          # Others
          ExpiresByType application/pdf "access plus 1 month"
          ExpiresByType application/x-shockwave-flash "access plus 1 month"
        </IfModule>
        `,
      }
    },

    // 'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}
