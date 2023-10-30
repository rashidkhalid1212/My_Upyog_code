import React from 'react'
import { SearchForm } from '@egovernments/digit-ui-react-components'
import { useForm, Controller } from "react-hook-form";
import SearchReportFields from './SearchReportFields';

function SearchReport({ tenantId, t }) {

  const onSubmit = () => {
    console.log("submit is pressed")
    // console.log(data)
  }

  const initialValues = Digit.SessionStorage.get("SEARCH_APPLICATION_DETAIL") ? {
    ...Digit.SessionStorage.get("SEARCH_APPLICATION_DETAIL"),
    offset: 0,
    limit: 10,
    sortBy: "commencementDate",
    sortOrder: "DESC"
  } : {
    offset: 0,
    limit: 10,
    sortBy: "commencementDate",
    sortOrder: "DESC"
  };

  const { register, control, handleSubmit, setValue, getValues, reset } = useForm({
    defaultValues: initialValues
  })


  return (
    <div>
      <SearchForm onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <SearchReportFields {...{ register, control, reset, tenantId, t }} />
      </SearchForm>
    </div>
  )
}

export default SearchReport