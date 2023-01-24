import React, { useState } from 'react';
import styles from './Test.module.css'

const FormBuilder = () => {
    const [formFields, setFormFields] = useState([]);
    const [editStatus, setEditStatus] = useState(false);

    const handleAddField = (field) => {
        setFormFields([...formFields, field]);
    }

    const handleRemoveField = (index) => {
        setFormFields(formFields.filter((field, i) => i !== index));
    }

    const handleEditField = (index, status) => {
        setEditStatus(status);
        console.log(editStatus)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.subDiv1}>
                <button onClick={() => handleAddField({ type: 'h1', label: 'Please fill this form', name: 'h1' })}>
                    H1 Tag
                </button>
                <button onClick={() => handleAddField({ type: 'text', label: 'Name', placeholder: "Enter Name" })}>
                    Add Text input Field
                </button>
                <button onClick={() => handleAddField({ type: 'number', label: 'Age', placeholder: "Enter Age" })}>
                    Add number input Field
                </button>
                <button onClick={() => handleAddField({ type: 'date', label: 'Date' })}>
                    Add date input Field
                </button>
                <button onClick={() => handleAddField({ type: 'checkbox', label: 'Agree to terms', name: 'check1' })}>
                    Add Checkbox Field
                </button>
                <button onClick={() => handleAddField({ type: 'button', label: 'Submit', name: 'submit' })}>
                    Submit Button
                </button>
            </div>
            <div className={styles.subDiv2}>
                <div className={styles.sbd2div1}>
                    {formFields.map((field, index) => (
                        (field.type === 'h1' ?
                            <div  style={{ width: "100%", textAlign: 'left', marginLeft: "30px" }} key={index}>
                                {field.type === 'h1' && <h1>{field.label}</h1>}
                                <button onClick={() => handleEditField(index, true)}>Edit</button>
                                <button onClick={() => handleRemoveField(index)}>Remove</button>
                            </div>

                            :

                            <div style={{ width: "33%" }} key={index}>
                                {field.type !== "button" && <label>{field.label}</label>}
                                {field.type === 'text' && <input type="text" placeholder={field.placeholder} />}
                                {field.type === 'number' && <input type="number" placeholder={field.placeholder} />}
                                {field.type === 'date' && <input type="date" />}
                                {field.type === 'checkbox' && <input type="checkbox" />}
                                {field.type === 'button' && <button>{field.label}</button>}
                                <button onClick={() => handleEditField(index, true)}>Edit</button>
                                <button onClick={() => handleRemoveField(index)}>Remove</button>
                            </div>)

                    ))}
                </div>
            </div>

        </div>
    );
};

export default FormBuilder;