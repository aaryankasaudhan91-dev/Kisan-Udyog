const sqlite3 = require('sqlite3');
const path = require('path');

const db = new sqlite3.Database(path.join(process.cwd(), 'database.sqlite'));

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS farmers (
            phone_number TEXT PRIMARY KEY,
            pin_code TEXT NOT NULL,
            lat REAL,
            lon REAL,
            language TEXT DEFAULT 'hi'
        )
    `, (err) => {
        if (err) {
            console.error('Failed to initialize schema:', err);
            process.exit(1);
        } else {
            console.log('Schema initialized successfully.');
            process.exit(0);
        }
    });
});
