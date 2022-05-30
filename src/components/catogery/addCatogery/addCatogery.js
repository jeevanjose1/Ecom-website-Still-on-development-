export const selectMenu = (catogery) => {
  let catMenu = [];
  catogery?.forEach((e) => {
    catMenu.push(
      <option key={e._id} value={e._id}>
        {e.name}
      </option>
    );
  });
  return catMenu;
};
