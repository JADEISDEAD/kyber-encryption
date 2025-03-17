import { kyber512 } from 'pqcrypto'; // Import pqcrypto library

export default async function handler(req, res) {
    const { ciphertext, secretKey } = req.body;

    try {
        // Decrypt the ciphertext using the Kyber secret key
        const decryptedMessage = kyber512.decrypt(secretKey, ciphertext);

        // Return decrypted message
        res.status(200).json({
            message: decryptedMessage
        });
    } catch (error) {
        res.status(500).json({ error: 'Decryption failed', details: error.message });
    }
}

