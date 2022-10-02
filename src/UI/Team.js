import React from "react";
import styles from "./Team.module.scss";
import { Fade } from "react-awesome-reveal";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
const Team = () => {
	return (
		<div className={styles.container} id="equipo">
			<div className={styles.container__section}>
				<h2 className={styles.container__section__title}>
					{" "}
					Nuestro Equipo
				</h2>
				<hr />
			</div>

			<div className={styles.wrapper}>
				<Fade cascade duration={400} triggerOnce>
					<div className={`${styles.card} ${styles.card1}`}>
						<h2>Vicente de la Rosa</h2>
						<h3>Data Scientist</h3>

						<div className={styles.icons}>
							<a href="https://www.linkedin.com/in/vicente-de-la-rosa/">
								<AiFillLinkedin size={30}> </AiFillLinkedin>
							</a>
							<a href="https://www.facebook.com/vicente.delarosa.s">
								<AiFillFacebook size={30}> </AiFillFacebook>
							</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card2}`}>
						<h2>Javier Tralma</h2>
						<h3>Community Manager</h3>

						<div className={styles.icons}>
							<a href="https://www.linkedin.com/in/javier-tralma/">
								<AiFillLinkedin size={30}> </AiFillLinkedin>
							</a>
							<a href="https://www.facebook.com/javier710">
								<AiFillFacebook size={30}> </AiFillFacebook>
							</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card3}`}>
						<h2>Axel Arroyo</h2>
						<h3>Product Owner</h3>

						<div className={styles.icons}>
							<a href="https://www.linkedin.com/in/axel-arroyo-gomez/?originalSubdomain=cl">
								<AiFillLinkedin size={30}> </AiFillLinkedin>
							</a>
							<a href="https://www.facebook.com/AxelDArroyoGomez">
								<AiFillFacebook size={30}> </AiFillFacebook>
							</a>
						</div>
					</div>

					<div className={`${styles.card} ${styles.card4}`}>
						<h2>Joaquin Caqueo</h2>
						<h3>Scrum Master</h3>

						<div className={styles.icons}>
							<a href="https://www.linkedin.com/in/aazunigar/?originalSubdomain=cl">
								<AiFillLinkedin size={30}> </AiFillLinkedin>
							</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card5}`}>
						<h2>Ariel Zúñiga</h2>
						<h3>Quality Assurance</h3>
						<div className={styles.icons}>
							<a href="https://www.linkedin.com/in/aazunigar/?originalSubdomain=cl">
								<AiFillLinkedin size={30}> </AiFillLinkedin>
							</a>
							<a href="https://www.facebook.com/ariel.a.ramirez.184">
								<AiFillFacebook size={30}> </AiFillFacebook>
							</a>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card6}`}>
						<h2>Yi Zhou</h2>
						<h3>Software Developer</h3>
						<div className={styles.icons}>
							<a href="https://www.linkedin.com/in/yi-zhou-zhou/">
								<AiFillLinkedin size={30}> </AiFillLinkedin>
							</a>
							<a href="https://www.facebook.com/yicongz">
								<AiFillFacebook size={30}> </AiFillFacebook>
							</a>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Team;
