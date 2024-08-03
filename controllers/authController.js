import adminModel from '../Models/adminModel.js';

class AuthControllers {
    admin_login = async (req, res) => {
        const {email, password} = req.body
        try{
            const admin = await adminModel.findOne({email}).select('+password');
            console.log(admin);

        }
        catch(error){
            
        }
        //console.log(req.body);
    }
}

export default new AuthControllers();