const Sequelize = require("sequelize");
const sequelize = new Sequelize('nodejs','root','Wew8WRBCnolRwsaE',{
    host: 'localhost',
    dialect: 'mysql'

})

const User = sequelize.define('user', {
    user_name: Sequelize.STRING,
    user_password: Sequelize.STRING,
    user_dob: Sequelize.DATE,
    user_city: Sequelize.STRING
})

sequelize.sync().then(()=>{
    console.log('connected to db. Succeed');

    User.destroy({
            where: {
                id: 6
            }
         }).then( (rows)=>{
        if(rows==0){
            console.log('not found');
        }else{
            console.log('deleted!')
        }
    },(err)=>{} )


})
