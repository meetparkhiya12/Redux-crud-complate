import { ADD, Delete_EMP, SINGLE_EMP, Update_EMP,  } from "../ActionType/Actiontype"


export const empAdd = (data) => {


    
    return{
        type : ADD,
        payload : data
    }
    
}





export const singleuser = (data,index) => {
    // console.log(id , 'data');

    return{
        type : SINGLE_EMP,
        payload : {data, index}
    }
}

export const updateuser = (data,index) => {

    return{
        type : Update_EMP,
        payload : {data,index}
    }
}

export const deleteuser = (id) => {

    return{
        type : Delete_EMP,
        payload : id
    }
}