import sqlite3 from 'sqlite3';
import path from 'path';

// Use a local sqlite file in the root
export const db = new sqlite3.Database(path.join(process.cwd(), 'database.sqlite'));

export const initSchema = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(\`
                CREATE TABLE IF NOT EXISTS farmers (
                    phone_number TEXT PRIMARY KEY,
                    pin_code TEXT NOT NULL,
                    lat REAL,
                    lon REAL,
                    language TEXT DEFAULT 'hi'
                )
            \`, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
};

export const getFarmers = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        db.all(\`SELECT * FROM farmers\`, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};
