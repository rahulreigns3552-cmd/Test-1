import React, {useState} from 'react'
import styles from '../styles/Contact.module.css'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const handle = e => setForm({...form,[e.target.name]:e.target.value})
  const submit = e => {e.preventDefault(); console.log('Contact form', form); alert('Message submitted (demo)')}

  return (
    <div className={styles.container}>
      <h1 className="reveal">Contact Us</h1>
      <form onSubmit={submit} className={`${styles.form} reveal`}>
        <label>Name<input name="name" value={form.name} onChange={handle} required/></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={handle} required/></label>
        <label>Message<textarea name="message" value={form.message} onChange={handle} required/></label>
        <button className="btn primary" type="submit">Send Message</button>
      </form>

      <aside className={`${styles.info} reveal`}>
        <h3>Company Info</h3>
        <p>Address: Demo Street, City</p>
        <p>Email: hello@mistaeats.example</p>
        <div className={styles.map}><iframe title="map" src="about:blank" /></div>
        <div className={styles.social}>Follow us: <a href="#">Instagram</a> • <a href="#">Facebook</a></div>
      </aside>
    </div>
  )
}
