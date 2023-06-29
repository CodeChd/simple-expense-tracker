// import apiClient from "../services/api-client";

import create from "./http-service";

 export interface ResData {
    id: number;
    name: string;
  }


// class UserService {

//     getAllUsers(){
//     const cancel = new AbortController();
//     const request = apiClient
//     .get<ResData[]>("/users", {
//       signal: cancel.signal,
//     })

//     return {request, cancel: () => cancel.abort()}
//     }

//     deleteUsers(id: number){
//      return  apiClient.delete("/users/" + id)
//     }

//     createUser(user: ResData){
//       return apiClient.post("https://jsonplaceholder.typicode.com/users/", user)
//     }

//     updateUser(user: ResData){
//       return apiClient.patch("https://jsonplaceholder.typicode.com/users/" + user.id, user )
//     }

// }


export default create('/users');