import jwt from 'jsonwebtoken';

export const createToken = async (data) => {
    try {
        const token = await jwt.sign(data, process.env.SECRET, {
            expiresIn: '7d'
        });
        return token;
    } catch (error) {
        throw new Error('Token creation failed');
    }
};

