export interface ILogin {
   email: string,
   password: string
   role:string
}

export const ILoginDefault: ILogin = {
   email: "",
   password: "",
   role:""
}