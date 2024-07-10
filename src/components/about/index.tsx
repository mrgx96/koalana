import style from './index.module.css';
import about from '../../assets/png/about.png';

const About = () => {
  return (
    <section className={style.section}>
      <div className={style.contentBorder}>
        <div className={style.content}>
          <div>
            <img className="img-responsive" src={about} alt="About" />
          </div>
          <div>
            <div className={style.description}>
              <h2>About</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
