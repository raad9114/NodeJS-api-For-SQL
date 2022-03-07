'use strict raad api';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
//app.use(express.json());

const getpersons = async () => {
    try {
        let pool = await sql.connect(config.sql);
        //const sqlQueries = await utils.loadSqlQueries('persons');
        const alldata = await pool.request()
                         //.execute('[dbo].[selectall]');
                         .query("select distinct xname,xposition from pdmst");
        return alldata.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
const getById = async(xposition) => {

    try {
        let pool = await sql.connect(config.sql);
        //const sqlQueries = await utils.loadSqlQueries('persons');
        const byId = await pool.request()
                                .input('xposition',sql.VarChar(50), xposition)
                                .execute('makeaselectall');
                                //.query("select * from pdmst where xposition = @xposition");

        return byId.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const creatperson = async (personData) => {
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('persons');
        const insertperson = await pool.request()
                            .input('zid', sql.Int, personData.zid)
                            .input('user', sql.VarChar(50), personData.user)
                            .input('staff', sql.VarChar(50), personData.staff) 
                            .input('yearperdate', sql.Int, personData.yearperdate) 
                            .input('year', sql.Int, personData.year)  
                            .input('typeleave', sql.VarChar(50), personData.typeleave) 
                            .execute('zabsp_leaveapply');                         

        return insertperson.recordset;
    } catch (error) {
        return error.message;
    }
}


// const creatperson = async (personData) => {
//     try {
//         let pool = await sql.connect(config.sql);
//        // const sqlQueries = await utils.loadSqlQueries('persons');
//         const insertperson = await pool.request()
//                             .input('xname', sql.VarChar(50), personData.xname)
//                             .input('xposition', sql.VarChar(50), personData.xposition)
//                             .input('xstaff', sql.VarChar(50), personData.xstaff)  
//                             .execute('selectall');                         
//                            // .query("insert into pdmst(ztime,zutime,zauserid,zuuserid,zid,xstaff,xposition,xname) values ('2017-04-02 11:10:23.893','2017-05-02 17:38:25.020','raad','300',100000,@xstaff,@xposition,@xname)");                            
//         return insertperson.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }
const UpdatePerson = async (data, xposition) => {
    try {
        let pool = await sql.connect(config.sql);
       // const sqlQueries = await utils.loadSqlQueries('persons');
        const insertperson = await pool.request()
                            .input('ztime', sql.VarChar(50), data.ztime)
                            .input('zutime', sql.VarChar(50), data.zutime)
                            .input('zauserid', sql.VarChar(50), data.zauserid)
                            .input('zuuserid', sql.VarChar(50), data.zuuserid)
                            .input('zid', sql.VarChar(50), data.zid)
                            .input('xstaff', sql.VarChar(50), data.xstaff)
                            .input('xname', sql.VarChar(50), data.xname)                            
                            .input('xposition', sql.VarChar(50), xposition)                            
                            .query("update pdmst set ztime=@ztime,zutime=@zutime,zauserid=@zauserid,zuuserid=@zuuserid,zid=@zid,xstaff=@xstaff,xname=@xname where xposition=@xposition") ;
    } catch (error) {
        return error.message;
    }
}

const deleteperson = async (xposition) => {
    try {
        let pool = await sql.connect(config.sql);
        //const sqlQueries = await utils.loadSqlQueries('persons');
        const deleteperson = await pool.request()
                            .input('xposition', sql.VarChar(50), xposition)
                            .query("delete from pdmst where xposition=@xposition");
        return deleteperson.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getpersons,
    getById,
    creatperson,
    UpdatePerson,
    deleteperson

}