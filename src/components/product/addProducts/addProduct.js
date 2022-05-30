export const formData = (files, data) => {
  const fdata = new FormData();
  files?.forEach((file) => {
    fdata.append("files", file);
  });

  fdata.append("title", data?.title);
  if (data?.subCatogeries) {
    fdata.append("subCatogeries", data?.subCatogeries);
  }

  fdata.append("catogery", data?.catogery);
  fdata.append("discription", data?.discription);
  fdata.append("basicPrepration", data?.basicPrepration);
  fdata.append("storage", data?.storage);
  fdata.append("price", data?.price);
  fdata.append("offerPrice", data?.offerPrice);
  fdata.append("countInStock", data?.countInStock);
  fdata.append("isFeature", data?.isFeature);
  return fdata;
};

export const subfilter = (parrent, catogeries, handleChange) => {
  const parrents = catogeries?.filter((cat) => cat._id === parrent);

  if (parrents && parrents[0]?.chidren.length > 0) {
    return parrents[0].chidren?.map((cat) => {
      return (
        <select
          onChange={handleChange}
          name="subCatogeries"
          id="catogeries"
          placeholder="Catogeries"
        >
          <option value="0" className="hidden">
            Sub Catogery
          </option>
          <option value={cat._id}>{cat.name}</option>;
        </select>
      );
    });
  } else {
    return <h2>Subcaogery not found</h2>;
  }
};

export const mapStateToProps = (state) => {
  return {
    isLoading: state?.addProducts?.isloading,
    success: state.addProducts.payload,
  };
};
