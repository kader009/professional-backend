export interface Guardian{
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
}

export interface Student {
  id:string;
  name: {
    firstName : string;
    lastName : string;
  };
  email: string;
  gender: "male"|"female";
  birthDay: string;
  contactNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: Guardian;
  profileImage?: string;
  isActive : 'active' | 'inactive';
}













