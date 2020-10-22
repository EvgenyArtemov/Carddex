export type StaffPositions = Array<StaffPosition>;

export interface StaffPosition {
    _id: string;
    name: string;
    count: number;
    isDeleted: string;
}
