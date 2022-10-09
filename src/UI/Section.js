import React from "react";
import styles from "./Section.module.scss";
import { Fade } from "react-awesome-reveal";
const Section = () => {
	return (
		<div className={styles.section} id="info">
			<Fade delay={300} triggerOnce>
				<div className={styles.section__container}>
					<div className={styles.section__container__description}>
						<h2
							className={
								styles.section__container__description__title
							}
						>
							Qué es Pysano
						</h2>
						<hr></hr>
						<p
							className={
								styles.section__container__description__info
							}
						>
							PySano es una plataforma que te permite mejorar tu
							pensamiento computacional y tus habilidades en la
							programación. Dispone de una herramienta de
							selección inteligente de ejercicios de acuerdo a tus
							capacidades y necesidades, la cual actualizará tu
							desempeño según los resultados obtenidos en los
							ejercicios y te proporcionará nuevos problemas que
							se adapten a tu nivel.
						</p>
					</div>
					<div className={styles.section__container__video}>
						<iframe
							title="YouTube video player"
							src="https://www.youtube.com/embed/HZvstMP99Rw"
							frameborder="0"
							height="100%"
							width="100%"
						></iframe>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Section;
