import './index.css';
const Home = () => {
    const clickBuy = (e) =>{
        console.log("go view item", e);

    }
    const clickArg = (name, e) =>{
        console.log(name, e);
    }
    return (
        <div className="home">
            <div className="row fit mx-auto my-3 " max-width="fit-content">
                <div className="col fit mx-auto p-3 " max-width="fit-content">
                    <div className="container-fluid p-2 border border-5 border-dark text-center bg-light">
                        <h2>All New Adidas Cleats!!!</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VJHEKcKqvOI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        <br />
                        <button onClick={(e) =>{clickArg("hey", e)}} className="btn btn-secondary mx-auto mb-2">Buy Now!</button>
                    </div>
                </div>

                <div className="col fit mx-auto p-3 " max-width="fit-content">
                    <div className="container-fluid p-2 border border-5 border-dark text-center bg-light">
                 
                        <div className='container-fluid'>
                            <h2 className="text-center px-2 mx-auto"max-width="fit-content">Deals!</h2>
                        </div>
                   
                        <div className="row fit " max-width="fit-content">
                            <div className="card mx-0 border border-3 border-dark deals">
                                <div className="card-body">
                                    <img src="starlancer.jpg" className="card-img-top deals-img" />
                                    <p className="card-text mb-1"><span className='line'>$35 </span>$30</p>
                                    <h5 className="card-title my-0">Adidas starlancer</h5>
                                </div>
                                <button onClick={clickBuy} className="btn btn-secondary mx-auto mb-2">Buy</button>
                            </div>
                        </div>
                        <div className="row fit  my-3 " max-width="fit-content">
                            <div className="card mx-0 border border-3 border-dark deals">
                                <div className="card-body">
                                    <img src="ccmSuperTracker.jpg" className="card-img-top deals-img" />
                                    <p className="card-text mb-1"><span className='line'>$150 </span>$125</p>
                                    <h5 className="card-title my-0">CCM Super Tracker</h5>
                                </div>

                                <button onClick={clickBuy} className="btn btn-secondary mx-auto mb-2">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Home;