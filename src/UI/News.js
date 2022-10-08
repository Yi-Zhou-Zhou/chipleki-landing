import React from "react";
import styles from "./News.module.scss";
import { InstagramEmbed } from "react-social-media-embed";

const News = () => {
	return (
		<div className={styles.news} id="news">
			<div className={styles.news__group}>
				<h2 className={styles.news__group__h2}>Noticias</h2>
				<p className={styles.news__group__p}>
					Últimas noticias sobre Pysano
				</p>
				<hr className={styles.news__group__hr} />
			</div>
			<div className={styles.social}>
				<iframe
					title="PySano Facebook"
					src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpysano&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
					className={styles.social__fb}
					frameborder="0"
					allowfullscreen="true"
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				></iframe>
				<div className={styles.social__ig}>
					<InstagramEmbed
						url="https://www.instagram.com/p/CiI7mwVOw71/"
						width={328}
					/>
				</div>
			</div>
		</div>
	);
};

export default News;
