import React from 'react'
import {useRouteError} from "react-router";

export default function ErrorPage() {
    const err = useRouteError();
  return (
    <div>
        <h1>Status : {err.status} - {err.statusText}</h1>
        <h1>{err.error.message}</h1>
    </div>
  )
}
