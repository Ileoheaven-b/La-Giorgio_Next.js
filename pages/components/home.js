import styles from "../../css_components/home.module.css";

const LoadHome = () => {
  return (
    <div className={styles.home}>
      <div className={styles.chefTop}>
        <div className={styles.title}>Events</div>
        <div className={styles.sideList}>
          <div className={styles.paragraphRight}>
            For events, you can use our contact tab to call or email us and
            check if we are available at that time.
          </div>
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.title}>About Us</div>
        <div className={styles.paragraph}>
          <p>
            We are a very big restaurant chain with very good food. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Morbi molestie elit sit
            amet erat scelerisque molestie. Suspendisse potenti. Praesent est
            tellus, sagittis ac orci quis, vestibulum euismod velit.
          </p>
          <p>
            {" "}
            Cras fermentum turpis id porta congue. Aliquam semper vel magna vel
            suscipit. Etiam pulvinar non ex sed vestibulum. Ut porta ut orci sed
            malesuada.
          </p>
          <p>
            {" "}
            Pellentesque eget efficitur nibh, ut bibendum augue. Cras pharetra
            rhoncus neque, id ultrices tortor tempor sit amet. Quisque vel
            feugiat tortor, non posuere massa.
          </p>
          <p>
            {" "}
            Our employees are working very hard without any payment to give you
            the best experience. In quis odio ultricies, interdum lacus eu,
            sagittis sapien. Sed et suscipit nulla, eget placerat risus. Nam sed
            congue dolor. Quisque elit libero, malesuada porta suscipit quis,
            varius eget tellus.
          </p>
          <p>
            {" "}
            Nulla pellentesque, ante vitae maximus consectetur, justo ante
            auctor elit, vel suscipit tellus massa ornare lacus. Mauris vehicula
            cursus massa, non fermentum erat luctus consectetur.
          </p>
          <p>
            {" "}
            Praesent faucibus fermentum felis, at placerat ex egestas ac. In
            tincidunt justo ac interdum viverra. Sed aliquam mi eget elit
            elementum interdum.
          </p>
          <p>
            Aenean efficitur tellus vitae nibh vulputate tempus. Vestibulum in
            lectus quis nibh faucibus placerat.{" "}
          </p>
          <p>
            Aliquam et tellus sit amet ligula pretium aliquam pretium et ex.
            Maecenas ultrices, purus id iaculis euismod, lectus purus finibus
            augue, ac sodales mauris quam et velit. Aenean ultrices congue
            maximus.
          </p>
        </div>
        <div className={styles.title}>
          Best regards,<br></br>"La Giorgio" team
        </div>
      </div>
      <div className={styles.ourChef}>
        <div className={styles.title}>Who is Giorgio</div>
        <div className={styles.paragraphRight}>
          Giorgio. His name is Giovanni Giorgio, but everybody calls him
          Giorgio.
        </div>
      </div>
    </div>
  );
};

export default LoadHome;
