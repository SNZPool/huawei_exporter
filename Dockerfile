# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 到工作目录中
COPY package*.json ./

# 安装依赖
RUN npm install

# 如果你使用 TypeScript，请确保在全局安装 TypeScript
RUN npm install -g typescript

# 复制项目的所有文件到容器中
COPY . .

# 编译 TypeScript 代码为 JavaScript
RUN npm run build

# 暴露应用运行的端口（例如，3000 端口）
EXPOSE 3000

# 启动应用
CMD [ "npm", "start" ]
