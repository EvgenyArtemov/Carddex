export type SideNavState = Array<NavLink>;

export interface NavLink {
    linkName: string;
    linkUrl?: string;
    linkSubLink?: SubLinkArr;
}

export type SubLinkArr = Array<SubLink>;

export interface SubLink {
    sublinkName: string;
    sublinkUrl: string;
}
