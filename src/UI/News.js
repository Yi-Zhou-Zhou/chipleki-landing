import React from "react";
import styles from "./News.module.scss"

const News = () => {

    return (
        <div className={styles.news} id="news">
            <iframe title="PySano Facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpysano&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className={styles.news__fb} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        </div>
    );
}

export default News;