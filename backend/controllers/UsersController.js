const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showUsers=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const userEmail = 'cleliamarcia@gmail.com';

    pool.query("select * from getUser(0, $1)", [userEmail])
    .then((result)=>result.rows)
     .then(
        (Users)=> {
            const vUsers = {}
           
            Users.forEach( User =>{
                     	vUsers= {
                    	userid:   User.userid,
	                	username: User.username,				        
                    }
            	
            } )

            res.json(vUsers)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addUser=(id)=>{

        const pool = new Pool(dbCredentials);
        const Users=Object.values(data);

        Users.forEach((item)=>{
            if(item.User != undefined){
                const uemail =item.useremail ;
                const uname = item.username;
                const ubirth = item.dtbirth;

                pool.query("CALL pNewUser($1, $2, $3)",[uemail,uname, ubirth])
                .then((result)=>result.rows)
                 .then(()=> showUsers(uemail))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
            }
        })

    }

    
//=============================================

    module.exports={
        showUsers,
        addUser,
    }

