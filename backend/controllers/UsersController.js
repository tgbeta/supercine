const {dbCredentials}=require("../database/dbconfig")
const {Pool}=require("pg");

const  showUsers=(req,res)=>{
    const pool = new Pool(dbCredentials);
    const userEmail = req.body.userEmail;   

    pool.query("select * from getUser(0, $1)", [userEmail])
    .then((result)=>result.rows)
     .then(
        (Users)=> {
            let vUsers = {}
           
            Users.forEach( User =>{
                     	vUsers= {
                    	userid:    User.userid,
	                	username:  User.username,
                        useremail: User.useremail, 
                        userage:   User.userage,				        
                    }
                 } )

            res.json(vUsers)
    }
    
    )
    .catch((err)=>console.log(err))
    .finally(()=>pool.end);
   }


//=============================================

   const  addUser=(req,res)=>{

        const pool = new Pool(dbCredentials);
        const userEmail = req.body.userEmail;   
        const userName = req.body.userName;   

        pool.query("CALL pNewUser($1, $2)",[userEmail, userName])
                .then((result)=>result.rows)
                 .then(()=> showUsers(req,res))
                 .catch((err)=>console.log(err))
                 .finally(()=>pool.end);
    }

    
//=============================================
    module.exports={
        showUsers,
        addUser,
    }

