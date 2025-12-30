const ContactPage = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Have questions or want to get in touch? We'd love to hear from you! Please fill out the form below or reach us using the contact information provided.
      </p>
      <div className="contact-form">
        <form>
          <div>
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="message">Your Message</label><br />
            <textarea id="message" rows={4} required></textarea>
          </div>
          <button className="btn-submit" type="submit">
            Send
          </button>
        </form>
      </div>
      <div>
        <p>
          <strong>Email Persent:</strong> fikri.amrulloh15@gmail.com<br />
          <strong>Email Secend:</strong> 224260064.mhs@stmikjabar.ac.id<br />
          <strong>Whatsapp:</strong> +62 852 9453 2451<br />
          <strong>Address:</strong> Kp. Cigadog Rt.01/Rw.10 Kec. Cibiuk Kab. Garut
        </p>
      </div>
    </div >
  )
}

export default ContactPage