import React, { Component } from "react";
import Cars from "../../components/Cars";
import Phones from "../../components/Phones";
import styles from "./Search.module.scss";

class Search extends Component {
    render() {
        return (
            <div className={styles.search} >
                <h1>Search</h1>
                <div className={styles.ok}>
                    <Cars />
                    <Phones />
                </div>
            </div>
        );
    }
}

export default Search;