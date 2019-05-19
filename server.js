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
// createdAt and updatedAt fields are automatically added


const Car = sequelize.define('car', {
    car_model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    car_price:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len:[1,999999]
        }
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: "Tesla X"
    },
    plate: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isAlphanumeric: true
        }
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: true
    }
})
// createdAt and updatedAt fields are automatically added



// inside sync method if {force: true} object given as an argument then Table Creation is forced. This means it create a table even if it is exist!
sequelize.sync().then(()=>{
    console.log('connected to db. Succeed');

    Car.create({
        car_model: "Renault",
        car_price: 20000,
        year: 2019,
        plate:"TOROS2000",
        isActive: false

    }).then( newCar=>{
        console.log(newCar.toJSON())
    } )
})
