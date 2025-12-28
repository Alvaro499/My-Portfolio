import styles from "@/styles/contact-section.module.css";

export default function ContactSection() {
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

        <div className={styles.formCard}>
          <form className={styles.form} >
            <h4 className={styles.form__title}>Contact Form</h4>

            <div className={styles.form__inputs}>
              <label className={styles.form__label}>
                <input
                  type="text"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <span className={styles.form__text}>Full name</span>
              </label>

              <label className={styles.form__label}>
                <input
                  type="email"
                  className={styles.form__input}
                  placeholder=" "
                  required
                />
                <span className={styles.form__text}>Email address</span>
              </label>

              <label className={styles.form__label}>
                <textarea
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

        </div>
      </div>
    </section>

  );
}
