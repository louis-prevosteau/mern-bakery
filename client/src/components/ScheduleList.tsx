import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSchedules } from '../redux/actions';
import { SCHEDULE_COLUMNS } from '../utils/columns';
import { RootStore } from '../utils/types';

const ScheduleList = () => {

    const { schedules } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getSchedules());
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {SCHEDULE_COLUMNS.map((column) => (
                            <TableCell key={column.id}>{t(`schedules.fields.${column.label}`)}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedules.map((schedule) => (
                        <TableRow key={schedule._id}>
                            <TableCell>{schedule.day}</TableCell>
                            <TableCell>{schedule.morningOpen}</TableCell>
                            <TableCell>{schedule.morningClose}</TableCell>
                            <TableCell>{schedule.afternoonOpen}</TableCell>
                            <TableCell>{schedule.afternoonClose}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ScheduleList;