import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// Twilio sends application/x-www-form-urlencoded by default
app.use(bodyParser.urlencoded({ extended: false }));
// We also support JSON for testing flexibility
app.use(express.json());

// Webhook endpoint for Twilio
app.post('/webhook/twilio', (req: Request, res: Response) => {
    console.log('Received Twilio Webhook Payload:', req.body);
    
    // Acknowledge receipt immediately within 2 seconds to prevent Twilio retry timeout
    // Respond with empty TwiML
    res.set('Content-Type', 'text/xml');
    res.status(200).send('<Response></Response>');

    // TODO: Hand off payload to the background job queue (INTF-02)
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Krishi Udyog server listening on port ${port}`);
    });
}

export default app;
