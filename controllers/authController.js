import bcrypt from 'bcryptjs';
import { getDB } from '../utils/db.js';
import { responseReturn } from '../utils/response.js';
import { createToken } from '../utils/tokenCreate.js';

class AuthControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const db = getDB();
      const admin = await db.collection('admin').findOne({ email });
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = createToken({ id: admin._id, role: admin.role });
          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            httpOnly: true,
          });
          responseReturn(res, 200, { token, message: "Login Success" });
        } else{
          responseReturn(res, 404, { error: "Wrong Password" });
        }
      } else {
        responseReturn(res, 404, { error: "Email Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
  // End of admin_login method

  getUser = async (req, res) => {
    // 
    const {id, role} = req;

    try {
      if(user === 'admin'){
        const db = getDB();
        const user = await db.collections('admin').findById(id);
        responseReturn(res, 200, {userInfo : user})
      }else{
        console.log("sailor info");
      }
      
    } catch (error) {
      console.log(error.message);
    }

  }
}

export default new AuthControllers();
