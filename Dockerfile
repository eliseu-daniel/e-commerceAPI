FROM postgres:latest

# Copia scripts de inicialização, se necessário
COPY ./init.sql /docker-entrypoint-initdb.d/

# Define variáveis de ambiente padrão
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}

# Expõe a porta padrão do PostgreSQL
EXPOSE 5432