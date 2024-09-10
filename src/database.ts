import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://leonardo4na_user:pySmSpk5wlex3ucqmRf2H79UrpZdtya6@dpg-cr7qs3btq21c73aio9ug-a.oregon-postgres.render.com/leonardo4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;