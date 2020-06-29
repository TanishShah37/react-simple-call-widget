import React from "react";
import styles from "./CallWidget.module.css";
import { useState, useEffect } from "react";

function DataProvider(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}

export default function CallWidget() {
    const data = DataProvider("https://codifyinditest.com/script_test/api-test/");
    const { labels, phone_number } = data['script test'] || {};
    return (
      <div>
           {Object.keys(data).length ? 
           (<div className={styles.card}>
            <div className={styles['click-to-call']}>
              <div className={styles['text-data']}>{labels}</div>
              <div className={styles['phone-number']}>{phone_number}</div>
            </div>
            <div className={styles.container}>
              <div className={styles['close-button']}>&#10005;</div> 
            </div>
          </div>) 
          : 
          (<div className={`${styles.card} ${styles['text-data']}`}> Loading Call Widget.... </div>)}
      </div>
    );
}