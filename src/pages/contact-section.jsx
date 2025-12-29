import styles from "@/styles/contact-section.module.css";

export default function ContactSection() {

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
      alert("Message sent!");
      e.target.reset();
    } else {
      alert("Error sending message");
    }
  };





  return (
    <section className={styles.container} id="contact">
      <h2>Contact</h2>

      <div className={styles.content}>
        <div className={styles.infoCard}>
          <h3>Let’s talk</h3>
          <p>
            If you want to contact me for a project, collaboration or just to say hi,
            you can do it through these channels.
          </p>

          <ul className={styles.infoList}>
            <li><strong>Email:</strong> alvarosiles499@gmail.com</li>
            <li><strong>Phone:</strong> +506 6288 9872</li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="linkedin.com/in/alvaro-siles-quesada-731a8b217">Direct URL</a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Alvaro499">Direct Link</a>
            </li>
          </ul>
        </div>

        {/* <div className={styles.formCard} >
          <form className={styles.form} >
            <h4 className={styles.form__title}>Contact Form</h4>

            <div className={styles.form__inputs}>
              <label className={styles.form__label}>
                <input
                  type="text"
                  name="name"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <span className={styles.form__text}>Name:</span>
              </label>

              <label className={styles.form__label}>
                <input
                  type="text"
                  name="subject"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <span className={styles.form__text}>Subject:</span>
              </label>

              <label className={styles.form__label}>
                <input
                  type="email"
                  name="email"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <span className={styles.form__text}>Email address:</span>
              </label>

              <label className={styles.form__label}>
                <textarea
                  name="message"
                  className={styles.form__input}
                  placeholder=" "
                  rows={4}
                  required
                ></textarea>
                <span className={styles.form__text}>Your message</span>
              </label>
            </div>

            <input
              type="submit"
              value="Send message"
              className={styles.form__submit}
            />
          </form>

        </div> */}
      </div>
    </section>

  );
}
