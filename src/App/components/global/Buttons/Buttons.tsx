import React, { memo } from 'react';
import { Add } from 'App/../assets/images/add_button';
import { Edit } from 'App/../assets/images/edit_button';
import { Delete } from 'App/../assets/images/delete_button';
import { Search } from 'App/../assets/images/search_button';
import { SearchUser } from 'App/../assets/images/user-search';
import { Profile } from 'App/../assets/images/userIcon';
import { Parameters } from 'App/../assets/images/settingsIcon';
import { Enter } from 'App/../assets/images/bx-log-in';
import { Exit } from 'App/../assets/images/bx-log-out';
import { Settings } from 'App/../assets/images/settings_button';
import { Sort } from 'App/../assets/images/sort_button';
import { Relolad } from 'App/../assets/images/reload_button';
import { Print } from 'App/../assets/images/print_button';
import { Preview } from 'App/../assets/images/preview';
import { View } from 'App/../assets/images/page-view';
import { Close } from 'App/../assets/images/bx-x';
import { Pie } from 'App/../assets/images/bxs-pie-chart-alt-2';
import { QuickFilter } from 'App/../assets/images/bx-quick-filter';
import { ViewHorizontal } from 'App/../assets/images/page-view_horizontal';
import { ViewVertical } from 'App/../assets/images/page-view_vertical';
import { ImportXls } from 'App/../assets/images/import_xls-button';
import { ExportXls } from 'App/../assets/images/export_xls-button';
import { ImportPdf } from 'App/../assets/images/import_pdf-button';
import { ExportPdf } from 'App/../assets/images/export_pdf-button';
import { ImportCsv } from 'App/../assets/images/import_csv-button';
import { ExportCsv } from 'App/../assets/images/export_csv-button';
import { Events } from 'App/../assets/images/bx-time-five';
import { Grid } from 'App/../assets/images/bx-grid-alt';
import { LetIn } from 'App/../assets/images/bx-chevron-left';
import { Stop } from 'App/../assets/images/bx-pause';
import { Control } from 'App/../assets/images/bxs-cctv';
import { LetInMany } from 'App/../assets/images/bx-chevrons-left';
import { LetInOne } from 'App/../assets/images/bx-first-page';
import { LetOutOne } from 'App/../assets/images/bx-last-page';
import { LetOutMany } from 'App/../assets/images/bx-chevrons-right';
import { Warning } from 'App/../assets/images/bx-error-circle';
import { Bell } from 'App/../assets/images/bxs-bell-ring';
import { Gear } from 'App/../assets/images/bx-cog';
import { Layers } from 'App/../assets/images/bx-layer';
import { ScanFace } from 'App/../assets/images/bx-scan';
import { Lock } from 'App/../assets/images/bx-lock-alt';
import { Pin } from 'App/../assets/images/pin';
import { Sun } from 'App/../assets/images/bxs-sun';
import { Moon } from 'App/../assets/images/bxs-moon';
import { Loader } from 'App/../assets/images/bx-loader-alt';
import { PrevButton } from 'App/../assets/images/prev__btn';
import { NextButton } from 'App/../assets/images/next__btn';
import { ButtonsType } from './buttonsType';
import './Buttons.scss';

const ButtonsInner = (props: ButtonsType) => {
    return (
        <button
            type="button"
            className={`
                custome-button
                ${props.disable && 'custome-button--disable'}
                ${props.danger && 'custome-button--danger'}
                ${props.active && 'custome-button--active'}
                ${(!props.disable === !props.danger) === !props.active && 'custome-button--typical'}
                ${props.size === 'sm' && 'custome-button--square-sm'}
                ${props.size === 'lg' && 'custome-button--square-lg'}
                ${props.size === 'm' && 'custome-button--square-m'}
                ${!props.size && 'custome-button--custome'}
            `}
            tabIndex={props.disable ? -1 : undefined}
            onClick={props.onPress}
        >
            <div className="prompt">
                <div className="p--sm--normal">{props.prompt}</div>
            </div>

            {props.name === 'Add' && <Add />}
            {props.name === 'Edit' && <Edit />}
            {props.name === 'Delete' && <Delete />}
            {props.name === 'Search' && <Search />}
            {props.name === 'SearchUser' && <SearchUser />}
            {props.name === 'Profile' && <Profile />}
            {props.name === 'Parameters' && <Parameters />}
            {props.name === 'Enter' && <Enter />}
            {props.name === 'Exit' && <Exit />}
            {props.name === 'Settings' && <Settings />}
            {props.name === 'Sort' && <Sort />}
            {props.name === 'Relolad' && <Relolad />}
            {props.name === 'Print' && <Print />}
            {props.name === 'Preview' && <Preview />}
            {props.name === 'View' && <View />}
            {props.name === 'Close' && <Close />}
            {props.name === 'Pie' && <Pie />}
            {props.name === 'QuickFilter' && <QuickFilter />}
            {props.name === 'ViewHorizontal' && <ViewHorizontal />}
            {props.name === 'ViewVertical' && <ViewVertical />}
            {props.name === 'ImportXls' && <ImportXls />}
            {props.name === 'ExportXls' && <ExportXls />}
            {props.name === 'ImportPdf' && <ImportPdf />}
            {props.name === 'ExportPdf' && <ExportPdf />}
            {props.name === 'ImportCsv' && <ImportCsv />}
            {props.name === 'ExportCsv' && <ExportCsv />}
            {props.name === 'Events' && <Events />}
            {props.name === 'Grid' && <Grid />}
            {props.name === 'LetIn' && <LetIn />}
            {props.name === 'Stop' && <Stop />}
            {props.name === 'Control' && <Control />}
            {props.name === 'LetInMany' && <LetInMany />}
            {props.name === 'LetInOne' && <LetInOne />}
            {props.name === 'LetOutOne' && <LetOutOne />}
            {props.name === 'LetOutMany' && <LetOutMany />}
            {props.name === 'Warning' && <Warning />}
            {props.name === 'Bell' && <Bell />}
            {props.name === 'prev' && <PrevButton />}
            {props.name === 'next' && <NextButton />}
            {props.name === 'Gear' && <Gear />}
            {props.name === 'Layers' && <Layers />}
            {props.name === 'ScanFace' && <ScanFace />}
            {props.name === 'Lock' && <Lock />}
            {props.name === 'Pin' && <Pin />}
            {props.name === 'Sun' && <Sun />}
            {props.name === 'Moon' && <Moon />}
            {props.name === 'Loader' && <Loader />}

            {props.label && (
                <span className="buttons__label">
                    <div className="p--md--normal">{props.label}</div>
                </span>
            )}
        </button>
    );
};

export const Buttons = memo(ButtonsInner);
