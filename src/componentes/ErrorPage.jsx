

import img404 from '../assets/404.png'

import {Link} from 'react-router-dom'

const Error = ()=> {

    return(
        <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: 16}}>
            <div style={{ position: "relative", width: 600, maxWidth: "100%" }}>
                <img src={img404} alt="404" style={{ width: "100%", display: "block" }}/>
                <div style={{position: "absolute", bottom: 168, left: "50%", transform: "translateX(-50%)", zIndex: 10}}>
                <Link to='/' className='btn btn-danger'>Volver a home</Link>
                </div>
            </div>
        </div>
    )

}

export default Error