enum ROLE{
    user="USER",
    admin="ADMIN"
}

type User={
    name:string,
    email:string,
    role:ROLE
}

const usuarios:User[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.user},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.admin},
	{name: "Aline", email: "aline@email.com", role: ROLE.user},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.user},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.user},  
	{name: "Carina", email: "carina@email.com", role: ROLE.admin}      
] 

function usuarioAdmin(usuario:User[]){
    const filtro = usuario.filter((usuarioAdm)=>{
        return usuarioAdm.role === ROLE.admin
    })

     return filtro.map((item)=>{
        return item.email
    })
}
console.log(usuarioAdmin(usuarios))
