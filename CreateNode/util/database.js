const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Chintu5050@',{
  dialect:'mysql',
  host:'localhost'});

  module.exports=sequelize;