import "./Equipo.css"
export const Equipo=(props)=>{
    return (

        <section className="equipos">
            <h3>{props.equipo}</h3>
            <div className="card">
                <img src="https://picsum.photos/200/300" alt="Card image cap"/>
            </div>
        </section>
    )
}
