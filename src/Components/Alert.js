import React from "react";

export default function Alert(props) {
  return (
      props.alerts && <div className={`alert alert-${props.alerts.types}  alert-dismissible fade show text-align-center`} role="alert">
        <strong>{props.alerts.msg}</strong> 
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
  );
}
