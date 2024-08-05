import adminModel from '../Models/adminModel.js';
import { responseReturn } from '../utiles/response.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../utiles/tokenCreate.js';


class AuthControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await adminModel.findOne({ email }).select('+password');
            //console.log(admin);
            if (admin) {
                const match = await  bcrypt.compare(password, admin.password);// returns true if entered value matchs to the databse value
                //console.log(match);
                if (match) {
                    const token = await createToken({
                        id : admin.id,
                        role : admin.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now() + 7*24*60*60*1000 )
                    })
                    responseReturn(res, 200, {token, message: "Login Success"})
                } else {
                    responseReturn(res, 404, { error: "Wrong Password"});
                }
            } else {
                responseReturn(res, 404, { error: "Email Not Found"});
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
        //console.log(req.body);
    }
}

export default new AuthControllers();
