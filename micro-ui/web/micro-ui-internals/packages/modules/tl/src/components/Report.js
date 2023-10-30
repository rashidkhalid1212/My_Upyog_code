import React, { useState, useEffect } from "react";
import { Header } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";
import SearchApplication from "./SearchApplication";
import EmployeeApp from "../pages/employee";
import SearchReport from "./SearchReport";



function Report({initialStates = {}, isReport}) {
  const { t } = useTranslation();
  let isMobile = window.Digit.Utils.browser.isMobile();
  const tenantId = Digit.ULBService.getCurrentTenantId();

  // const { data } = Digit.Hooks.tl.useInbox({
  //   tenantId,
  //   // filters: { ...searchParams, ...paginationParams, sortParams },
  //   config: {},
  // });

  // const [enableSarch, setEnableSearch] = useState(() => (isReport ? {} : { enabled: false }));  
  // const [setSearchFieldsBackToOriginalState, setSetSearchFieldsBackToOriginalState] = useState(false);
  // const [searchParams, setSearchParams] = useState(() => {
  //   return initialStates?.searchParams || {};
  // });

  // const handleFilterChange = (filterParam) => {
  //   let keys_to_delete = filterParam?.delete;
  //   let _new = {};
  //   if (isMobile) {
  //     _new = { ...filterParam };
  //   } else {
  //     window.scrollTo(0,0);
  //     _new = { ...searchParams, ...filterParam };
  //   }
  //   // let _new = { ...searchParams, ...filterParam };
  //   // if (keys_to_delete) keys_to_delete.forEach((key) => delete _new[key]);
  //   // delete filterParam.delete;
  //   if (keys_to_delete) keys_to_delete.forEach((key) => delete _new[key]);
  //   delete _new?.delete;
  //   delete filterParam?.delete;
  //   setSetSearchFieldsBackToOriginalState(true);
  //   setSearchParams({ ..._new });
  //   setEnableSearch({ enabled: true });
  // };



  return (
    <div>

      <Header>{t("ES_COMMON_REPORT")}</Header>

      <SearchReport tenantId={tenantId} t={t} />

    </div>
  )
}

export default Report