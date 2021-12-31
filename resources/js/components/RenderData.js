export default function renderData(data) {
    return (
        <>
        <div className={`${name.length > 0 || keywords.length > 0 || estado.length > 0 || university.length > 0 || role.length > 0 || researchField.length > 0 ? "border-bottom border-primary pb-4 text-primary" : "" }`}>
            <h5>
                {name.length > 0 ?
                <>
                    <span className="bg-primary text-dark p-2">nombre</span>  <span className="p-2"><u>{name}</u> /  </span>
                </>
                    : "" }
                {keywords.length > 0 ?
                <>
                    <span className="bg-primary text-dark p-2">palavra-chave</span>  <span className="p-2"><u>{keywords}</u> /  </span>
                </>
                    : "" }
                {estado.length > 0 ?
                <>
                    <span className="bg-primary text-dark p-2">estado</span>  <span className="p-2"><u>{estado}</u> /  </span>
                </>
                    : "" }
                {university.length > 0 ?
                <>
                    <span className="bg-primary text-dark p-2">universidade</span>  <span className="p-2"><u>{university}</u> /  </span>
                </>
                    : "" }
                {role.length > 0 ?
                <>
                    <span className="bg-primary text-dark p-2">role</span>  <span className="p-2"><u>{role}</u> /  </span>
                </>
                    : "" }
                {researchField.length > 0 ?
                <>
                    <span className="bg-primary text-dark p-2">campo</span>  <span className="p-2"><u>{researchField}</u> /  </span>
                </>
                    : "" }
            </h5>
        </div>
        <div className="border-bottom border-primary py-3 text-primary">
            <h4>{data.length} pesquisadores encontrados.</h4>
        </div>
        <div className="text-primary mt-3 row">
            {data.map((item) => (
                <div className="col m-2 btn btn-outline-primary">
                    <Link className="text-decoration-none" to={"researcher/" + item.id} key={item.id}>{item.name}</Link>
                </div>
            ))}
        </div>
    </>
    );
}
