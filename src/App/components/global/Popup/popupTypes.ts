interface ContentProps {
    iconName: string;
    text: string;
    callback: () => void;
}

export interface popupContentProps {
    someAdditionalLogic: string;
    content: Array<ContentProps>;
    html: string;
}
