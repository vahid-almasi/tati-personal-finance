import { destroyCategoryAsync} from './categorySlice'

function ButtonGroup(props:any) {

    function handleClick(e:any) {
        const payload = {
            category: {
                category_id: props.category_id
            }
        }
        props.dispatch(destroyCategoryAsync(payload));
    }
    return <div className="btn-group float-end">
        <button
            className="btn btn-warning"
            onClick={() => props.toggleEditForm()}>Edit</button>
        <button
            className="btn btn-danger"
            onClick={(e) => handleClick(e)}>Delete</button>
    </div>;
}

export default ButtonGroup;