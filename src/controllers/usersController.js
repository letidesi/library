import users from "../models/User.js";
import bcrypt from "bcrypt";

class UserContoller {

    static listUsers = (req, res) => {
        users.find((err, users) => {
          res.status(200).json(users);
        });
      };

    static registerUser = (req, res) => {
        let user = new users(req.body);
    
        user.save((err) => {
          if (err) {
            res.status(500).send({
              message: `${err.message} - Failed while trying to register this user! `,
            });
          } else {
            res.status(201).send(user.toJSON());
          }
        });
      };
    
      static deleteUser = (req, res) => {
        const id = req.params.id;
    
        users.findByIdAndDelete(id, (err) => {
          if (!err) {
            res.status(200).send({
              message: "The user has been successfully removed!",
            });
          } else {
            res.status(500).send({
              message: err.message,
            });
          }
        });
      };

   
}

export default UserContoller;