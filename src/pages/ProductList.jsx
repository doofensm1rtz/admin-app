import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlineRounded, EditRounded } from "@material-ui/icons";
import { useState } from "react";
import { productRows } from "../lib/data/dummy";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="col-name">
            <img src={params.row.image} alt="" className="col-name-image" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 250 },
    {
      field: "price",
      headerName: "Price",
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
    <div className="product-list">
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
