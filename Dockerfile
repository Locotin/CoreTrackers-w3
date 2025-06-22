FROM node:20-slim

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto para desarrollo
EXPOSE 3000

# Comando para iniciar el servidor de desarrollo
CMD ["pnpm", "dev"] 