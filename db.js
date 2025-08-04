// Importação dos parâmetros necessários e link com o banco de dados
import 'dotenv/config' //Abre o aquivo .env, lê as variáveis de ambiente e as salva numa variável global do node chamada process.env
import postgres from "postgres";

const { DATABASE_URL } = process.env;
const URL = DATABASE_URL

export const sql = postgres(URL)