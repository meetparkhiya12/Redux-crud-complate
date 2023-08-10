import { ADD, Delete_EMP, SINGLE_EMP, Update_EMP } from "../ActionType/Actiontype"

const initiale = {
    employees: [],
    employe: null,
    isIndex: null
}

const empreducer = (state = initiale, action) => {


    switch (action.type) {
        case ADD:
            return (
                {

                    ...state,
                    employees: [...state.employees, action.payload]
                }

            )
        case SINGLE_EMP:
            return {
                ...state,
                employe: action.payload.data,
                isIndex: action.payload.index
            }


        case Update_EMP:

            let emp = state.employees;

            emp[action.payload.index] = action.payload.data; 

            return{
                ...state,
                employees: emp,
                isIndex: null,
                employe: null
            }


        case Delete_EMP:

            let de_emp = state.employees;

            let delete_emp = de_emp.filter((del)=>{
                return(
                    del.id != action.payload
                )
            })

            return{
                ...state,
                employees: delete_emp

            }
        default:
            return state

    }


}

export default empreducer
