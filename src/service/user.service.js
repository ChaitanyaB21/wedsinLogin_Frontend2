import httpservice from "../Config/httpservice,"

class UserService {
    // updateCurrentUser = async (data) => {
    //     try{
    //         return await httpservice.put("api/users/update/me",{...data})
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // getCurrentUser = async () => {
    //     try{
    //         return await httpservice.get("api/users/own")
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // editCurrentUser = async (id,body) => {
    //     try{
    //         return await httpservice.put("api/users/"+id,{...body})
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    //  addAdditionalDocs = async (body) => {
    //     try{
    //         return await httpservice.put("api/users/documents",{...body})
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    form1Data = async (data) => {
        try{
            return await httpservice.post('api/form1' , {...data});
        }catch(err){
            console.log(err);
        }
    }

    form2Data = async (data) => {
        try{
            return await httpservice.post('/api/form2' , {...data});
        }catch(err){
            console.log(err);
        }
    }

    form3Data = async (data) => {
        try{
            return await httpservice.post('/api/form3' , {...data});
        }catch(err){
            console.log(err);
        }
    }

    form4Data = async (data) => {
        try{
            return await httpservice.post('/api/form4' , {...data});
        }catch(err){
            console.log(err);
        }
    }

}

export default new UserService();