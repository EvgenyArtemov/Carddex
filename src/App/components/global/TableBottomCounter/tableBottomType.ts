export interface TableBottomType {
    rowNumber: (event: React.FormEvent<HTMLInputElement>) => void;
    goToRowElement: () => void;
    rowElement: number;
    tableRowCount: number;
}