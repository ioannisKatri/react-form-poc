export default function FormInput({handleChange, label, ...otherProps}) {
    console.log("other", otherProps);
    return (
        <div>
            {
                label ? (
                    <label>{label}<br/></label>
                ) : null
            }
            <input
                style={{border: otherProps.value.length ? "3px solid red" : "1px solid black", paddingRight: '5px'}}
                onChange={event => handleChange(event)}
                {...otherProps}
            />
        </div>
    )
}