export default function Info (){
    return(
        <div className="info">
            <div>
                <h2 className="name">Yannelly Mercado</h2>
                <h4 className="position">Frontend Developer</h4>
                <p className="email">Yannellym@gmail.com</p>
                <section className="btn--container">
                    <button className="btn btn--email"><img src="./images/email.png" alt="email" className="info--icon"/>Email</button>
                    <button className="btn btn--linkedin"> <img src="./images/linkedin.png" alt="linkedIn" className="info--icon"/>LinkedIn</button>
                </section>
            </div>
        </div>
    )
}