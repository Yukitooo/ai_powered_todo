

let errorState = $state('')



export const errorStore =  {
    get errorState(){
        return errorState;
    },

    setErrorMessage(errorText: string){
        errorState = errorText
    },

    clearErrorMessage(){
        errorState = ''
    }
}