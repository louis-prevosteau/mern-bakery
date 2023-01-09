import { Delete, Edit } from '@mui/icons-material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSchedules } from '../redux/actions';
import { SCHEDULE_COLUMNS } from '../utils/columns';
import { RootStore } from '../utils/types';
import DeleteScheduleModal from './DeleteScheduleModal';
import UpdateScheduleModal from './UpdateScheduleModal';

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
                        {JSON.parse(localStorage.getItem('profile') as string)?.user?.role === 'ADMIN' && (
                            <div>
                                <TableCell>
                                    <Edit/>
                                </TableCell>
                                <TableCell>
                                    <Delete/>
                                </TableCell>
                            </div>
                        )}
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
                            {JSON.parse(localStorage.getItem('profile') as string)?.user?.role === 'ADMIN' && (
                                <div>
                                    <TableCell>
                                        <UpdateScheduleModal schedule={schedule}/>
                                    </TableCell>
                                    <TableCell>
                                        <DeleteScheduleModal schedule={schedule}/>
                                    </TableCell>
                                </div>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ScheduleList;