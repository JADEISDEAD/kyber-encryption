import { kyber512 } from 'pqcrypto'; // Import pqcrypto library

export default async function handler(req, res) {
    const { message } = req.body;  // Extract message from request

    try {
        // Generate Kyber keypair
        const { publicKey, secretKey } = kyber512.keyPair();

        // Encrypt the message with the Kyber public key
        const ciphertext = kyber512.encrypt(publicKey, message);

        // Return encrypted data and public key
        res.status(200).json({
            ciphertext: ciphertext,
            publicKey: publicKey
        });
    } catch (error) {
        res.status(500).json({ error: 'Encryption failed', details: error.message });
    }
}
