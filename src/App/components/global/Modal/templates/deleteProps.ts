import { ButtonAppearances } from '@atlaskit/button';

interface DeleteProps {
    successButtonAppearance: ButtonAppearances;
    [k: string]: any;
}

const deleteProps: DeleteProps = {
    successButtonAppearance: 'danger',
    successButtonLabel: 'Удалить'
};

export default deleteProps;
