import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../redux/actions';
import { User } from '../utils/interfaces';

const UpdateProfileAccordion = ({ profile }: { profile: User }) => {

    const [state, setState] = useState(
        {
            profile: profile
        }
    );
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(updateProfile(state.profile))
    };

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography>{t('profile.update.title')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={onSubmit}>
                    <Grid direction='column'>
                        <Grid item>
                            <TextField value={state.profile.username} label={t('profile.update.username')} onChange={(e) => setState({ ...state, profile: { ...state.profile, username: e.target.value } })}/>
                        </Grid>
                        <Grid item>
                            <TextField value={state.profile.email} label={t('profile.update.email')} onChange={(e) => setState({ ...state, profile: { ...state.profile, email: e.target.value } })}/>
                        </Grid>
                        <Button type='submit'>{t('profile.update.update')}</Button>
                    </Grid>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default UpdateProfileAccordion;