import { TabState } from './Tab/tabbarTabType';

export interface TabbarState {
    children: React.ReactElement<TabState>[] | React.ReactElement<TabState>;
    trigger?: boolean;
}
