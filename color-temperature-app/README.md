# 照片色温分析工具

这是一个基于React的Web应用，可以分析上传图片的色温并提供相机设置建议。

## 功能

- 拖放或点击上传照片
- 分析照片的色温（开尔文值）
- 提供视觉化的色温表示
- 根据分析结果提供相机色温设置建议
- 显示图像基本信息

## 技术栈

- React 18
- Vite
- color-temperature (用于色温计算)
- react-dropzone (用于文件上传)
- Canvas API (用于图像分析)

## 安装与运行

1. 克隆仓库
```
git clone https://github.com/yourusername/color-temperature-app.git
cd color-temperature-app
```

2. 安装依赖
```
npm install
```

3. 开发环境运行
```
npm run dev
```

4. 构建生产版本
```
npm run build
```

## 部署

该应用部署在Cloudflare Pages上，每次推送到main分支都会触发自动部署。

访问地址：[https://color-temperature-app.pages.dev](https://color-temperature-app.pages.dev)

## 工作原理

1. 用户上传图片后，应用使用Canvas API对图像进行处理
2. 计算图像的平均RGB值
3. 使用color-temperature库将RGB转换为开尔文色温值
4. 根据计算出的色温值提供相机设置建议

## 贡献指南

欢迎提交Pull Request或创建Issue!

## 许可证

MIT
