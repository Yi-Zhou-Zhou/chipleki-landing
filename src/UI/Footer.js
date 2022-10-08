import React from "react";
import styles from "./Footer.module.scss";
import chipleki from "../imgs/chipleki.png";
import usm from "../imgs/usm.png";
import feria from "../imgs/feria.png";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.chipleki}>
					<div className={styles.chipleki__social}>
						<a href="https://www.facebook.com/PySano">
							<FaFacebookSquare size={32} />
						</a>
						<a href="https://www.instagram.com/pysano.fdsw/">
							<AiFillInstagram size={32} />
						</a>
						<a href="mailto:contacto.chipleki@gmail.com">
							<AiFillMail size={32} />
						</a>
					</div>
					<div className={styles.chipleki__info}>
						<div className={styles.chipleki__info__logo}>
							<img src={chipleki} alt="chipleki team" />
						</div>
						<div className={styles.chipleki__info__text}>
							<h2>Encuéntranos en</h2>
							<p>XXX Feria de Software</p>
							<p>Universidad Técnica Federico Santa María</p>
							<p>Av. España 1680, Valparaíso</p>
						</div>
					</div>
				</div>

				<div className={styles.uLogo}>
					<img src={usm} alt="usm" />
				</div>
				<div className={styles.uLogo}>
					<img src={feria} alt="fesw" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
