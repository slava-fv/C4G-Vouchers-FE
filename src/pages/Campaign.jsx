import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import API from "api";
import { VouchersList } from "components";

const Campaign = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log("===>> ~ id", id);

  const [isFetching, setIsFetching] = useState(true);
  const [vouchers, setVouchers] = useState([]);
  const [meta, setMeta] = useState({ pageSize: 20, page: 0, itemsCount: 0 });

  const [page, setPage] = useState(history.location?.state?.page || 0);
  const [sortBy, setSortBy] = useState(history.location?.state?.sortBy || "");
  const [direction, setDirection] = useState(
    history.location?.state?.direction || ""
  );

  async function fetchVouchers(id, sortQueryParams, filterQueryParams) {
    setIsFetching(true);
    let data;

    // if (filterQueryParams.filteredChangeStatusDate.length) {
    //   filterQueryParams.filteredChangeStatusDate = getUTCDatesTimes(
    //     filterQueryParams.filteredChangeStatusDate
    //   );
    // }

    // if (filterQueryParams.filteredCreatedDate.length) {
    //   filterQueryParams.filteredCreatedDate = getUTCDatesTimes(
    //     filterQueryParams.filteredCreatedDate
    //   );
    // }

    try {
      data = await API.getVouchers(id, sortQueryParams, filterQueryParams);

      setVouchers(data.items);
      setMeta(data.meta);
    } catch (err) {}

    setIsFetching(false);
  }

  useEffect(() => {
    fetchVouchers(id, { page, sortBy, direction }, {});
  }, [page, sortBy, direction, id]);

  return (
    <VouchersList
      loading={isFetching}
      meta={meta}
      vouchers={vouchers}
      // voucherIdDeleting={voucherIdDeleting}
      sortBy={sortBy}
      direction={direction}
      // handlePageAndSortChange={handlePageAndSortChange}
      setPage={setPage}
      // handleVoucherDelete={handleVoucherDelete}
    />
  );
};

export default Campaign;
