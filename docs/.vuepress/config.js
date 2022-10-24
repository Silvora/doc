module.exports = {
    title: '757909.xyz',
    description: '757909.xyz站点说明',
    serviceWorker: true,
    themeConfig: {
        // logo: '/assets/img/logo.png',
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。

            '/': {
                lang: 'zh-CN',
                title: 'VuePress',
                description: 'Vue 驱动的静态网站生成器',
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: '首页', link: '/' },
                    { text: '关于', link: '/about/' },
                    {
                        text: '语言',
                        ariaLabel: '选择语言',
                        items: [
                            { text: '中文', link: '/' },
                            { text: 'English', link: '/en/' }
                        ]
                    },
                    { text: 'GitHub', link: 'https://www.github.com/Zjs-7579', target: '_blank' },
                ],
                sidebar: 'auto',
            },
            '/en': {
                lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
                title: 'VuePress',
                description: 'Vue-powered Static Site Generator',
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
                ],
                sidebar: {
                    '/about/': [
                        "www",  /*/about/www.html */
                        "tim", /*/about/tim.html */
                        "next", /*/about/next.html */
                        "pwa"   /*/about/pwa.html */
                    ]
                }
            }
        },
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'About', link: '/about/' },
        //     {
        //         text: '语言',
        //         ariaLabel: '选择语言',
        //         items: [
        //             { text: '中文', link: '/language/zh-Ch/' },
        //             { text: 'English', link: '/language/en-US/' }
        //         ]
        //     },
        //     { text: 'GitHub', link: 'https://www.github.com/Zjs-7579' },

        // ],
        // sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text']
        // ]
    }
}