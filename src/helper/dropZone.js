export const style = (isDragAccept, isDragActive, isDragReject) => {
  if (isDragAccept) {
    return { backgroundColor: "green" };
  }
  if (isDragActive) {
    return { backgroundColor: "grey" };
  }
  if (isDragReject) {
    return { backgroundColor: "red" };
  }
};

export const thumpNail = (files) => {
  const thumbs = files?.map((file) => {
    return (
      <div key={file.id} className="thumbs">
        <div className="wrapper">
          <img src={file.preview} alt="" />
        </div>
      </div>
    );
  });
  return thumbs;
};
