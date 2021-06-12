import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlineRounded, EditRounded } from "@material-ui/icons";
import { useState } from "react";
import { userRows } from "../lib/data/dummy";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="col-name">
            <img src={params.row.avatar} alt="" className="col-name-image" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "transactions",
      headerName: "Transaction Volume",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <EditRounded className="col-actions-edit" />
            <DeleteOutlineRounded
              className="col-actions-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}
