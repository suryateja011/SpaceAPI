export default {
  "title": "SpaceAPI",
  "tagline": "\"You must be the sun because you’re the center of my universe!\"",
  "url": "https://spaceapi.tech/",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "suryateja011",
  "projectName": "SpaceAPI",
  "themeConfig": {
    "announcementBar": {
      "id": "support_us",
      "content": "⭐️Let's Get Wild, How About You <span style='text-decoration:line-through;'>Buy</span>  Get Me A <span style='text-decoration:line-through;'>Drink </span> <a href='https://github.com/suryateja011/SpaceAPI' target='__blank'> Star</a>⭐️ ",
      "backgroundColor": "#D3D3D3",
      "textColor": "#1c1e21",
      "isCloseable": true
    },
    "navbar": {
      "title": "SpaceAPI",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/suryateja011/SpaceAPI",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs"
            },
            {
              "label": "Quote",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Instagram",
              "href": "https://instagram.com/SpaceAPI"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/suryateja011/SpaceAPI"
            }
          ]
        }
      ],
      "copyright": "Handcrafted with ❤ by <a href='https://github.com/suryateja011' target='__blank'> Me</a>😎 "
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "D:\\SpaceAPI\\sidebars.js",
          "editUrl": "https://github.com/suryateja011/SpaceAPI"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/suryateja011/SpaceAPI"
        },
        "theme": {
          "customCss": "D:\\SpaceAPI\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};