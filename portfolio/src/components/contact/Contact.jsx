import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Let's work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>krmciftci17@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Istanbul/Bahcelievler</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+90 541 723 2133</span>
            </div>
        </div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder="Name" />
                <input type="email" required placeholder="Email" />
                <textarea placeholder="Message"   rows={8}/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact