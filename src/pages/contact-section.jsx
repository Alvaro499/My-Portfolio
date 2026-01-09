import { useState } from "react";
import styles from "@/styles/contact-section.module.css";
import Alert from "@/components/Alerts/AlertForPortfolio";

export default function ContactSection() {
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    //It´ll read only inputs with an attribute "name"
    const formData = new FormData(e.target);

    //formData is reading the name attributes to create the "data object"
    const data = {
      name: formData.get("name"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    //We hit the APIRest endpoint from NextJS Server
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setAlert({ type: "success", message: "Message sent successfully!" });
      e.target.reset();
    } else {
      setAlert({ type: "error", message: "Error sending message. Please try again." });
    }
  };





  return (
    <section className={styles.container} id="contact">
      <h2>Contact</h2>

      <div className={styles.content}>
        <div className={styles.infoCard}>
          <h3>Contact Information</h3>
          <p>
            You can reach me through the following channels:
          </p>

          <ul className={styles.infoList}>
            <li><strong>Email:</strong> <a href="mailto:alvarosiles499@gmail.com">
  alvarosiles499@gmail.com
</a></li>
            <li><strong>Phone:</strong> <a href="tel:+50662889872">+506 6288 9872</a></li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="linkedin.com/in/alvaro-siles-quesada-731a8b217" target="_blank">Direct URL</a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Alvaro499" target="_blank">Direct Link</a>
            </li>
          </ul>
        </div>

        <div className={styles.formCard} >
          <form className={styles.form} onSubmit={handleSubmit}>
            <h4 className={styles.formTitle}>Contact Form</h4>

            <Alert 
              type={alert.type} 
              message={alert.message} 
              onClose={() => setAlert({ type: "", message: "" })}
            />

            <div className={styles.formInputs}>
              <label className={styles.formLabel}>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder=" "
                  required
                />
                <span className={styles.formText}>Name:</span>
              </label>

              <label className={styles.formLabel}>
                <input
                  type="text"
                  name="subject"
                  className={styles.formInput}
                  placeholder=" "
                  required
                />
                <span className={styles.formText}>Subject:</span>
              </label>

              <label className={styles.formLabel}>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder=" "
                  required
                />
                <span className={styles.formText}>Email address:</span>
              </label>

              <label className={styles.formLabel}>
                <textarea
                  name="message"
                  className={styles.formInput}
                  placeholder=" "
                  rows={4}
                  required
                ></textarea>
                <span className={styles.formText}>Your message</span>
              </label>
            </div>

            <input
              type="submit"
              value="Send message"
              className={styles.formSubmit}
            />
          </form>

        </div>
      </div>
    </section>

  );
}
