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


    //User.findAll({}).then( (rows)=>{},()=>{} ) // bu yapida kullanilabilir, burada birinci fonksyion resolve(onfulfilled) ikincisi reject(onreject) icindir
    //User.findAll({}).then().catch(); // bu yapi da kullanilabilir

    User.findOne({
        raw: true,
        where: {
            user_city: 'Istanbul'
        }
    }).then( newUser=>{
        console.log(newUser)
        console.log('Veriler geldi!')
    },(err)=>{} )


})
