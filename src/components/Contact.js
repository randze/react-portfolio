import React from 'react';

function Contact() {
    return (
        <div className="container" style={{maxWidth: '900px'}}>
            <div className="row">
                <section className="col-12 col-sm-3" style={{marginLeft:'2rem'}}>
                    <h2 style={{textDecoration: 'underline'}}>Links</h2>
                    <a href="https://github.com/randze/" rel="noopener">myGitHub</a>
                    <p>LinkedIn
                        <br />asdsa@email.com
                        <br />123-123-1234
                    </p>
                </section>
                <section className="col-12 col-sm-9" style={{maxWidth: '500px'}}>
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" className="form-control" id="nameInput" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">E-Mail Address</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact;
