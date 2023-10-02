import React, { useState } from 'react';
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData'
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import CarForm  from '../components/CarForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, },
    { field: 'make', headerName: "Make", flex: 1},
    { field: 'model', headerName: "Model", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
    { field: 'color', headerName: "Color", flex: 1},
];

interface gridData {
    data: {
        id?:string
    }
  }

export const DataTable = () => {
    let { contactData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


 
    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={() => handleClose}
            />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >Create New Entry</button>
            </div> 
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >Update Entry</button>
            </div> 
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => deleteData()}
                >Delete Entry</button>
            </div> 
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Cars</h2>
            <DataGrid rows={contactData} columns={columns}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable