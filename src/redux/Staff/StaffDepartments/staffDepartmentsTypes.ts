export interface StaffDepartment {
    departmentUuid: string;
    depGuidPers: string;
    depGuidStruct: null;
    level: number;
    deptType: number;
    deptTypeStr: string;
    depIdPers: string;
    depIdStruct: null;
    depName: string;
    organizationUuid: string;
    orgName: string;
    parentDepartmentUuid: null;
    parentDepartmentName: null;
    chiefPersonUuid: null;
    chiefPersonName: string;
    isWorkCenter: number;
    isWorkCenterStr: string;
    qualityCheck: number;
    qualityCheckStr: string;
    whseCheck: number;
    whseCheckStr: string;
    deleted: number;
    deletedStr: string;
    creationDate: string;
    userCreated: string;
    externalId: null;
}

export type StaffDepartments = Array<StaffDepartment>;

export interface StaffDepartmentsState {
    departmentsTable: StaffDepartments;
}

export const GET_STAFF_DEPARTMENTS = 'GET_STAFF_DEPARTMENTS';

interface StaffDepartmentsData {
    type: typeof GET_STAFF_DEPARTMENTS;
    payload: StaffDepartments;
}

export type StaffDepartmentsActions = StaffDepartmentsData;
