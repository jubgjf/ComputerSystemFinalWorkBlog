module.exports = {
    base: '/ComputerSystemFinalWorkBlog/',
    title: 'jubgjf 的计算机系统大作业博客',
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        sidebar: [
            {
                title: '程序人生 - Hello’s P2P',
                collapsable: false,
                children: [
                    ['/', '大作业说明'],
                    ['/abstract', '摘要'],
                    ['/ch1', '第1章 概述'],
                    ['/ch2', '第2章 预处理'],
                    ['/ch3', '第3章 编译'],
                    ['/ch4', '第4章 汇编'],
                    ['/ch5', '第5章 链接'],
                    ['/ch6', '第6章 hello 进程管理'],
                    ['/ch7', '第7章 hello 存储管理'],
                    ['/ch8', '第8章 hello IO 管理'],
                    ['/conclusion.md', '结论'],
                    ['/appendix.md', '附件'],
                ]
            }
        ],
        lastUpdated: '最后更新时间'
    }
}