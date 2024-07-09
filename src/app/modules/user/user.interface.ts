export interface TUser {
  id: string
  password: string
  needsPasswordChange: boolean
  role: 'Admin' | 'student' | 'faculty'
  status: 'in-progress' | 'blocked'
  isDeleted: boolean
}

export interface NewUser{
  password:string;
  role:string;
  id:string;
}
