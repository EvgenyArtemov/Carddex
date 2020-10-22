export interface TabbarState {
    tabPosition: number;
    setTab: (property: number) => void;
    tabs: {
        index: number;
        name: string;
    }[];
    trigger?: boolean;
}
