import React from 'react';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import './OrganizationEdit.scss';

export default function OrganizationEdit(props: any) {
    return props.selectedEntry ? (
        <div>
            <div className="edit-employee__header">
                <div className="edit-employee__header-title">{`Просмотр организации ${props.selectedEntry.orgShortName}`}</div>
                <div className="edit-employee__header-close" onClick={props.toggleEditEntry}>
                    <CrossIcon label="Закрыть" />
                </div>
            </div>
        </div>
    ) : (
        <div>
            <div className="edit-employee__header">
                <div className="edit-employee__header-close" onClick={props.toggleEditEntry}>
                    <CrossIcon label="Закрыть" />
                </div>
            </div>
        </div>
    );
}
