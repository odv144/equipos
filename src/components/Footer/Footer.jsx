import "./Footer.css"
const Footer=()=>{
    return(
        <footer className="footer" style={ {backgroundImage:"url(/img/footer.png"}}>
            <div className="redes">
                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
           </div>
           <img src='/img/logso512.png' alt='org'/>
           <strong></strong>
        </footer>
    )
}

export default Footer