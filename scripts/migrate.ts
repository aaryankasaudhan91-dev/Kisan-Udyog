import { initSchema, db } from '../src/db';

console.log('Running database migrations...');

initSchema()
    .then(() => {
        console.log('Schema initialized successfully.');
        db.close();
        process.exit(0);
    })
    .catch((err) => {
        console.error('Failed to initialize schema:', err);
        db.close();
        process.exit(1);
    });
