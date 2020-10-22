import { ChangeEvent } from 'react';

export interface ToolbarSearchProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onCrossClick?: () => void;
}
