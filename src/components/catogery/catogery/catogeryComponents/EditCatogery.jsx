//native import
import { useRef, useState } from "react";

//eternal import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCatogeries } from "../../../../actions/catogeryActions/deleteCatogery";
import {
  faEdit,
  faTrashAlt,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

//internal import
import { updateCatogeries } from "../../../../actions/catogeryActions/updateCatogery";
import {
  Catogerys,
  Content,
  Delete,
  Edit,
  Options,
} from "./editCatogeryStyles";

const List = ({ setFupdate, fupdate, e }) => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState();
  const dispatch = useDispatch();
  const deleteRef = useRef(null);
  const mainRef = useRef(null);
  const catRef = useRef(null);

  const handleClick = (e) => {
    setEdit(!edit);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (update) {
      dispatch(updateCatogeries(update)).then(() => {
        setFupdate(!fupdate);
      });
      setEdit(false);
    }
  };
  const onChangeUpdate = (e) => {
    setUpdate({
      ...update,
      pid: catRef.current?.attributes[2].value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(deleteCatogeries({ id: deleteRef.current.attributes[0].value }));
    setFupdate(!fupdate);
  };

  return (
    <Content ref={mainRef} key={e._id}>
      {edit ? (
        <input
          ref={catRef}
          onChange={onChangeUpdate}
          type="text"
          name="newName"
          data-id={e._id}
          defaultValue={e.name}
        />
      ) : (
        <Catogerys>{e.name}</Catogerys>
      )}
      {e.chidren.length !== 0 ? (
        <div>
          {" "}
          <select
            name="childId"
            onChange={onChangeUpdate}
            className="drop"
            id=""
          >
            <option value="" className="hidden">
              Sub Catogery
            </option>
            {e.chidren?.map((child, i) => {
              return (
                <option value={child._id} key={i}>
                  {child.name}
                </option>
              );
            })}
          </select>
          {edit && (
            <input onChange={onChangeUpdate} name="ChildNewName" type="text" />
          )}
        </div>
      ) : (
        <h3>Sub Catogery not Found</h3>
      )}

      <Options>
        {edit && (
          <button className="submitBtn">
            <FontAwesomeIcon onClick={handleUpdate} icon={faArrowRight} />
          </button>
        )}
        <Edit>
          {!edit ? (
            <FontAwesomeIcon onClick={handleClick} icon={faEdit} />
          ) : (
            <FontAwesomeIcon onClick={handleClick} icon={faTimes} />
          )}
        </Edit>
        <Delete ref={deleteRef} data-id={e._id} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Delete>
      </Options>
    </Content>
  );
};

export default List;
