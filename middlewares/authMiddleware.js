import { jwt } from 'jsonwebtoken';
import { AccessToken } from '../node_modules/mongoose/node_modules/mongodb/src/cmap/auth/mongodb_oidc/machine_workflow';

const authMiddleware = async(req, res, next) => {
    const {accessToken} = req.cookies;

    if(!accessToken){
        return res.status(409).json({error : "You have not registered!"})
    }else{
        try {
            const decodeToken = await jwt.verify(accessToken, process.env.SECRECT);
            req.role = decodeToken.role;
            req.id = decodeToken.id;
            next();
        } catch (error) {
            return res.status(409).json({error : "You have not registered!"})
        }
    }
}

export default authMiddleware();