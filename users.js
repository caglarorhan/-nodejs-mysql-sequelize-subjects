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

// inside sync method if {force: true} object given as an argument then Table Creation is forced. This means it create a table even if it is exist!
sequelize.sync().then(()=>{
    console.log('connected to db. Succeed');

    User.create({
        user_name: 'Veli Kanik',
        user_password: '654654',
        user_dob: new Date(),
        user_city: 'Tokyo'

    }).then( newUser=>{
        console.log(newUser.toJSON())
        console.log('Veriler geldi!')
    } )
})
