export interface StaffOrganization {
    organizationUuid: string;
    orgShortName: string;
    orgForm: null;
    orgInn: null;
    orgState: string;
    parentOrgUuid: null;
    parentOrgName: null;
    orgGuid: string;
    orgId: string;
    deleted: number;
    legalName: string;
    legalAddress: string;
    phoneNumber: string;
    isMain: number;
    creationDate: string;
    externalId: string;
}

export type StaffOrganizations = Array<StaffOrganization>;

export interface StaffOrganizationsState {
    organizationsTable: StaffOrganizations;
    sidebarOpened: boolean;
}

export const GET_STAFF_ORGANIZATIONS = 'GET_STAFF_ORGANIZATIONS';
export const STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR = 'STAF_ORGANIZATIONS_TOGGLE_SIDEBAR';

interface StaffOrganizationsData {
    type: typeof GET_STAFF_ORGANIZATIONS;
    payload: StaffOrganizations;
}

interface StaffOrganizationsToggleSidebar {
    type: typeof STAFF_ORGANIZATIONS_TOGGLE_SIDEBAR;
}

export type StaffOrganizationsActions = StaffOrganizationsData | StaffOrganizationsToggleSidebar;
