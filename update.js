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


sequelize.sync().then(()=> {
    console.log('connected to db. Succeed');

    //---------------------------------------------START
    User.findOne({
        where: {
            user_city:"London"
        }
    }).then(foundUser => {
        if(foundUser){
            console.log(foundUser.toJSON());
            foundUser.update({
                user_city:"Adana"
            }).then(res=>{
                console.log(" guncellendi");
                console.log(res.toJSON())
            })
        }else{
            console.log("Guncellenecek kayit bulunamadi")
        }
    })


    //----------------------------------------------END


})



