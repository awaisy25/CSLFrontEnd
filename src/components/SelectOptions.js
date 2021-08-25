const SelectOptions = (props) => {
    return (
        <select name={props.name} onChange={props.change} value={props.value}>
            <option value="">{props.name}</option>
        {
            
            props.items.map(item => {
                return <option key={item.id} value={item.id}>{item.title}</option>
            })
        }
        </select>
    )
}

export default SelectOptions;