import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Pega a URL de conexão direto das variáveis de ambiente
const connectionString = process.env.DATABASE_URL;

// Cria o pool de conexão e o adaptador
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Instancia o Prisma usando o adaptador (exigência do Prisma 7)
const prisma = globalThis.__prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === 'development') {
    globalThis.__prisma = prisma;
}

export { prisma };