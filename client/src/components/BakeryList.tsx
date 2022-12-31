import { Delete, Edit } from '@mui/icons-material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getBakeries } from '../redux/actions';
import { BAKERY_COLUMNS } from '../utils/columns';
import { RootStore } from '../utils/types';
import DeleteBakeryModal from './DeleteBakeryModal';
import UpdateBakeryModal from './UpdateBakeryModal';

const BakeryList = () => {

    const { bakeries } = useSelector((state: RootStore) => state);
    const dispatch = useDispatch<any>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getBakeries());
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {BAKERY_COLUMNS.map((column) => (
                            <TableCell key={column.id}>{t(`bakeries.columns.${column.label}`)}</TableCell>
                        ))}
                        <TableCell>
                            <Edit/>
                        </TableCell>
                        <TableCell>
                            <Delete/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bakeries.map((bakery) => (
                        <TableRow key={bakery._id}>
                            <TableCell>{bakery.address}</TableCell>
                            <TableCell>{bakery.city} {bakery.zipcode}</TableCell>
                            <TableCell>{bakery.country}</TableCell>
                            <TableCell>{bakery.phone}</TableCell>
                            <TableCell>{bakery.infos}</TableCell>
                            <TableCell>
                                <UpdateBakeryModal bakery={bakery}/>
                            </TableCell>
                            <TableCell>
                                <DeleteBakeryModal bakery={bakery}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BakeryList;