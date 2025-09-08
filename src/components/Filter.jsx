function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title)
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
            {
                filterData.map( (data) => (
                    <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-bgDark border-2 transition-all duration-200 
                    ${category !== data.title ? "bg-opacity-50 border-transparent" : "border-white"}`}
                    key={data.id}
                    onClick={ ()=> filterHandler(data.title)}
                    >{data.title}</button>
                ))
            }
        </div>
    )
}

export default Filter;