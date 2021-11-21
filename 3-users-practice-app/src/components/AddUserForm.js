import './AddUserForm.css';

const AddUserForm = props => {
    return (
        <div>
            <div>
                <label>Username:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Age:</label>
                <input type="number" start="1"/>
            </div>
            <input type="submit" value="Add User"/>
        </div>
    );
}

export default AddUserForm;