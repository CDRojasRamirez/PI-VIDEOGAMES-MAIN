import { Link } from "react-router-dom"
import style from "./Footer.module.css"

const Footer = () => {

    return (
        <footer>
            <div className={style.containerFooter}>
            {/* <button style={
                    {
                        
                        "right":"1205px",
                        "bottom":"0",
                        "width":"300px",
                        "fontSize":"16px",
                        "padding":"20px",
                        "background":"none"
                        // "background":"rgb(14, 1, 31)",
                        
                    }}
                    >REDES SOCIALES</button>
                <Link to={'/creategame'} className={style.btn}>
                    <button style={
                    {
                        "top":"9.5px",
                        "right":"43px",
                        "width":"220px",
                        "fontSize":"16px",
                        "padding":"20px",
                        "background":"none"
                        // "background":"rgb(14, 1, 31)",
                        
                    }}
                    >Create Game</button>
                    </Link> */}
                {/* <input type="text" className={style.input} placeholder='  Buscar un videojuego' /> */}
                
                    {/* <input type="text" name="text" className={style.input} placeholder="Buscar un videojuego...."></input> */}
                    <h1 style={{"background":"none", "color":"white"}}>FOOTER EN PROCESO</h1>
            </div>
        </footer>
    )
}

export default Footer;