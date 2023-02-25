module.exports = {
    plugins: [
        {
            plugin: require('craco-antd'),
            options: {
                customizeTheme: {
                    '@primary-color': '#1DA57A'
                }
            }
        }
    ]
}
