import { ILoginDefault, type ILogin } from "./ILogin";

export interface ISignup extends ILogin {
   username: string
}

export const ISignupDefault: ISignup = {
   ...ILoginDefault,
   username: ""
}