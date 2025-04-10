const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ["src/styles/variables.less", "src/styles/mixins.less"] //изменилась данная строчка
    }
  }
})