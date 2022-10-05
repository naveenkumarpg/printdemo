import React from 'react';

export default function Exporter() {
  return (
    <div className="align-right">
      <span>Export to : </span>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          Print
        </button>
        <button type="button" className="btn btn-success">
          Save
        </button>
        <button type="button" className="btn btn-danger">
          Excel
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
      </div>
    </div>
  );
}
